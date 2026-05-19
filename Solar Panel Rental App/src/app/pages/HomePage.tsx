import {
  Zap,
  DollarSign,
  Leaf,
  Sun,
  Cloud,
  CloudRain,
  Bell,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@mui/material";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const energyData = [
  { day: "Sen", energy: 24 },
  { day: "Sel", energy: 28 },
  { day: "Rab", energy: 32 },
  { day: "Kam", energy: 29 },
  { day: "Jum", energy: 35 },
  { day: "Sab", energy: 38 },
  { day: "Min", energy: 40 },
];

const hourlyData = [
  { hour: "06:00", power: 2 },
  { hour: "08:00", power: 8 },
  { hour: "10:00", power: 15 },
  { hour: "12:00", power: 22 },
  { hour: "14:00", power: 20 },
  { hour: "16:00", power: 12 },
  { hour: "18:00", power: 4 },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor your solar energy in real-time</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Energi Hari Ini</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">32.5 kWh</h3>
                <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +12% dari kemarin
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Penghematan Bulan Ini</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">Rp 450K</h3>
                <p className="text-sm text-green-600 mt-1">vs listrik PLN</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">CO₂ Dikurangi</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">145 kg</h3>
                <p className="text-sm text-gray-600 mt-1">bulan ini</p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Efisiensi Panel</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">94%</h3>
                <p className="text-sm text-green-600 mt-1">Optimal</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Sun className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Produksi Energi Mingguan
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="energy"
                  stroke="#f97316"
                  fill="#fed7aa"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Daya Real-Time (Hari Ini)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="power"
                  stroke="#f97316"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* System Status & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Status Sistem
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-gray-800">Panel Aktif</p>
                    <p className="text-sm text-gray-600">12/12 panel beroperasi</p>
                  </div>
                </div>
                <Sun className="w-6 h-6 text-green-600" />
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Cuaca</p>
                    <p className="text-sm text-gray-600">Cerah berawan, 32°C</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-blue-600">Baik</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <div>
                    <p className="font-medium text-gray-800">Daya Saat Ini</p>
                    <p className="text-sm text-gray-600">3.2 kW sedang diproduksi</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-orange-600">Aktif</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Notifikasi</h3>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex gap-3">
                  <div className="bg-blue-100 p-2 rounded-full h-fit">
                    <Wrench className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      Maintenance Terjadwal
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Inspeksi rutin pada 25 Mei 2026
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 hari lagi</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex gap-3">
                  <div className="bg-green-100 p-2 rounded-full h-fit">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Efisiensi Meningkat</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Panel Anda menghasilkan 15% lebih banyak minggu ini
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 hari lalu</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex gap-3">
                  <div className="bg-orange-100 p-2 rounded-full h-fit">
                    <DollarSign className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Tagihan Dibuat</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Tagihan bulan Mei: Rp 500.000
                    </p>
                    <p className="text-xs text-gray-500 mt-1">3 hari lalu</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
