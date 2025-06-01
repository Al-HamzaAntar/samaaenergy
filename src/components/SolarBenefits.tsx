
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

const SolarBenefits = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Sama Energy is made up of a group of professionals with experience in the energy sector working to assist businesses and businesses across the region to secure the most cost-efficient use of their facilities.
              </p>
              <p>
                Since its establishment, Sama Energy has helped many companies develop their energy strategy and make better use of the complex demand and consumption of buildings. With clients as diverse as airports, commercial and residential buildings, labor camps and engineering projects, we are proud of our track record of delivering and delivering the best energy conservation projects and consistently reliable advice.
              </p>
              <p>
                Thanks to our extensive experience and basic expertise, Sama Energy can obtain the largest range of customized solutions for your business and facilities, and we have a range of services for clients that help them grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solar Solutions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Solar Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy and production line services tailored to your specific needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Renewable Energy Services */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Renewable Energy Services
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
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
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Production Line Services
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
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

      {/* Our Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
            <p className="text-xl text-blue-100">Delivering excellence in solar energy solutions</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Battery className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-4xl font-bold text-yellow-300">67,800</div>
              <div className="text-blue-100">Energy Saving (kWh)</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Settings className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-4xl font-bold text-yellow-300">468</div>
              <div className="text-blue-100">Operating Production Lines</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-4xl font-bold text-yellow-300">987</div>
              <div className="text-blue-100">Successful Projects</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-4xl font-bold text-yellow-300">3,400</div>
              <div className="text-blue-100">Working Hands</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarBenefits;
