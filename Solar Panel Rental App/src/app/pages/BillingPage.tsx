import {
  CreditCard,
  Download,
  CheckCircle,
  Clock,
  XCircle,
  Wallet,
} from "lucide-react";
import { Card, CardContent, Button, Chip } from "@mui/material";

const currentBill = {
  month: "Mei 2026",
  amount: 1200000,
  dueDate: "31 Mei 2026",
  status: "unpaid",
  items: [
    { name: "Sewa Panel Surya - Business Plan", amount: 1200000 },
    { name: "Maintenance Bulanan", amount: 0, note: "Termasuk dalam paket" },
  ],
};

const paymentHistory = [
  {
    id: 1,
    month: "April 2026",
    date: "28 April 2026",
    amount: 1200000,
    status: "paid",
    method: "Transfer Bank",
  },
  {
    id: 2,
    month: "Maret 2026",
    date: "30 Maret 2026",
    amount: 1200000,
    status: "paid",
    method: "E-Wallet (GoPay)",
  },
  {
    id: 3,
    month: "Februari 2026",
    date: "28 Februari 2026",
    amount: 1200000,
    status: "paid",
    method: "Transfer Bank",
  },
  {
    id: 4,
    month: "Januari 2026",
    date: "30 Januari 2026",
    amount: 1200000,
    status: "paid",
    method: "QRIS",
  },
];

const paymentMethods = [
  {
    id: 1,
    type: "Bank Transfer",
    name: "BCA *** 1234",
    default: true,
  },
  {
    id: 2,
    type: "E-Wallet",
    name: "GoPay (081234567890)",
    default: false,
  },
];

export default function BillingPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Payment & Billing</h1>
        <p className="text-gray-600 mt-1">Kelola pembayaran dan riwayat tagihan</p>
      </div>

      {/* Current Bill */}
      <Card className="border-l-4 border-orange-500">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Tagihan {currentBill.month}
              </h2>
              <p className="text-gray-600 mt-1">
                Jatuh tempo: {currentBill.dueDate}
              </p>
            </div>
            <Chip
              label="Belum Dibayar"
              sx={{
                bgcolor: "rgb(254, 243, 199)",
                color: "rgb(217, 119, 6)",
                fontWeight: 600,
              }}
            />
          </div>

          <div className="space-y-3 mb-6">
            {currentBill.items.map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  {item.note && (
                    <p className="text-sm text-gray-500">{item.note}</p>
                  )}
                </div>
                <p className="font-semibold text-gray-800">
                  {item.amount === 0 ? "-" : formatCurrency(item.amount)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold text-gray-800">Total</p>
              <p className="text-3xl font-bold text-orange-500">
                {formatCurrency(currentBill.amount)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="contained"
              size="large"
              startIcon={<CreditCard />}
              sx={{
                bgcolor: "rgb(249, 115, 22)",
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgb(234, 88, 12)",
                },
              }}
            >
              Bayar Sekarang
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download />}
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
              Download Invoice
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgb(209, 213, 219)",
                color: "rgb(75, 85, 99)",
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  borderColor: "rgb(156, 163, 175)",
                  bgcolor: "rgb(249, 250, 251)",
                },
              }}
            >
              Atur Auto Debit
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Metode Pembayaran</h2>
            <Button
              variant="outlined"
              size="small"
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
              + Tambah Metode
            </Button>
          </div>

          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {method.type === "Bank Transfer" ? (
                      <CreditCard className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Wallet className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{method.type}</p>
                    <p className="text-sm text-gray-600">{method.name}</p>
                  </div>
                </div>
                {method.default && (
                  <Chip
                    label="Default"
                    size="small"
                    sx={{
                      bgcolor: "rgb(219, 234, 254)",
                      color: "rgb(29, 78, 216)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">
              Metode Pembayaran Lainnya
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-white rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-gray-800">QRIS</p>
              </div>
              <div className="p-3 bg-white rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-gray-800">OVO</p>
              </div>
              <div className="p-3 bg-white rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-gray-800">Dana</p>
              </div>
              <div className="p-3 bg-white rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-gray-800">ShopeePay</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Riwayat Pembayaran
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Periode</th>
                  <th className="text-left py-3 px-4">Tanggal Bayar</th>
                  <th className="text-left py-3 px-4">Jumlah</th>
                  <th className="text-left py-3 px-4">Metode</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-800">
                      {payment.month}
                    </td>
                    <td className="py-4 px-4 text-gray-600">{payment.date}</td>
                    <td className="py-4 px-4 font-semibold text-gray-800">
                      {formatCurrency(payment.amount)}
                    </td>
                    <td className="py-4 px-4 text-gray-600">{payment.method}</td>
                    <td className="py-4 px-4">
                      <Chip
                        icon={<CheckCircle className="w-4 h-4" />}
                        label="Lunas"
                        size="small"
                        sx={{
                          bgcolor: "rgb(220, 252, 231)",
                          color: "rgb(22, 163, 74)",
                        }}
                      />
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        size="small"
                        startIcon={<Download />}
                        sx={{
                          textTransform: "none",
                          color: "rgb(249, 115, 22)",
                        }}
                      >
                        Invoice
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Savings Summary */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            💰 Ringkasan Penghematan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600">Total Biaya Solar</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">
                {formatCurrency(4800000)}
              </p>
              <p className="text-xs text-gray-500 mt-1">4 bulan terakhir</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimasi Biaya PLN</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">
                {formatCurrency(8200000)}
              </p>
              <p className="text-xs text-gray-500 mt-1">untuk konsumsi yang sama</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Hemat</p>
              <p className="text-2xl font-bold text-green-600 mt-1">
                {formatCurrency(3400000)}
              </p>
              <p className="text-xs text-green-600 mt-1">↑ 41% penghematan</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
