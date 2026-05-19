import { Check, Zap, Home, Building2, Factory } from "lucide-react";
import { Card, CardContent, Button, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

const residentialPlans = [
  {
    name: "Basic Home",
    panels: 6,
    capacity: "3.3 kWp",
    price: "500.000",
    target: "3-4 people household",
    description: "Standard family home",
    contract: "5-Year Contract",
    scale: "small",
    features: [
      "6 Solar Panels (550W each)",
      "Real-time Monitoring Dashboard",
      "Maintenance 2x per year",
      "5-year warranty coverage",
      "Standard customer support",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
    ],
  },
  {
    name: "Standard Home",
    panels: 10,
    capacity: "5.5 kWp",
    price: "900.000",
    target: "Large or two-story house",
    description: "Higher electricity usage",
    contract: "5-Year Contract",
    scale: "medium",
    popular: true,
    features: [
      "10 Solar Panels (550W each)",
      "Real-time Monitoring + Analytics",
      "Maintenance 3x per year",
      "5-year warranty coverage",
      "Priority support",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
      "Battery storage option",
    ],
  },
  {
    name: "Large Home",
    panels: 16,
    capacity: "8.8 kWp",
    price: "1.500.000",
    target: "Villa or luxury home",
    description: "High energy consumption",
    contract: "5-Year Contract",
    scale: "large",
    features: [
      "16 Solar Panels (550W each)",
      "Advanced Monitoring & AI Insights",
      "Maintenance 4x per year",
      "5-year warranty coverage",
      "24/7 Priority support",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
      "Battery storage included",
      "Energy optimization consulting",
    ],
  },
];

const industrialPlans = [
  {
    name: "Small Industry",
    panels: 40,
    capacity: "22 kWp",
    price: "4.000.000",
    target: "SME Businesses",
    description: "Workshops, cafés, small production",
    contract: "10-Year Contract",
    scale: "small",
    features: [
      "40 Solar Panels (550W each)",
      "Industrial-grade monitoring",
      "Monthly maintenance service",
      "10-year warranty coverage",
      "Dedicated account manager",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
      "Production analytics dashboard",
    ],
  },
  {
    name: "Medium Industry",
    panels: 80,
    capacity: "44 kWp",
    price: "7.500.000",
    target: "Manufacturing Growth",
    description: "Small manufacturing plants",
    contract: "10-Year Contract",
    scale: "medium",
    popular: true,
    features: [
      "80 Solar Panels (550W each)",
      "Advanced industrial monitoring",
      "Bi-weekly maintenance service",
      "10-year warranty coverage",
      "24/7 Dedicated support team",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
      "Energy management system",
      "Load forecasting & optimization",
    ],
  },
  {
    name: "Large Medium Industry",
    panels: 120,
    capacity: "66 kWp",
    price: "11.000.000",
    target: "Established Factories",
    description: "Production facilities",
    contract: "10-Year Contract",
    scale: "large",
    features: [
      "120 Solar Panels (550W each)",
      "Enterprise monitoring platform",
      "Weekly maintenance service",
      "10-year warranty coverage",
      "On-site engineering support",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
      "Battery storage system",
      "Peak shaving optimization",
      "Custom integration APIs",
    ],
  },
];

const enterprisePlans = [
  {
    name: "Entry Large Industry",
    panels: 250,
    capacity: "137 kWp",
    price: "20.000.000",
    target: "Warehouses & Mid-Large Factories",
    description: "Industrial scale operations",
    contract: "10-Year Contract",
    scale: "small",
    features: [
      "250 Solar Panels (550W each)",
      "Enterprise monitoring & control",
      "24/7 Maintenance & support",
      "10-year warranty + SLA",
      "Dedicated engineering team",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
      "Industrial battery storage",
      "Advanced load management",
      "Predictive maintenance AI",
    ],
  },
  {
    name: "Standard Large Industry",
    panels: 500,
    capacity: "275 kWp",
    price: "40.000.000",
    target: "Full Manufacturing Plants",
    description: "Large-scale production",
    contract: "10-Year Contract",
    scale: "medium",
    popular: true,
    features: [
      "500 Solar Panels (550W each)",
      "Full enterprise platform access",
      "On-site 24/7 maintenance crew",
      "10-year warranty + Premium SLA",
      "Dedicated operations team",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
      "Multi-site battery storage",
      "Energy trading capabilities",
      "Custom integration & APIs",
      "Sustainability reporting",
    ],
  },
  {
    name: "Enterprise Scale",
    panels: "1000-1700",
    capacity: "550-935 kWp",
    price: "Custom",
    priceRange: "80M - 220M",
    target: "Industrial Estates",
    description: "Mega-scale energy infrastructure",
    contract: "10-Year Contract",
    scale: "large",
    features: [
      "1000-1700 Solar Panels (550W each)",
      "White-label platform access",
      "Full on-site operations team",
      "10-year warranty + Platinum SLA",
      "Executive support & consulting",
      "Reduce electricity cost by up to 10% while offsetting up to 30% of energy usage",
      "Mega-scale battery infrastructure",
      "Grid-interactive capabilities",
      "Energy trading & optimization",
      "Full ESG reporting suite",
      "Custom R&D partnership",
    ],
  },
];

export default function SubscriptionPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const getScaleColor = (scale: string) => {
    switch (scale) {
      case "small":
        return "bg-blue-100 text-blue-700";
      case "medium":
        return "bg-orange-100 text-orange-700";
      case "large":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getScaleSize = (scale: string) => {
    switch (scale) {
      case "small":
        return "w-16 h-1.5";
      case "medium":
        return "w-24 h-1.5";
      case "large":
        return "w-32 h-1.5";
      default:
        return "w-16 h-1.5";
    }
  };

  const renderPlanCard = (plan: any) => (
    <Card
      key={plan.name}
      className={`relative h-full ${
        plan.popular ? "ring-2 ring-yellow-500 shadow-xl" : "shadow-md"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`${getScaleColor(
              plan.scale
            )} px-3 py-1 rounded-full text-xs font-semibold`}
          >
            {plan.target}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

        <div className="mb-4">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-gray-800">
              {plan.price === "Custom" ? "Custom" : `Rp ${plan.price}`}
            </span>
            {plan.price !== "Custom" && (
              <span className="text-gray-600">/month</span>
            )}
          </div>
          {plan.priceRange && (
            <p className="text-sm text-gray-600">Rp {plan.priceRange}/month</p>
          )}
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              System Size
            </span>
            <span className="text-sm font-bold text-gray-800">
              {plan.capacity}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">Solar Panels</span>
            <span className="text-sm font-semibold text-gray-800">
              {plan.panels} panels
            </span>
          </div>
          <div
            className={`${getScaleSize(
              plan.scale
            )} bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto`}
          ></div>
        </div>

        <div className="mb-3 text-xs text-gray-500 font-medium">
          {plan.contract}
        </div>

        <div className="space-y-2.5 mb-6">
          {plan.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          variant={plan.popular ? "contained" : "outlined"}
          fullWidth
          size="large"
          sx={{
            textTransform: "none",
            py: 1.5,
            fontWeight: 600,
            ...(plan.popular
              ? {
                  background: "linear-gradient(to right, #facc15, #f97316)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(to right, #eab308, #ea580c)",
                  },
                }
              : {
                  borderColor: "rgb(249, 115, 22)",
                  color: "rgb(249, 115, 22)",
                  "&:hover": {
                    borderColor: "rgb(234, 88, 12)",
                    bgcolor: "rgb(255, 247, 237)",
                  },
                }),
          }}
        >
          {plan.price === "Custom" ? "Contact Sales" : "Subscribe Now"}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Solar-as-a-Service Pricing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the perfect energy infrastructure plan for your needs. No upfront
          costs, full installation, maintenance, and monitoring included.
        </p>
      </div>

      {/* Category Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              minWidth: 200,
            },
            "& .Mui-selected": {
              color: "rgb(249, 115, 22)",
            },
            "& .MuiTabs-indicator": {
              bgcolor: "rgb(249, 115, 22)",
              height: 3,
            },
          }}
        >
          <Tab icon={<Home />} iconPosition="start" label="Residential" />
          <Tab icon={<Building2 />} iconPosition="start" label="Industrial" />
          <Tab icon={<Factory />} iconPosition="start" label="Enterprise" />
        </Tabs>
      </Box>

      {/* Plans Grid */}
      <div className="pt-6">
        {selectedTab === 0 && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Residential Plans
              </h2>
              <p className="text-gray-600 mt-1">5-Year Contract • Home Energy Solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {residentialPlans.map(renderPlanCard)}
            </div>
          </div>
        )}

        {selectedTab === 1 && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Industrial Plans
              </h2>
              <p className="text-gray-600 mt-1">
                10-Year Contract • SME & Manufacturing Solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industrialPlans.map(renderPlanCard)}
            </div>
          </div>
        )}

        {selectedTab === 2 && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Enterprise Plans
              </h2>
              <p className="text-gray-600 mt-1">
                10-Year Contract • Large-Scale Energy Infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterprisePlans.map(renderPlanCard)}
            </div>
          </div>
        )}
      </div>

      {/* Scaling Visualization */}
      <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            System Scale Comparison
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-32 font-semibold text-gray-700">Residential</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">6-16 panels</span>
                  </div>
                  <div className="text-xs text-gray-500">3.3 - 8.8 kWp capacity</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 font-semibold text-gray-700">Industrial</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-48 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">40-120 panels</span>
                  </div>
                  <div className="text-xs text-gray-500">22 - 66 kWp capacity</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 font-semibold text-gray-700">Enterprise</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-full h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">250-1700 panels</span>
                  </div>
                  <div className="text-xs text-gray-500">137 - 935 kWp capacity</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Value Proposition */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-green-50 border-2 border-green-200">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-gray-800 mb-2">Zero Upfront Cost</h3>
            <p className="text-sm text-gray-600">
              No need to buy solar panels. Just pay monthly subscription and start
              saving immediately.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-2 border-yellow-200">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="font-bold text-gray-800 mb-2">Full Service Included</h3>
            <p className="text-sm text-gray-600">
              Installation, maintenance, monitoring, and support all included in
              your plan.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-2 border-blue-200">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-gray-800 mb-2">Guaranteed Performance</h3>
            <p className="text-sm text-gray-600">
              Real-time monitoring ensures optimal energy production with guaranteed
              uptime SLA.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
              <h4 className="font-semibold text-gray-800 mb-2">
                What's included in the subscription?
              </h4>
              <p className="text-gray-700 text-sm">
                Everything: solar panel installation, monitoring system, regular
                maintenance, warranty coverage, and customer support. Zero hidden
                fees.
              </p>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
              <h4 className="font-semibold text-gray-800 mb-2">
                Can I upgrade or downgrade my plan?
              </h4>
              <p className="text-gray-700 text-sm">
                Yes. You can scale up or down after the minimum contract period.
                Price adjustments will be prorated.
              </p>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
              <h4 className="font-semibold text-gray-800 mb-2">
                What happens if a panel breaks?
              </h4>
              <p className="text-gray-700 text-sm">
                We handle all repairs and replacements at no extra cost (unless due
                to user negligence). Your energy production is our responsibility.
              </p>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
              <h4 className="font-semibold text-gray-800 mb-2">
                Do I still need PLN electricity?
              </h4>
              <p className="text-gray-700 text-sm">
                Yes. Our system works as a hybrid solution. Solar is your primary
                source, PLN acts as backup during night or low-production periods.
              </p>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
              <h4 className="font-semibold text-gray-800 mb-2">
                How much can I really save?
              </h4>
              <p className="text-gray-700 text-sm">
                All our plans reduce electricity costs by up to 10% while offsetting
                up to 30% of your total energy usage. This applies across all tiers
                from Residential to Enterprise, ensuring consistent and predictable
                savings for all customers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <CardContent className="p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Go Solar?</h2>
          <p className="text-lg text-orange-50 mb-6 max-w-2xl mx-auto">
            Join hundreds of homes and businesses already saving with clean energy.
            Get a custom quote tailored to your energy needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "rgb(249, 115, 22)",
                px: 6,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgb(254, 243, 199)",
                },
              }}
            >
              Get Custom Quote
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "white",
                color: "white",
                px: 6,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Schedule Consultation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
