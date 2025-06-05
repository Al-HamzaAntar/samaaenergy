
import { BookOpen, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Training = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Training Programs Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                {t('training.title')}
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                {t('training.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solar Energy Training */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-green-50 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {t('language') === 'ar' ? 'تدريب الطاقة الشمسية' : 'Solar Energy Training'}
                  </h3>
                  <p className="text-blue-700 leading-relaxed mb-6">
                    {t('language') === 'ar' 
                      ? 'تدريب شامل على تقنيات الطاقة الشمسية وتركيب الأنظمة'
                      : 'Comprehensive training on solar energy technologies and system installation'
                    }
                  </p>
                  <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                    {t('language') === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>

              {/* Production Line Training */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-blue-50 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {t('language') === 'ar' ? 'تدريب خطوط الإنتاج' : 'Production Line Training'}
                  </h3>
                  <p className="text-blue-700 leading-relaxed mb-6">
                    {t('language') === 'ar' 
                      ? 'تدريب متخصص على صيانة وتشغيل خطوط الإنتاج'
                      : 'Specialized training on production line maintenance and operation'
                    }
                  </p>
                  <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                    {t('language') === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>

              {/* Certification Programs */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-green-50 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {t('language') === 'ar' ? 'برامج الشهادات' : 'Certification Programs'}
                  </h3>
                  <p className="text-blue-700 leading-relaxed mb-6">
                    {t('language') === 'ar' 
                      ? 'برامج شهادات معتمدة في مجال الطاقة المتجددة'
                      : 'Accredited certification programs in renewable energy field'
                    }
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                    {t('language') === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Training Benefits */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  {t('language') === 'ar' ? 'فوائد التدريب' : 'Training Benefits'}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    {t('language') === 'ar' ? 'خبرة عملية' : 'Hands-on Experience'}
                  </h4>
                  <p className="text-blue-700 text-sm">
                    {t('language') === 'ar' 
                      ? 'تدريب عملي على أحدث التقنيات'
                      : 'Practical training on latest technologies'
                    }
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    {t('language') === 'ar' ? 'خبراء مؤهلون' : 'Expert Instructors'}
                  </h4>
                  <p className="text-blue-700 text-sm">
                    {t('language') === 'ar' 
                      ? 'تدريب من قبل خبراء في المجال'
                      : 'Training by industry experts'
                    }
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    {t('language') === 'ar' ? 'شهادات معتمدة' : 'Certified Credentials'}
                  </h4>
                  <p className="text-blue-700 text-sm">
                    {t('language') === 'ar' 
                      ? 'شهادات معترف بها دولياً'
                      : 'Internationally recognized certificates'
                    }
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    {t('language') === 'ar' ? 'مواد تعليمية شاملة' : 'Comprehensive Materials'}
                  </h4>
                  <p className="text-blue-700 text-sm">
                    {t('language') === 'ar' 
                      ? 'مواد تدريبية متقدمة ومحدثة'
                      : 'Advanced and updated training materials'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
      
      <Footer />
    </div>
  );
};

export default Training;
