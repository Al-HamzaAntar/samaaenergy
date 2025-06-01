
import { useState } from "react";
import { Sun, Zap, Calculator, Leaf, TrendingUp, Home, ArrowRight, Phone, Mail, Target, Eye, Users, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SolarBenefits from "@/components/SolarBenefits";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [monthlyBill, setMonthlyBill] = useState<number>(150);
  const [roofSize, setRoofSize] = useState<number>(1500);

  // Calculate estimated savings
  const annualSavings = monthlyBill * 12 * 0.9; // 90% savings estimate
  const systemCost = roofSize * 4; // $4 per sq ft estimate
  const paybackYears = Math.round(systemCost / annualSavings);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Quick Calculator Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Calculate Your Solar Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an instant estimate of how much you can save with solar energy for your home or business
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  Solar Savings Calculator
                </CardTitle>
                <CardDescription className="text-lg">
                  Enter your details to get a personalized solar estimate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="monthly-bill" className="text-base font-semibold">Monthly Electric Bill ($)</Label>
                  <Input
                    id="monthly-bill"
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    placeholder="150"
                    className="mt-2 h-12 text-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="roof-size" className="text-base font-semibold">Available Roof Space (sq ft)</Label>
                  <Input
                    id="roof-size"
                    type="number"
                    value={roofSize}
                    onChange={(e) => setRoofSize(Number(e.target.value))}
                    placeholder="1500"
                    className="mt-2 h-12 text-lg"
                  />
                </div>
                <Button className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get Detailed Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-lg">Annual Savings</p>
                      <p className="text-4xl font-bold">${annualSavings.toLocaleString()}</p>
                      <p className="text-green-100 text-sm mt-1">Based on 90% bill reduction</p>
                    </div>
                    <TrendingUp className="h-12 w-12 text-green-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-lg">Payback Period</p>
                      <p className="text-4xl font-bold">{paybackYears} years</p>
                      <p className="text-blue-100 text-sm mt-1">Return on investment</p>
                    </div>
                    <Home className="h-12 w-12 text-blue-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-lg">Estimated System Cost</p>
                      <p className="text-4xl font-bold">${systemCost.toLocaleString()}</p>
                      <p className="text-orange-100 text-sm mt-1">Before incentives</p>
                    </div>
                    <Zap className="h-12 w-12 text-orange-100" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SolarBenefits />

      {/* Our Ambitions Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Ambitions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way towards a sustainable and energy-efficient future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Message</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make the built environment a leading example of energy efficiency in the region and the world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make Yemen one of the most sustainable cities in the world
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h3>
                <p className="text-gray-600 leading-relaxed">
                  Establishment of a contracting market for the implementation of energy works, services and production lines in Yemen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients say about our solar energy solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="h-12 w-12 text-blue-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "Here the opinion is placed"
                </p>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900">Mohammed</h4>
                  <p className="text-blue-600 font-semibold">UNICEF</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="h-12 w-12 text-green-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "Here the opinion is placed"
                </p>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900">Ahmed</h4>
                  <p className="text-green-600 font-semibold">Al Rabi Energy Systems</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="h-12 w-12 text-yellow-600" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "Here the opinion is placed"
                </p>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900">Ali</h4>
                  <p className="text-yellow-600 font-semibold">FAO</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to clean, 
            renewable solar energy. Get your free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call for Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Email Consultation
            </Button>
          </div>

          <p className="text-gray-400">
            📞 1-800-SOLAR-01 | ✉️ info@solarenergy.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
