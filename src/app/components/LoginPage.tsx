import React, { useState } from "react";
import { Trophy, User, ShieldCheck } from "lucide-react";

interface LoginPageProps {
  onLogin: (role: "mahasiswa" | "admin") => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 border border-border">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Masuk ke LombaKu</h1>
          <p className="text-sm text-muted-foreground text-center">Pilih peran Anda untuk melanjutkan.</p>
        </div>

        <div className="space-y-4">
          <button onClick={() => onLogin("mahasiswa")} className="w-full flex items-center gap-4 p-4 border border-border rounded-xl hover:border-primary hover:bg-secondary transition-all">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Login sebagai Mahasiswa</div>
              <div className="text-xs text-muted-foreground">Cari tim, kalender lomba, & ajukan lomba</div>
            </div>
          </button>

          <button onClick={() => onLogin("admin")} className="w-full flex items-center gap-4 p-4 border border-border rounded-xl hover:border-primary hover:bg-secondary transition-all">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Login sebagai Admin</div>
              <div className="text-xs text-muted-foreground">Kelola pengajuan lomba & operasional</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
