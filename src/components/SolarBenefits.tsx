
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

const SolarBenefits = () => {
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
              About Us
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-blue-700 leading-relaxed">
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

      {/* Our Solar Solutions Section - Simplified */}
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
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Renewable Energy Services
                </h3>
                <Link 
                  to="/services"
                  className="text-blue-600 hover:text-green-600 font-medium transition-colors duration-300"
                >
                  Learn More →
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
                  Production Line Services
                </h3>
                <Link 
                  to="/services"
                  className="text-blue-600 hover:text-green-600 font-medium transition-colors duration-300"
                >
                  Learn More →
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
            <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
            <p className="text-xl text-blue-100">Delivering excellence in solar energy solutions</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div ref={energySaving.elementRef} className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Battery className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-green-300 transition-all duration-300">
                {energySaving.count.toLocaleString()}
              </div>
              <div className="text-blue-100">Energy Saving (kWh)</div>
            </div>
            <div ref={productionLines.elementRef} className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Settings className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-green-300 transition-all duration-300">
                {productionLines.count.toLocaleString()}
              </div>
              <div className="text-blue-100">Operating Production Lines</div>
            </div>
            <div ref={successfulProjects.elementRef} className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-green-300 transition-all duration-300">
                {successfulProjects.count.toLocaleString()}
              </div>
              <div className="text-blue-100">Successful Projects</div>
            </div>
            <div ref={workingHands.elementRef} className="space-y-2">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-green-300 transition-all duration-300">
                {workingHands.count.toLocaleString()}
              </div>
              <div className="text-blue-100">Working Hands</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarBenefits;
