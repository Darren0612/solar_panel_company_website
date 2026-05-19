import {
  Search,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronDown,
  ChevronUp,
  Book,
  Video,
  FileText,
} from "lucide-react";
import { Card, CardContent, Button, TextField, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useState } from "react";

const faqData = [
  {
    category: "Umum",
    questions: [
      {
        q: "Apa itu SolarRent?",
        a: "SolarRent adalah layanan penyewaan panel surya yang memungkinkan Anda menggunakan energi matahari untuk kebutuhan listrik tanpa harus membeli panel surya. Kami menyediakan instalasi, maintenance, dan monitoring.",
      },
      {
        q: "Bagaimana cara kerja sistem sewa panel surya?",
        a: "Anda memilih paket sesuai kebutuhan, kami install panel surya di lokasi Anda, dan Anda membayar biaya sewa bulanan. Semua maintenance dan monitoring sudah termasuk dalam paket.",
      },
      {
        q: "Berapa lama kontrak minimum?",
        a: "Kontrak minimum adalah 12 bulan, namun Anda dapat memperpanjang atau upgrade/downgrade paket kapan saja setelah periode minimum.",
      },
    ],
  },
  {
    category: "Teknis",
    questions: [
      {
        q: "Apakah panel surya berfungsi saat hujan atau mendung?",
        a: "Ya, panel surya tetap menghasilkan listrik meskipun cuaca mendung atau hujan, namun dengan efisiensi yang lebih rendah (sekitar 10-25% dari kapasitas maksimal).",
      },
      {
        q: "Bagaimana jika ada kerusakan pada panel?",
        a: "Semua kerusakan yang bukan disebabkan oleh kesalahan pengguna ditanggung oleh kami. Tim teknisi kami akan segera memperbaiki atau mengganti panel yang rusak.",
      },
      {
        q: "Apakah saya masih perlu listrik PLN?",
        a: "Ya, sistem kami bekerja sebagai hybrid. Panel surya akan menjadi sumber utama, dan PLN sebagai backup saat panel tidak memproduksi cukup daya (malam hari atau cuaca buruk).",
      },
    ],
  },
  {
    category: "Pembayaran",
    questions: [
      {
        q: "Metode pembayaran apa saja yang tersedia?",
        a: "Kami menerima transfer bank, e-wallet (GoPay, OVO, Dana, ShopeePay), QRIS, dan auto-debit untuk kemudahan pembayaran rutin.",
      },
      {
        q: "Apakah ada biaya tersembunyi?",
        a: "Tidak ada. Harga yang tertera sudah mencakup instalasi, maintenance, monitoring, dan garansi. Tidak ada biaya tambahan kecuali Anda melakukan upgrade paket.",
      },
      {
        q: "Bagaimana jika saya terlambat membayar?",
        a: "Kami memberikan grace period 7 hari. Setelah itu, akan dikenakan denda keterlambatan 2% per bulan dan layanan dapat ditangguhkan sementara.",
      },
    ],
  },
  {
    category: "Maintenance",
    questions: [
      {
        q: "Seberapa sering panel perlu dibersihkan?",
        a: "Untuk efisiensi optimal, panel sebaiknya dibersihkan setiap 2-3 bulan. Namun frekuensi maintenance sudah disesuaikan dengan paket yang Anda pilih.",
      },
      {
        q: "Apakah saya bisa membersihkan panel sendiri?",
        a: "Kami tidak merekomendasikan karena risiko kerusakan dan keselamatan. Biarkan teknisi profesional kami yang menanganinya sesuai jadwal.",
      },
    ],
  },
];

const resources = [
  {
    icon: Book,
    title: "User Guide",
    description: "Panduan lengkap menggunakan sistem solar panel",
    link: "#",
  },
  {
    icon: Video,
    title: "Video Tutorial",
    description: "Tutorial cara monitoring dan maintenance",
    link: "#",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Dokumentasi teknis dan spesifikasi",
    link: "#",
  },
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Help Center</h1>
        <p className="text-gray-600 mt-2">
          Temukan jawaban untuk pertanyaan Anda atau hubungi kami
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari pertanyaan, topik, atau keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Telepon</h3>
            <p className="text-gray-600 text-sm mb-3">Hubungi customer service</p>
            <p className="font-semibold text-gray-800">0800-123-4567</p>
            <p className="text-xs text-gray-500 mt-1">Sen - Jum: 08:00 - 17:00</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-3">Chat dengan agent</p>
            <Button
              variant="contained"
              sx={{
                bgcolor: "rgb(249, 115, 22)",
                textTransform: "none",
                mt: 1,
                "&:hover": {
                  bgcolor: "rgb(234, 88, 12)",
                },
              }}
            >
              Mulai Chat
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 text-sm mb-3">Kirim pertanyaan via email</p>
            <p className="font-semibold text-gray-800">support@solarrent.com</p>
            <p className="text-xs text-gray-500 mt-1">Respon dalam 24 jam</p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-6 h-6 text-gray-800" />
            <h2 className="text-2xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
          </div>

          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <div className="w-1 h-6 bg-orange-500 rounded"></div>
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.questions.map((item, qIndex) => {
                  const panelId = `panel-${catIndex}-${qIndex}`;
                  return (
                    <Accordion
                      key={qIndex}
                      expanded={expandedAccordion === panelId}
                      onChange={handleAccordionChange(panelId)}
                      sx={{
                        boxShadow: "none",
                        border: "1px solid rgb(229, 231, 235)",
                        "&:before": { display: "none" },
                        borderRadius: "0.5rem !important",
                        mb: 1,
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          expandedAccordion === panelId ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )
                        }
                      >
                        <p className="font-medium text-gray-800">{item.q}</p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p className="text-gray-600">{item.a}</p>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sumber Daya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <a
                    href={resource.link}
                    className="text-orange-600 font-medium text-sm hover:text-orange-700"
                  >
                    Lihat Detail →
                  </a>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Company Info */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Informasi Perusahaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Alamat Kantor</h4>
                  <p className="text-gray-600">
                    Jl. Gatot Subroto No. 456<br />
                    Jakarta Selatan, DKI Jakarta 12930<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                  <p className="text-gray-600">+62 21 5678 9012</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@solarrent.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Jam Operasional</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-medium">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-medium text-red-600">Tutup</span>
                </div>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Emergency Support 24/7:</strong><br />
                    0811-999-8888
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Still Need Help */}
      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Masih Butuh Bantuan?</h2>
          <p className="mb-6 text-orange-100">
            Tim support kami siap membantu Anda kapan saja
          </p>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "rgb(249, 115, 22)",
              px: 6,
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "rgb(254, 243, 199)",
              },
            }}
          >
            Hubungi Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
