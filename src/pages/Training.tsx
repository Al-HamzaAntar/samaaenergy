
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface TrainingFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  additionalInfo: string;
}

const Training = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<TrainingFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      course: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (data: TrainingFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(t('training.success.title'), {
        description: t('training.success.description'),
      });
      
      form.reset();
    } catch (error) {
      toast.error(t('training.error.title'), {
        description: t('training.error.description'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Training Application Form Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                {t('training.form.title')}
              </h2>
              <p className="text-xl text-blue-700">
                {t('training.form.subtitle')}
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <FormField
                        control={form.control}
                        name="name"
                        rules={{ required: t('training.form.nameRequired') }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-semibold">
                              {t('training.form.name')}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t('training.form.namePlaceholder')}
                                {...field}
                                className="border-gray-300 focus:border-blue-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email Field */}
                      <FormField
                        control={form.control}
                        name="email"
                        rules={{ 
                          required: t('training.form.emailRequired'),
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t('training.form.emailInvalid')
                          }
                        }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-blue-900 font-semibold">
                              {t('training.form.email')}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder={t('training.form.emailPlaceholder')}
                                {...field}
                                className="border-gray-300 focus:border-blue-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Phone Field */}
                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{ required: t('training.form.phoneRequired') }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900 font-semibold">
                            {t('training.form.phone')}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder={t('training.form.phonePlaceholder')}
                              {...field}
                              className="border-gray-300 focus:border-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Course Selection */}
                    <FormField
                      control={form.control}
                      name="course"
                      rules={{ required: t('training.form.courseRequired') }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900 font-semibold">
                            {t('training.form.course')}
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-blue-500">
                                <SelectValue placeholder={t('training.form.coursePlaceholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="solar-energy">
                                {t('training.courses.solarEnergy')}
                              </SelectItem>
                              <SelectItem value="production-line">
                                {t('training.courses.productionLine')}
                              </SelectItem>
                              <SelectItem value="certification">
                                {t('training.courses.certification')}
                              </SelectItem>
                              <SelectItem value="maintenance">
                                {t('training.courses.maintenance')}
                              </SelectItem>
                            </SelectContent>
                          </Select>
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
                            {t('training.form.additionalInfo')}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t('training.form.additionalInfoPlaceholder')}
                              className="min-h-[120px] border-gray-300 focus:border-blue-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 text-lg"
                    >
                      {isSubmitting ? t('training.form.submitting') : t('training.form.submit')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
      
      <Footer />
    </div>
  );
};

export default Training;
