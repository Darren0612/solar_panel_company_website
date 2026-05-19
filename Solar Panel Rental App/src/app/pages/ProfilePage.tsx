import { User, MapPin, Phone, Mail, Bell, Shield, Zap } from "lucide-react";
import { Card, CardContent, Button, TextField, Switch, Divider } from "@mui/material";
import { useState } from "react";

export default function ProfilePage() {
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    push: true,
    maintenance: true,
    billing: true,
    performance: true,
  });

  const handleNotificationChange = (setting: string) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Profile & Settings</h1>
        <p className="text-gray-600 mt-1">Kelola akun dan preferensi Anda</p>
      </div>

      {/* Profile Information */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-600 mt-1">Member since January 2026</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Business Plan
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Active
                </div>
              </div>
            </div>
            <Button
              variant="outlined"
              sx={{
                borderColor: "rgb(249, 115, 22)",
                color: "rgb(249, 115, 22)",
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgb(234, 88, 12)",
                  bgcolor: "rgb(255, 247, 237)",
                },
              }}
            >
              Edit Photo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Informasi Pribadi
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                fullWidth
                label="Nama Lengkap"
                defaultValue="John Doe"
                InputProps={{
                  startAdornment: <User className="w-5 h-5 text-gray-400 mr-2" />,
                }}
              />
              <TextField
                fullWidth
                label="Email"
                defaultValue="john.doe@email.com"
                type="email"
                InputProps={{
                  startAdornment: <Mail className="w-5 h-5 text-gray-400 mr-2" />,
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                fullWidth
                label="Nomor Telepon"
                defaultValue="+62 812-3456-7890"
                InputProps={{
                  startAdornment: <Phone className="w-5 h-5 text-gray-400 mr-2" />,
                }}
              />
              <TextField
                fullWidth
                label="Kota"
                defaultValue="Jakarta"
                InputProps={{
                  startAdornment: <MapPin className="w-5 h-5 text-gray-400 mr-2" />,
                }}
              />
            </div>

            <TextField
              fullWidth
              label="Alamat Instalasi"
              defaultValue="Jl. Sudirman No. 123, Jakarta Selatan"
              multiline
              rows={2}
            />

            <div className="flex justify-end gap-3 mt-4">
              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgb(209, 213, 219)",
                  color: "rgb(75, 85, 99)",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "rgb(156, 163, 175)",
                    bgcolor: "rgb(249, 250, 251)",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "rgb(249, 115, 22)",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgb(234, 88, 12)",
                  },
                }}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Details */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Detail Langganan
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Business Plan</h4>
                  <p className="text-sm text-gray-600">8 kW • 16 Panel Surya</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">Rp 1,2 Juta</p>
                <p className="text-sm text-gray-600">per bulan</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">Tanggal Mulai</p>
                <p className="font-semibold text-gray-800 mt-1">15 Januari 2026</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-600">Perpanjangan Berikutnya</p>
                <p className="font-semibold text-gray-800 mt-1">15 Juni 2026</p>
              </div>
            </div>

            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "rgb(249, 115, 22)",
                color: "rgb(249, 115, 22)",
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgb(234, 88, 12)",
                  bgcolor: "rgb(255, 247, 237)",
                },
              }}
            >
              Upgrade / Downgrade Plan
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-6 h-6 text-gray-800" />
            <h3 className="text-xl font-bold text-gray-800">
              Pengaturan Notifikasi
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Metode Notifikasi
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-sm text-gray-600">
                      Terima notifikasi via email
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.email}
                    onChange={() => handleNotificationChange("email")}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "rgb(249, 115, 22)",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        bgcolor: "rgb(249, 115, 22)",
                      },
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">SMS</p>
                    <p className="text-sm text-gray-600">
                      Terima notifikasi via SMS
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.sms}
                    onChange={() => handleNotificationChange("sms")}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "rgb(249, 115, 22)",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        bgcolor: "rgb(249, 115, 22)",
                      },
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Push Notification</p>
                    <p className="text-sm text-gray-600">
                      Notifikasi langsung di aplikasi
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.push}
                    onChange={() => handleNotificationChange("push")}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "rgb(249, 115, 22)",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        bgcolor: "rgb(249, 115, 22)",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <Divider />

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Tipe Notifikasi
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Maintenance</p>
                    <p className="text-sm text-gray-600">
                      Jadwal & update maintenance
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.maintenance}
                    onChange={() => handleNotificationChange("maintenance")}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "rgb(249, 115, 22)",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        bgcolor: "rgb(249, 115, 22)",
                      },
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Billing</p>
                    <p className="text-sm text-gray-600">
                      Tagihan & pembayaran
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.billing}
                    onChange={() => handleNotificationChange("billing")}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "rgb(249, 115, 22)",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        bgcolor: "rgb(249, 115, 22)",
                      },
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Performance</p>
                    <p className="text-sm text-gray-600">
                      Update performa & efisiensi
                    </p>
                  </div>
                  <Switch
                    checked={notificationSettings.performance}
                    onChange={() => handleNotificationChange("performance")}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "rgb(249, 115, 22)",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        bgcolor: "rgb(249, 115, 22)",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-gray-800" />
            <h3 className="text-xl font-bold text-gray-800">Keamanan</h3>
          </div>

          <div className="space-y-4">
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "rgb(209, 213, 219)",
                color: "rgb(75, 85, 99)",
                py: 1.5,
                textTransform: "none",
                justifyContent: "space-between",
                "&:hover": {
                  borderColor: "rgb(156, 163, 175)",
                  bgcolor: "rgb(249, 250, 251)",
                },
              }}
            >
              <span>Ubah Password</span>
              <span className="text-gray-400">›</span>
            </Button>

            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "rgb(209, 213, 219)",
                color: "rgb(75, 85, 99)",
                py: 1.5,
                textTransform: "none",
                justifyContent: "space-between",
                "&:hover": {
                  borderColor: "rgb(156, 163, 175)",
                  bgcolor: "rgb(249, 250, 251)",
                },
              }}
            >
              <span>Two-Factor Authentication</span>
              <span className="text-gray-400">›</span>
            </Button>

            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "rgb(209, 213, 219)",
                color: "rgb(75, 85, 99)",
                py: 1.5,
                textTransform: "none",
                justifyContent: "space-between",
                "&:hover": {
                  borderColor: "rgb(156, 163, 175)",
                  bgcolor: "rgb(249, 250, 251)",
                },
              }}
            >
              <span>Aktifitas Login</span>
              <span className="text-gray-400">›</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-2 border-red-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-red-600 mb-2">Danger Zone</h3>
          <p className="text-gray-600 mb-4">
            Tindakan berikut bersifat permanen dan tidak dapat dibatalkan
          </p>
          <div className="space-y-3">
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "rgb(239, 68, 68)",
                color: "rgb(239, 68, 68)",
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgb(220, 38, 38)",
                  bgcolor: "rgb(254, 242, 242)",
                },
              }}
            >
              Pause Subscription
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "rgb(239, 68, 68)",
                color: "rgb(239, 68, 68)",
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgb(220, 38, 38)",
                  bgcolor: "rgb(254, 242, 242)",
                },
              }}
            >
              Cancel Subscription
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: "rgb(239, 68, 68)",
                color: "rgb(239, 68, 68)",
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgb(220, 38, 38)",
                  bgcolor: "rgb(254, 242, 242)",
                },
              }}
            >
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
