
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(9, "Phone number must be at least 9 digits"),
  specialization: z.string().min(1, "Please select a specialization"),
  cvFile: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      specialization: "",
      cvFile: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('careers.success.title'),
        description: t('careers.success.description'),
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: t('careers.error.title'),
        description: t('careers.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const specializations = [
    "Accountant",
    "Internal Auditor",
    "Legal Advisor",
    "Business Correspondent",
    "Graphic Designer",
    "Human Resources",
    "Marketing",
    "Engineer",
    "Administration Manager",
    "Maintenance",
    "Storage",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              {t('careers.title')}
            </h1>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              {t('careers.subtitle')}
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900 font-semibold">
                          {t('careers.form.name')}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder={t('careers.form.namePlaceholder')}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900 font-semibold">
                          {t('careers.form.email')}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder={t('careers.form.emailPlaceholder')}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-900 font-semibold">
                        {t('careers.form.phone')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder={t('careers.form.phonePlaceholder')}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Specialization */}
                <FormField
                  control={form.control}
                  name="specialization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-900 font-semibold">
                        {t('careers.form.specialization')}
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Accountant" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border border-blue-200 shadow-lg z-50">
                          {specializations.map((specialization) => (
                            <SelectItem 
                              key={specialization} 
                              value={specialization}
                              className="text-blue-900 hover:text-green-600 hover:bg-blue-50 cursor-pointer"
                            >
                              {specialization}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* CV File Upload */}
                <FormField
                  control={form.control}
                  name="cvFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-900 font-semibold">
                        {t('careers.form.cv')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder={t('careers.form.cvPlaceholder')}
                          onChange={(e) => field.onChange(e.target.files?.[0]?.name || "")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Additional Information */}
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-900 font-semibold">
                        {t('careers.form.additional')}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                          placeholder={t('careers.form.additionalPlaceholder')}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? t('careers.form.submitting') : t('careers.form.submit')}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {t('careers.whyWorkWithUs')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">{t('careers.growthOpportunities')}</h4>
                  <p className="text-blue-700 text-sm">{t('careers.growthDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌱</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">{t('careers.sustainableImpact')}</h4>
                  <p className="text-blue-700 text-sm">{t('careers.sustainableDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👥</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">{t('careers.teamEnvironment')}</h4>
                  <p className="text-blue-700 text-sm">{t('careers.teamDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Careers;
