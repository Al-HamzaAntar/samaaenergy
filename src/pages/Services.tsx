
import { Zap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Our Solar Solutions Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                {t('services.title')}
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Renewable Energy Services */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-green-50 hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    {t('solutions.renewableTitle')}
                  </h3>
                  <div className="space-y-4 text-blue-700 leading-relaxed">
                    <p>{t('services.renewableContent1')}</p>
                    <p>{t('services.renewableContent2')}</p>
                    <p>{t('services.renewableContent3')}</p>
                    <p>{t('services.renewableContent4')}</p>
                    <p>{t('services.renewableContent5')}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Production Line Services */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-blue-50 hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    {t('solutions.productionTitle')}
                  </h3>
                  <div className="space-y-4 text-blue-700 leading-relaxed">
                    <p>{t('services.productionContent1')}</p>
                    <p>{t('services.productionContent2')}</p>
                    <p>{t('services.productionContent3')}</p>
                    <p>{t('services.productionContent4')}</p>
                    <p>{t('services.productionContent5')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
