
import { Leaf, DollarSign, Home, Shield, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Energy Bills",
    description: "Save 50-90% on your monthly electricity costs with solar power",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Reduce your carbon footprint and help combat climate change",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Home,
    title: "Increase Home Value",
    description: "Solar installations can increase your property value by 3-4%",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description: "Reduce dependence on grid electricity and protect against rate hikes",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Reliable Technology",
    description: "Modern solar panels come with 25+ year warranties and proven durability",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Government Incentives",
    description: "Take advantage of federal tax credits and local rebate programs",
    color: "from-red-500 to-pink-500"
  }
];

const SolarBenefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Solar Energy?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the many benefits of switching to clean, renewable solar power for your home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environmental Impact Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Environmental Impact of Solar Energy
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">1.2 tons</div>
              <div className="text-sm text-gray-600">CO₂ saved per year<br />per kW installed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">30 years</div>
              <div className="text-sm text-gray-600">Average lifespan<br />of solar panels</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">25%</div>
              <div className="text-sm text-gray-600">Efficiency of<br />modern panels</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">2-5 years</div>
              <div className="text-sm text-gray-600">Energy payback<br />time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarBenefits;
