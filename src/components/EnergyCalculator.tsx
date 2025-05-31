
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingDown, Leaf } from "lucide-react";

const EnergyCalculator = () => {
  const [systemSize, setSystemSize] = useState([6]);
  const [sunHours, setSunHours] = useState([5]);

  const monthlyData = [
    { month: 'Jan', production: systemSize[0] * sunHours[0] * 30 * 0.8 },
    { month: 'Feb', production: systemSize[0] * sunHours[0] * 28 * 0.9 },
    { month: 'Mar', production: systemSize[0] * sunHours[0] * 31 * 1.1 },
    { month: 'Apr', production: systemSize[0] * sunHours[0] * 30 * 1.2 },
    { month: 'May', production: systemSize[0] * sunHours[0] * 31 * 1.3 },
    { month: 'Jun', production: systemSize[0] * sunHours[0] * 30 * 1.4 },
    { month: 'Jul', production: systemSize[0] * sunHours[0] * 31 * 1.4 },
    { month: 'Aug', production: systemSize[0] * sunHours[0] * 31 * 1.3 },
    { month: 'Sep', production: systemSize[0] * sunHours[0] * 30 * 1.2 },
    { month: 'Oct', production: systemSize[0] * sunHours[0] * 31 * 1.0 },
    { month: 'Nov', production: systemSize[0] * sunHours[0] * 30 * 0.9 },
    { month: 'Dec', production: systemSize[0] * sunHours[0] * 31 * 0.8 },
  ];

  const yearlyData = [
    { year: 'Year 1', savings: 1500 },
    { year: 'Year 5', savings: 7500 },
    { year: 'Year 10', savings: 15000 },
    { year: 'Year 15', savings: 22500 },
    { year: 'Year 20', savings: 30000 },
    { year: 'Year 25', savings: 37500 },
  ];

  const totalAnnualProduction = monthlyData.reduce((sum, month) => sum + month.production, 0);
  const co2Reduction = totalAnnualProduction * 0.4; // kg CO2 per kWh

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Energy Production
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Adjust the parameters to see how different factors affect your solar energy production
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Configuration</CardTitle>
                <CardDescription>Adjust parameters to see energy production</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">System Size</span>
                    <Badge variant="secondary">{systemSize[0]} kW</Badge>
                  </div>
                  <Slider
                    value={systemSize}
                    onValueChange={setSystemSize}
                    max={15}
                    min={3}
                    step={0.5}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Daily Sun Hours</span>
                    <Badge variant="secondary">{sunHours[0]} hrs</Badge>
                  </div>
                  <Slider
                    value={sunHours}
                    onValueChange={setSunHours}
                    max={8}
                    min={3}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">Annual Production</p>
                      <p className="text-2xl font-bold">{Math.round(totalAnnualProduction).toLocaleString()} kWh</p>
                    </div>
                    <Zap className="h-8 w-8 text-yellow-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">CO₂ Reduction</p>
                      <p className="text-2xl font-bold">{Math.round(co2Reduction).toLocaleString()} kg</p>
                    </div>
                    <Leaf className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Monthly Savings</p>
                      <p className="text-2xl font-bold">${Math.round(totalAnnualProduction * 0.12 / 12)}</p>
                    </div>
                    <TrendingDown className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Charts */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Energy Production</CardTitle>
                <CardDescription>kWh generated throughout the year</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${Math.round(value as number)} kWh`, 'Production']} />
                    <Bar dataKey="production" fill="url(#energyGradient)" />
                    <defs>
                      <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0.8}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cumulative Savings Over Time</CardTitle>
                <CardDescription>Total savings with solar installation</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${(value as number).toLocaleString()}`, 'Savings']} />
                    <Line 
                      type="monotone" 
                      dataKey="savings" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyCalculator;
