import { Sun } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-8 shadow-2xl">
            <Sun className="w-24 h-24 text-orange-500" strokeWidth={2} />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          SolarRent
        </h1>

        <p className="text-2xl text-white/90 font-light">
          Solar Energy Made Simple
        </p>

        <p className="text-lg text-white/80 max-w-md mx-auto">
          Sewa panel surya untuk rumah atau bisnis Anda. Hemat biaya listrik, ramah lingkungan.
        </p>

        <div className="pt-8 space-y-4">
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/login")}
            sx={{
              bgcolor: "white",
              color: "rgb(249, 115, 22)",
              px: 6,
              py: 1.5,
              fontSize: "1.125rem",
              fontWeight: 600,
              borderRadius: "9999px",
              textTransform: "none",
              "&:hover": {
                bgcolor: "rgb(254, 243, 199)",
              },
            }}
          >
            Get Started
          </Button>

          <div className="text-white/70 text-sm">
            Sudah punya akun?{" "}
            <button
              onClick={() => navigate("/login")}
              className="underline hover:text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 text-white/60 text-sm">
        © 2026 SolarRent. All rights reserved.
      </div>
    </div>
  );
}
