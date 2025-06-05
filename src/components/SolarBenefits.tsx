
import { 
  Leaf, 
  DollarSign, 
  Home, 
  Shield, 
  Zap, 
  TrendingUp, 
  Award,
  Users,
  Clock,
  CheckCircle,
  Battery,
  Settings,
  Wrench
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";
import { useLanguage } from "@/contexts/LanguageContext";

const SolarBenefits = () => {
  const { t } = useLanguage();
  
  // Count up hooks for each achievement metric
  const energySaving = useCountUp({ end: 67800, duration: 2500 });
  const productionLines = useCountUp({ end: 468, duration: 2000 });
  const successfulProjects = useCountUp({ end: 987, duration: 2200 });
  const workingHands = useCountUp({ end: 3400, duration: 2800 });

  return (
    <>
      {/* About Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              {t('about.title')}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-lg text-blue-700 leading-relaxed">
              <p>{t('about.para1')}</p>
              <p>{t('about.para2')}</p>
              <p>{t('about.para3')}</p>
            </div>
            
            {/* Modern Office Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/76054777-365b-45cc-af68-0bd7e26e8fea.png"
                  alt="Sama Energy Modern Office"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solar Solutions Section - Simplified */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              {t('solutions.title')}
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              {t('solutions.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Renewable Energy Services */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-green-50 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {t('solutions.renewableTitle')}
                </h3>
                <Link 
                  to="/services"
                  className="text-blue-600 hover:text-green-600 font-medium transition-colors duration-300"
                >
                  {t('solutions.learnMore')} →
                </Link>
              </CardContent>
            </Card>

            {/* Production Line Services */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-blue-50 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                  <Settings className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {t('solutions.productionTitle')}
                </h3>
                <Link 
                  to="/services"
                  className="text-blue-600 hover:text-green-600 font-medium transition-colors duration-300"
                >
                  {t('solutions.learnMore')} →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Achievements Section with Animation */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">{t('achievements.title')}</h3>
            <p className="text-xl text-blue-100">{t('achievements.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div ref={energySaving.elementRef} className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Battery className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-green-300 transition-all duration-300">
                {energySaving.count.toLocaleString()}
              </div>
              <div className="text-blue-100">{t('achievements.energySaving')}</div>
            </div>
            <div ref={productionLines.elementRef} className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Settings className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-green-300 transition-all duration-300">
                {productionLines.count.toLocaleString()}
              </div>
              <div className="text-blue-100">{t('achievements.productionLines')}</div>
            </div>
            <div ref={successfulProjects.elementRef} className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-green-300 transition-all duration-300">
                {successfulProjects.count.toLocaleString()}
              </div>
              <div className="text-blue-100">{t('achievements.successfulProjects')}</div>
            </div>
            <div ref={workingHands.elementRef} className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-green-300 transition-all duration-300">
                {workingHands.count.toLocaleString()}
              </div>
              <div className="text-blue-100">{t('achievements.workingHands')}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarBenefits;
