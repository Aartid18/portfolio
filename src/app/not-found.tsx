import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-extrabold text-cyan-400 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
      <p className="text-slate-400 max-w-md mb-8 text-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Portfolio
      </Link>
    </div>
  );
}
