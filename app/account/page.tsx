"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function AccountLoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

setLoading(true);
setError("");

const { error } = await supabase.auth.signInWithPassword({
  email,
  password,
});

if (error) {
  setError(error.message);
  setLoading(false);
  return;
}

router.push("/account/dashboard");

    };

    return ( <main className="min-h-screen bg-background flex">
        {/* Left Panel */} <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden border-r border-white/5"> <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

        <div
            className="absolute inset-0"
            style={{
                background:
                    "radial-gradient(circle at 20% 20%, rgba(180,220,255,0.12), transparent 40%), radial-gradient(circle at 80% 80%, rgba(180,220,255,0.05), transparent 50%)",
            }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
                <div
                    className="font-playfair uppercase text-accent/5 tracking-[0.15em]"
                    style={{
                        fontSize: "12rem",
                        lineHeight: 0.8,
                    }}
                >
                    ARTIST
                </div>

                <div
                    className="font-playfair uppercase text-accent/5 tracking-[0.15em]"
                    style={{
                        fontSize: "12rem",
                        lineHeight: 0.8,
                    }}
                >
                    PORTAL
                </div>
            </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-20">
            <Image
                src="/crestholm.svg"
                alt="CRESTHOLM"
                width={180}
                height={60}
                className="invert mb-12"
            />

            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-accent/40" />
                <div className="w-2 h-2 rotate-45 border border-accent/40" />
                <div className="w-16 h-px bg-accent/40" />
            </div>

            <span className="text-accent uppercase tracking-[0.4em] text-xs mb-6">
        EST. 2026 • PRIVATE ACCESS
      </span>

            <h1 className="font-playfair text-6xl leading-tight mb-8">
                Built For Artists.
                <br />
                Made To Endure.
            </h1>

            <p className="text-secondary-text text-lg leading-relaxed max-w-lg">
                Access releases, assets, project timelines, analytics,
                and communications through the CRESTHOLM Artist Portal.
            </p>

            <div className="mt-16 pt-8 border-t border-white/10 max-w-md">
                <p className="text-[10px] uppercase tracking-[0.35em] text-secondary-text">
                    LABEL SYSTEM ONLINE
                </p>
            </div>
        </div>
    </div>

        {/* Right Panel */}
        <div className="flex-1 flex items-center justify-center px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md"
            >
                <div className="border border-white/10 bg-surface/40 backdrop-blur-xl p-10 rounded-sm">
        <span className="text-accent uppercase tracking-[0.4em] text-xs mb-4 block">
          Artist Portal
        </span>

                    <h2 className="font-playfair text-4xl mb-8">
                        Sign In
                    </h2>

                    <form
                        onSubmit={handleLogin}
                        className="space-y-6"
                    >
                        <div>
                            <label className="text-xs uppercase tracking-[0.3em] text-secondary-text block mb-3">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="artist@crestholm.co"
                                className="w-full bg-background border border-white/10 px-4 py-4 outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div>
                            <label className="text-xs uppercase tracking-[0.3em] text-secondary-text block mb-3">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="••••••••"
                                className="w-full bg-background border border-white/10 px-4 py-4 outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        {error && (
                            <div className="text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-accent text-black font-medium uppercase tracking-[0.2em] hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {loading
                                ? "Signing In..."
                                : "Sign In"}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5">
                        <p className="text-secondary-text text-sm leading-relaxed">
                            Artist Portal access is currently
                            limited to signed CRESTHOLM artists
                            and collaborators.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block mt-4 text-accent text-sm uppercase tracking-[0.2em]"
                        >
                            Request Access →
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    </main>
);
}
