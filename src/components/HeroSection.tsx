
import { useState, useEffect } from "react";
import { Sun, Zap, Leaf, ArrowRight, Play } from "lucide-react";
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-green-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
                <Sun className="h-5 w-5" />
                <span>Sama Energy Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Powering Your Future with
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Clean Solar Energy
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Transform your home or business with cutting-edge solar technology. 
                Save money, reduce your carbon footprint, and achieve energy independence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-green-400/50 text-white bg-transparent hover:bg-green-400/10 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-400/20">
              <div>
                <div className="text-3xl font-bold text-green-400">987</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">67.8k</div>
                <div className="text-sm text-blue-200">kWh Energy Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">3,400</div>
                <div className="text-sm text-blue-200">Team Members</div>
              </div>
            </div>
          </div>

          {/* Solar Panel Visualization */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-800/50 to-green-800/50 rounded-3xl p-8 shadow-2xl border border-green-400/20 backdrop-blur-sm">
              {/* Solar Panel Grid */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg border border-green-400/30 relative overflow-hidden shadow-lg"
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 opacity-0 transition-opacity duration-500"
                      style={{
                        opacity: energyFlow > i * 6 ? 0.7 : 0
                      }}
                    ></div>
                    <div className="absolute inset-2 border border-green-300/20 rounded"></div>
                  </div>
                ))}
              </div>

              {/* Energy Metrics */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-green-400" />
                    <span className="text-sm font-medium">Solar Irradiance</span>
                  </div>
                  <div className="text-green-400 font-bold">850 W/m²</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-medium text-white">Power Output</span>
                  </div>
                  <div className="text-blue-400 font-bold">8.5 kW</div>
                </div>

                <div className="w-full bg-blue-800/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-100 rounded-full"
                    style={{ width: `${energyFlow}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow-xl">
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-bold">100% Clean Energy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
