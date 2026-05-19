import {
  Leaf,
  TreePine,
  Car,
  Droplet,
  Award,
  Share2,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, Button, LinearProgress } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const co2ReductionData = [
  { month: "Jan", co2: 95 },
  { month: "Feb", co2: 110 },
  { month: "Mar", co2: 125 },
  { month: "Apr", co2: 140 },
  { month: "Mei", co2: 145 },
];

const achievements = [
  {
    id: 1,
    title: "Eco Warrior",
    description: "Kurangi 100 kg CO₂",
    icon: "🌟",
    unlocked: true,
  },
  {
    id: 2,
    title: "Tree Hugger",
    description: "Setara tanam 50 pohon",
    icon: "🌳",
    unlocked: true,
  },
  {
    id: 3,
    title: "Clean Energy Pioneer",
    description: "6 bulan menggunakan solar",
    icon: "⚡",
    unlocked: false,
    progress: 83,
  },
  {
    id: 4,
    title: "Carbon Neutral Hero",
    description: "Kurangi 500 kg CO₂",
    icon: "🏆",
    unlocked: false,
    progress: 29,
  },
];

export default function GreenImpactPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Green Impact</h1>
        <p className="text-gray-600 mt-1">
          Kontribusi Anda untuk planet yang lebih hijau
        </p>
      </div>

      {/* Hero Stats */}
      <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <Leaf className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Total Dampak Positif Anda</h2>
            <p className="text-green-100 mt-2">
              Sejak menggunakan SolarRent (5 bulan)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-green-100 mb-2">CO₂ Dikurangi</p>
              <p className="text-4xl font-bold">615 kg</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-green-100 mb-2">Setara Pohon Ditanam</p>
              <p className="text-4xl font-bold">28 pohon</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-green-100 mb-2">Energi Bersih</p>
              <p className="text-4xl font-bold">4,900 kWh</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Impact Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">28</p>
                <p className="text-sm text-gray-600">Pohon Ditanam</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Setara dengan menanam 28 pohon yang tumbuh selama 10 tahun
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">2,450 km</p>
                <p className="text-sm text-gray-600">Emisi Mobil</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Setara tidak mengendarai mobil sejauh Jakarta-Bali
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <Droplet className="w-8 h-8 text-cyan-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">18,500 L</p>
                <p className="text-sm text-gray-600">Air Dihemat</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Penghematan air dibanding pembangkit listrik konvensional
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Leaf className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">615 kg</p>
                <p className="text-sm text-gray-600">CO₂ Reduced</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Pengurangan emisi karbon dioksida dari atmosfer
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CO2 Reduction Trend */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Tren Pengurangan CO₂
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={co2ReductionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="co2"
                stroke="#10b981"
                fill="#d1fae5"
                name="CO₂ Dikurangi (kg)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-2 mt-4 text-green-600">
            <TrendingUp className="w-5 h-5" />
            <p className="font-semibold">Rata-rata peningkatan 12% per bulan</p>
          </div>
        </CardContent>
      </Card>

      {/* SDG Goals */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Kontribusi terhadap SDGs
          </h2>
          <p className="text-gray-600 mb-6">
            Penggunaan energi surya Anda mendukung Sustainable Development Goals PBB
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-yellow-400 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center text-2xl">
                  7
                </div>
                <h4 className="font-semibold text-gray-800">Affordable & Clean Energy</h4>
              </div>
              <p className="text-sm text-gray-600">
                Akses energi bersih dan terjangkau untuk semua
              </p>
            </div>

            <div className="p-4 border-2 border-green-500 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center text-white text-2xl">
                  13
                </div>
                <h4 className="font-semibold text-gray-800">Climate Action</h4>
              </div>
              <p className="text-sm text-gray-600">
                Aksi nyata mengatasi perubahan iklim
              </p>
            </div>

            <div className="p-4 border-2 border-blue-500 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-2xl">
                  12
                </div>
                <h4 className="font-semibold text-gray-800">
                  Responsible Consumption
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                Konsumsi dan produksi yang bertanggung jawab
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements & Badges */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Pencapaian & Badge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 border-2 rounded-lg transition-all ${
                  achievement.unlocked
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="text-center mb-3">
                  <div className="text-5xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold text-gray-800">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {achievement.description}
                  </p>
                </div>
                {achievement.unlocked ? (
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Unlocked!</span>
                  </div>
                ) : (
                  <div>
                    <LinearProgress
                      variant="determinate"
                      value={achievement.progress || 0}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: "rgb(229, 231, 235)",
                        "& .MuiLinearProgress-bar": {
                          bgcolor: "rgb(249, 115, 22)",
                        },
                      }}
                    />
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      {achievement.progress}% Complete
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Share Impact */}
      <Card className="bg-gradient-to-r from-orange-50 to-amber-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Bagikan Dampak Positif Anda
              </h2>
              <p className="text-gray-600">
                Inspirasi orang lain untuk beralih ke energi terbarukan
              </p>
            </div>
            <Button
              variant="contained"
              size="large"
              startIcon={<Share2 />}
              sx={{
                bgcolor: "rgb(249, 115, 22)",
                px: 4,
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgb(234, 88, 12)",
                },
              }}
            >
              Share to Social Media
            </Button>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border-2 border-dashed border-orange-300">
            <p className="text-center text-gray-700">
              <span className="font-semibold">
                "Saya telah mengurangi 615 kg CO₂ dengan SolarRent! 🌱
              </span>
              <br />
              <span className="text-sm">
                Setara dengan menanam 28 pohon. Mari bersama beralih ke energi
                bersih!"
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
