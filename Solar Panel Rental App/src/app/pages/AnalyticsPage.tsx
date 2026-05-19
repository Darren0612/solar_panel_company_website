import { TrendingUp, TrendingDown, Sun, Zap, DollarSign } from "lucide-react";
import { Card, CardContent, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", production: 850, consumption: 720, savings: 380000 },
  { month: "Feb", production: 920, consumption: 780, savings: 420000 },
  { month: "Mar", production: 980, consumption: 820, savings: 450000 },
  { month: "Apr", production: 1050, consumption: 890, savings: 480000 },
  { month: "Mei", production: 1100, consumption: 920, savings: 510000 },
];

const hourlyPattern = [
  { hour: "00", power: 0 },
  { hour: "03", power: 0 },
  { hour: "06", power: 2 },
  { hour: "09", power: 12 },
  { hour: "12", power: 22 },
  { hour: "15", power: 18 },
  { hour: "18", power: 5 },
  { hour: "21", power: 0 },
];

const efficiencyData = [
  { name: "Panel 1-4", value: 95 },
  { name: "Panel 5-8", value: 94 },
  { name: "Panel 9-12", value: 93 },
  { name: "Panel 13-16", value: 96 },
];

const weatherImpact = [
  { condition: "Cerah", production: 38 },
  { condition: "Berawan", production: 28 },
  { condition: "Mendung", production: 15 },
  { condition: "Hujan", production: 8 },
];

const COLORS = ["#f97316", "#fb923c", "#fdba74", "#fed7aa"];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("monthly");

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Statistics & Analytics</h1>
          <p className="text-gray-600 mt-1">Analisis mendalam performa solar panel Anda</p>
        </div>
        <ToggleButtonGroup
          value={timeRange}
          exclusive
          onChange={(_, value) => value && setTimeRange(value)}
          size="small"
        >
          <ToggleButton value="weekly">Mingguan</ToggleButton>
          <ToggleButton value="monthly">Bulanan</ToggleButton>
          <ToggleButton value="yearly">Tahunan</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Sun className="w-8 h-8 text-orange-500" />
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+8%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">Total Produksi</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">4,900 kWh</p>
            <p className="text-xs text-gray-500 mt-1">5 bulan terakhir</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-8 h-8 text-blue-500" />
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+5%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">Rata-rata Harian</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">32.7 kWh</p>
            <p className="text-xs text-gray-500 mt-1">Bulan ini</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-green-600" />
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+12%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">Total Hemat</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">Rp 2.24M</p>
            <p className="text-xs text-gray-500 mt-1">5 bulan terakhir</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Sun className="w-8 h-8 text-yellow-500" />
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Optimal</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">Efisiensi</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">94.5%</p>
            <p className="text-xs text-gray-500 mt-1">Rata-rata sistem</p>
          </CardContent>
        </Card>
      </div>

      {/* Production & Consumption Trend */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Produksi vs Konsumsi
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="production"
                stackId="1"
                stroke="#f97316"
                fill="#fed7aa"
                name="Produksi (kWh)"
              />
              <Area
                type="monotone"
                dataKey="consumption"
                stackId="2"
                stroke="#3b82f6"
                fill="#bfdbfe"
                name="Konsumsi (kWh)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Hourly Pattern & Savings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Pola Produksi Harian
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hourlyPattern}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="power"
                  stroke="#f97316"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  name="Daya (kW)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Penghematan Bulanan
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="savings" fill="#10b981" name="Penghematan (Rp)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Efficiency & Weather Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Efisiensi Per Kelompok Panel
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={efficiencyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {efficiencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Dampak Cuaca Terhadap Produksi
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weatherImpact} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="condition" type="category" />
                <Tooltip />
                <Bar dataKey="production" fill="#f59e0b" name="Produksi (%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Insights */}
      <Card className="bg-gradient-to-r from-orange-50 to-amber-50">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Insights & Rekomendasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Performa Meningkat</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Produksi energi Anda meningkat 8% dibanding bulan lalu. Panel bekerja
                    optimal!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg">
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Peak Hours</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Produksi maksimal terjadi antara jam 11:00-14:00. Optimalkan
                    konsumsi di jam tersebut.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">ROI Projection</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Dengan rata-rata penghematan Rp 450K/bulan, estimasi ROI dalam 3.2
                    tahun.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Maintenance Alert</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Panel 9-12 menunjukkan sedikit penurunan efisiensi. Pertimbangkan
                    pembersihan lebih awal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
