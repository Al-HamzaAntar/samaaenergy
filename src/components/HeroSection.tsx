
import { useState, useEffect } from "react";
import { Sun, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [energyFlow, setEnergyFlow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyFlow(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <Sun className="h-5 w-5" />
                <span>Clean Energy Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Power Your Home with 
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> Solar Energy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Switch to clean, renewable solar energy and save thousands on your electricity bills while helping protect our planet.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-3">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Years Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">90%</div>
                <div className="text-sm text-gray-600">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Solar Panel Visualization */}
            <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-4 gap-2 mb-6">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded border border-blue-500 relative overflow-hidden"
                    style={{
                      animationDelay: `${i * 0.1}s`
                    }}
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-0 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        opacity: energyFlow > i * 6 ? 0.6 : 0
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Energy Flow Indicator */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">Solar Input</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-blue-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-100"
                      style={{ width: `${energyFlow}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Power Output</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-blue-700">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">8.5 kW</div>
                  <div className="text-xs text-blue-300">System Size</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">12,500 kWh</div>
                  <div className="text-xs text-blue-300">Annual Production</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white p-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-semibold">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
