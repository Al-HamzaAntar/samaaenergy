
import { Zap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Services = () => {
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
                Our Solar Solutions
              </h2>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                Comprehensive energy and production line services tailored to your specific needs
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
                    Renewable Energy Services
                  </h3>
                  <div className="space-y-4 text-blue-700 leading-relaxed">
                    <p>
                      Sama Energy offers energy solutions to serve you through its extensive experience in the fields of engineering, procurement, construction (EPC), and operation and maintenance in relation to solar energy, wind energy and water pumps.
                    </p>
                    <p>
                      Sama Energy produces integrated solutions for high quality solar and wind energy plants that are ready to run for end investors at the local and international levels, and are heading towards the future with the confidence of engineering and an environmentally friendly service concept that focuses on energy efficiency.
                    </p>
                    <p>
                      Sama Energy focuses on systems that maximize life cycle performance and returns for investors.
                    </p>
                    <p>
                      Sama Energy provides investors around the world with solutions in the design, construction and production phases of plant construction projects to generate energy from natural sources with an environmentally friendly approach. Sama Energy provides investors and business developers with full services related to project management and solutions in the field of engineering, procurement and construction through its specialized staff in these fields, using its long experience in the field of ground and roof installations (ground solar panels and rooftop solar panels).
                    </p>
                    <p>
                      Sama Energy produces system solutions that protect the global balance by reducing environmental damage to a minimum and providing great benefits to investors at the same time. Intek offers its services as a professional engineering, supply and construction company with a focus on customer satisfaction.
                    </p>
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
                    Production Line Services
                  </h3>
                  <div className="space-y-4 text-blue-700 leading-relaxed">
                    <p>
                      Sama Energy offers you a professional production line installation service thanks to our dedicated team in the sale, maintenance and installation of all used and new production lines.
                    </p>
                    <p>
                      We excel at Sama Energy in providing electronic and electrical services, including electrical services, electrical installations for all production lines, designing and maintaining control panels for all production lines, in addition to operating, adjusting and maintaining packaging machines.
                    </p>
                    <p>
                      We offer a distinctive, high-performance range of reliable engines, couplings and gearboxes for every industry and application that meets the highest standards of performance and quality requirements.
                    </p>
                    <p>
                      Mechanical services include providing and installing all spare parts required for production lines and factory supplies, and increasing the efficiency of production lines.
                    </p>
                    <p>
                      We manufacture and turn difficult mechanical parts with high precision, cutting and drilling machines for iron and concrete, and design and produce hydraulic control circuits and systems. Manufacture of mobile platforms, winches, winches and open lifts.
                    </p>
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
