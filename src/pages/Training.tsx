
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const formSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون أكثر من حرفين"),
  email: z.string().email("يرجى إدخال بريد إلكتروني صحيح"),
  phone: z.string().min(9, "رقم الهاتف يجب أن يكون أكثر من 9 أرقام"),
  course: z.string().min(1, "يرجى اختيار الدورة"),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Training = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "تم إرسال الطلب بنجاح",
        description: "سيتم التواصل معك قريباً لتأكيد التسجيل",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const courses = [
    "الطاقة الشمسية الأساسية",
    "تركيب الأنظمة الشمسية",
    "صيانة الطاقة المتجددة",
    "إدارة مشاريع الطاقة",
    "التصميم الهندسي للأنظمة الشمسية",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              استمارة التدريب
            </h1>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              يمكنك التقدم كمتدرب في إحدى الدورات المتاحة عبر ملء الاستمارة وسيتم التواصل معك
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
                        <FormLabel className="text-blue-900 font-semibold text-right block">
                          اسمك
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="text-right border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="أدخل اسمك الكامل"
                            dir="rtl"
                          />
                        </FormControl>
                        <FormMessage className="text-right" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900 font-semibold text-right block">
                          بريدك الإلكتروني
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="example@email.com"
                          />
                        </FormControl>
                        <FormMessage className="text-right" />
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
                      <FormLabel className="text-blue-900 font-semibold text-right block">
                        رقم الجوال
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          className="text-right border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="9xxxxxxxx"
                          dir="rtl"
                        />
                      </FormControl>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />

                {/* Course Selection */}
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-900 font-semibold text-right block">
                        اختيار الدورة
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="text-right border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="قريباً" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course} value={course} className="text-right">
                              {course}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-right" />
                    </FormItem>
                  )}
                />

                {/* Additional Information */}
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-900 font-semibold text-right block">
                        معلومات أخرى
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="text-right border-blue-200 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                          placeholder="أضف أي معلومات إضافية تود مشاركتها..."
                          dir="rtl"
                        />
                      </FormControl>
                      <FormMessage className="text-right" />
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
                    {isSubmitting ? "جاري الإرسال..." : "ارسال"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                لماذا تختار برامج التدريب لدينا؟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">خبراء مختصون</h4>
                  <p className="text-blue-700 text-sm">تدريب على أيدي خبراء في مجال الطاقة المتجددة</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔧</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">تدريب عملي</h4>
                  <p className="text-blue-700 text-sm">تطبيق عملي على أحدث التقنيات والمعدات</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📋</span>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">شهادة معتمدة</h4>
                  <p className="text-blue-700 text-sm">الحصول على شهادة معتمدة بعد إنهاء التدريب</p>
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

export default Training;
