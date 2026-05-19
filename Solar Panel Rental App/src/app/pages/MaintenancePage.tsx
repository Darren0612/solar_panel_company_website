import {
  Calendar,
  CheckCircle,
  Clock,
  User,
  Phone,
  MessageCircle,
  Wrench,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, Button, Chip } from "@mui/material";

const upcomingMaintenance = [
  {
    id: 1,
    date: "25 Mei 2026",
    time: "09:00 - 11:00",
    type: "Inspeksi Rutin",
    technician: "Ahmad Fauzi",
    status: "scheduled",
  },
  {
    id: 2,
    date: "15 Juni 2026",
    time: "10:00 - 12:00",
    type: "Pembersihan Panel",
    technician: "Budi Santoso",
    status: "scheduled",
  },
];

const maintenanceHistory = [
  {
    id: 1,
    date: "18 April 2026",
    type: "Inspeksi Rutin",
    technician: "Ahmad Fauzi",
    status: "completed",
    notes: "Semua panel dalam kondisi baik. Efisiensi optimal.",
  },
  {
    id: 2,
    date: "15 Maret 2026",
    type: "Pembersihan Panel",
    technician: "Budi Santoso",
    status: "completed",
    notes: "Panel dibersihkan. Peningkatan efisiensi 8%.",
  },
  {
    id: 3,
    date: "22 Februari 2026",
    type: "Perbaikan Inverter",
    technician: "Siti Rahayu",
    status: "completed",
    notes: "Inverter diperbaiki. Sistem kembali normal.",
  },
];

export default function MaintenancePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Maintenance & Support</h1>
        <p className="text-gray-600 mt-1">
          Kelola jadwal maintenance dan hubungi tim support
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="contained"
          size="large"
          startIcon={<Calendar />}
          sx={{
            bgcolor: "rgb(249, 115, 22)",
            py: 2,
            textTransform: "none",
            "&:hover": {
              bgcolor: "rgb(234, 88, 12)",
            },
          }}
        >
          Jadwalkan Maintenance
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<Phone />}
          sx={{
            borderColor: "rgb(249, 115, 22)",
            color: "rgb(249, 115, 22)",
            py: 2,
            textTransform: "none",
            "&:hover": {
              borderColor: "rgb(234, 88, 12)",
              bgcolor: "rgb(255, 247, 237)",
            },
          }}
        >
          Hubungi Teknisi
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<MessageCircle />}
          sx={{
            borderColor: "rgb(249, 115, 22)",
            color: "rgb(249, 115, 22)",
            py: 2,
            textTransform: "none",
            "&:hover": {
              borderColor: "rgb(234, 88, 12)",
              bgcolor: "rgb(255, 247, 237)",
            },
          }}
        >
          Live Chat
        </Button>
      </div>

      {/* Upcoming Maintenance */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Jadwal Maintenance Mendatang
          </h2>
          <div className="space-y-4">
            {upcomingMaintenance.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Calendar className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.type}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{item.technician}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Chip
                    label="Terjadwal"
                    size="small"
                    sx={{
                      bgcolor: "rgb(219, 234, 254)",
                      color: "rgb(29, 78, 216)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technician Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Status Teknisi
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Ahmad Fauzi</h4>
                  <p className="text-sm text-gray-600">Senior Technician</p>
                </div>
                <Chip
                  label="Available"
                  size="small"
                  sx={{
                    bgcolor: "rgb(220, 252, 231)",
                    color: "rgb(22, 163, 74)",
                  }}
                />
              </div>

              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Budi Santoso</h4>
                  <p className="text-sm text-gray-600">Technician</p>
                </div>
                <Chip
                  label="On Duty"
                  size="small"
                  sx={{
                    bgcolor: "rgb(254, 243, 199)",
                    color: "rgb(217, 119, 6)",
                  }}
                />
              </div>

              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">Siti Rahayu</h4>
                  <p className="text-sm text-gray-600">Technician</p>
                </div>
                <Chip
                  label="Available"
                  size="small"
                  sx={{
                    bgcolor: "rgb(220, 252, 231)",
                    color: "rgb(22, 163, 74)",
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Customer Support
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <h4 className="font-semibold text-gray-800">Telepon</h4>
                </div>
                <p className="text-gray-600 mb-2">Hubungi kami langsung</p>
                <p className="font-semibold text-gray-800">0800-123-4567</p>
                <p className="text-sm text-gray-500">Senin - Jumat: 08:00 - 17:00</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                  <h4 className="font-semibold text-gray-800">Live Chat</h4>
                </div>
                <p className="text-gray-600 mb-3">Chat dengan tim support</p>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "rgb(249, 115, 22)",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "rgb(234, 88, 12)",
                    },
                  }}
                >
                  Mulai Chat
                </Button>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h4 className="font-semibold text-gray-800">Emergency</h4>
                </div>
                <p className="text-gray-600 mb-2">Untuk masalah darurat 24/7</p>
                <p className="font-semibold text-red-600">0811-999-8888</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Maintenance History */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Riwayat Maintenance
          </h2>
          <div className="space-y-4">
            {maintenanceHistory.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.type}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.technician}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{item.notes}</p>
                    </div>
                  </div>
                  <Chip
                    label="Selesai"
                    size="small"
                    sx={{
                      bgcolor: "rgb(220, 252, 231)",
                      color: "rgb(22, 163, 74)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
