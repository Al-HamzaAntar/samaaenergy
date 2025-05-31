
import { useState } from "react";
import { Sun, Zap, Calculator, Leaf, TrendingUp, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EnergyCalculator from "@/components/EnergyCalculator";
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50">
      <HeroSection />
      
      {/* Energy Calculator Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Solar Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how much you can save with solar energy tailored to your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-orange-500" />
                  Solar Calculator
                </CardTitle>
                <CardDescription>
                  Enter your details to get a personalized estimate
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="monthly-bill">Monthly Electric Bill ($)</Label>
                  <Input
                    id="monthly-bill"
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    placeholder="150"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="roof-size">Roof Size (sq ft)</Label>
                  <Input
                    id="roof-size"
                    type="number"
                    value={roofSize}
                    onChange={(e) => setRoofSize(Number(e.target.value))}
                    placeholder="1500"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="backdrop-blur-sm bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Annual Savings</p>
                      <p className="text-3xl font-bold">${annualSavings.toLocaleString()}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Payback Period</p>
                      <p className="text-3xl font-bold">{paybackYears} years</p>
                    </div>
                    <Home className="h-8 w-8 text-blue-100" />
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100">System Cost</p>
                      <p className="text-3xl font-bold">${systemCost.toLocaleString()}</p>
                    </div>
                    <Zap className="h-8 w-8 text-orange-100" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <EnergyCalculator />
      <SolarBenefits />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners who have already made the switch to clean, renewable solar energy.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 text-lg">
            Get Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
