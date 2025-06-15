import { useState } from "react";
import { Sun, Zap, Calculator, Leaf, TrendingUp, Home, ArrowRight, Phone, Mail, Target, Eye, Users, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import SolarBenefits from "@/components/SolarBenefits";
import HeroSection from "@/components/HeroSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        <HeroSection />
        
        {/* Our Customers Section */}
        <section className="py-20 px-4 bg-white" id="customers">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                {t('common.customers')}
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                {t('common.customersSubtitle')}
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Carousel 
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 4,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                    <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[180px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">WFP</h3>
                          <p className="text-green-600 font-semibold text-xs leading-relaxed">{t('customers.wfp')}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[180px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">UNICEF</h3>
                          <p className="text-green-600 font-semibold text-xs leading-relaxed">{t('customers.unicef')}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                    <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[180px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">WHO</h3>
                          <p className="text-green-600 font-semibold text-xs leading-relaxed">{t('customers.who')}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[180px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">SAVE THE CHILDREN</h3>
                          <p className="text-green-600 font-semibold text-xs leading-relaxed">{t('customers.saveTheChildren')}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                    <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[180px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">ICRC</h3>
                          <p className="text-green-600 font-semibold text-xs leading-relaxed">{t('customers.icrc')}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[180px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">UNOPS</h3>
                          <p className="text-green-600 font-semibold text-xs leading-relaxed">{t('customers.unops')}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                    <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[180px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">UNDP</h3>
                          <p className="text-green-600 font-semibold text-xs leading-relaxed">{t('customers.undp')}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>

                  
                  <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full min-h-[180px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">NRC</h3>
                          <p className="text-green-600 font-semibold text-xs leading-relaxed">{t('customers.nrc')}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        
        <SolarBenefits />

        {/* Our Ambitions Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50" id="ambitions">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                {t('common.ambitions')}
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                {t('common.ambitionsSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('common.message')}</h3>
                  <p className="text-blue-700 leading-relaxed">
                    {t('common.messageDescription')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('common.vision')}</h3>
                  <p className="text-blue-700 leading-relaxed">
                    {t('common.visionDescription')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('common.objectives')}</h3>
                  <p className="text-blue-700 leading-relaxed">
                    {t('common.objectivesDescription')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-20 px-4 bg-white" id="reviews">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                {t('common.reviews')}
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                {t('common.reviewsSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Quote className="h-12 w-12 text-blue-600" />
                  </div>
                  <p className="text-blue-800 text-lg leading-relaxed mb-6 italic">
                    "{t('reviews.testimonial1')}"
                  </p>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-blue-900">{t('reviews.customer1Name')}</h4>
                    <p className="text-green-600 font-semibold">{t('reviews.customer1Company')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Quote className="h-12 w-12 text-green-600" />
                  </div>
                  <p className="text-blue-800 text-lg leading-relaxed mb-6 italic">
                    "{t('reviews.testimonial2')}"
                  </p>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-blue-900">{t('reviews.customer2Name')}</h4>
                    <p className="text-green-600 font-semibold">{t('reviews.customer2Company')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Quote className="h-12 w-12 text-blue-600" />
                  </div>
                  <p className="text-blue-800 text-lg leading-relaxed mb-6 italic">
                    "{t('reviews.testimonial3')}"
                  </p>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-blue-900">{t('reviews.customer3Name')}</h4>
                    <p className="text-green-600 font-semibold">{t('reviews.customer3Company')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-green-800 text-white" id="contact">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('contact.title')}
              </h2>
              <h3 className="text-2xl font-semibold text-blue-200 mb-8">
                {t('contact.subtitle')}
              </h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-white/10 border-green-400/20 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <MapPin className="h-6 w-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{t('contact.location')}</h4>
                        <p className="text-blue-200 leading-relaxed">
                          {t('contact.address')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 mb-6">
                      <Mail className="h-6 w-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{t('contact.email')}</h4>
                        <p className="text-blue-200">info@samaaenergy.com</p>
                        <p className="text-blue-200">hossam@samaaenergy.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-green-400 mt-1" />
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{t('contact.phone')}</h4>
                        <p className="text-blue-200">00967777754100</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="outline" className="border-2 border-green-400/50 text-white bg-transparent hover:bg-green-400/10 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                    <Mail className="mr-2 h-5 w-5" />
                    {t('contact.emailConsultation')}
                  </Button>
                </div>
              </div>

              {/* Google Maps */}
              <div className="relative">
                <Card className="bg-white/10 border-green-400/20 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-96 w-full">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3522.9466050941937!2d44.2233161!3d15.2851632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603c5609c2b3759%3A0x2f1dca8e724fcfe7!2z2LPYp9mF2Kcg2KXZhtix2KrZiiAtIFNBTUEgRU5FUkdZ!5e1!3m2!1sar!2s" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                        title="SAMA ENERGY Location - Sana'a, Yemen">
                      </iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
