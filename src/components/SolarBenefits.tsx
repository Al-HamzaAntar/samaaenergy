
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
  Settings
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Energy Costs",
    description: "Cut your electricity bills by up to 90% with our high-efficiency solar panels",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Reduce your carbon footprint and contribute to a sustainable future",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Home,
    title: "Increase Property Value",
    description: "Solar installations can increase your property value by 3-4% on average",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description: "Protect yourself from rising electricity costs and power outages",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Tier-1 solar panels with 25+ year performance warranties",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Government Incentives",
    description: "Maximize savings with federal tax credits and local rebate programs",
    color: "from-red-500 to-pink-500"
  }
];

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Custom solar solutions for your home with professional installation"
  },
  {
    icon: Users,
    title: "Commercial Solar",
    description: "Scalable solar systems for businesses and industrial facilities"
  },
  {
    icon: Zap,
    title: "Energy Storage",
    description: "Battery storage solutions for energy independence and backup power"
  },
  {
    icon: Clock,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance packages to ensure optimal performance"
  }
];

const SolarBenefits = () => {
  return (
    <>
      {/* Why Choose Solar Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Solar Energy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of homeowners and businesses who have made the smart switch to clean, 
              renewable solar energy and are saving money while protecting the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Solar Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solar energy services tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
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
