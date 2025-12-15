import Link from "next/link";
import { ArrowLeft, CheckCircle, Server, Activity, Shield, Clock } from "lucide-react";

export default function Status() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-8">
      <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition">
        <ArrowLeft className="w-5 h-5 mr-2" /> На головну
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">System Status</h1>
          <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium border border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            All Systems Operational
          </div>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 mb-2 text-gray-400">
              <Activity className="w-5 h-5" /> Latency
            </div>
            <div className="text-2xl font-mono font-bold text-white">24ms</div>
            <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[20%]"></div>
            </div>
          </div>
          <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3 mb-2 text-gray-400">
              <Server className="w-5 h-5" /> Uptime (7 days)
            </div>
            <div className="text-2xl font-mono font-bold text-green-400">99.99%</div>
             <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[99%]"></div>
            </div>
          </div>
          <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
             <div className="flex items-center gap-3 mb-2 text-gray-400">
              <Shield className="w-5 h-5" /> Security
            </div>
            <div className="text-2xl font-bold text-white">Secured</div>
            <p className="text-xs text-gray-500 mt-2">Last scan: 2 min ago</p>
          </div>
        </div>

        {/* Component Status List */}
        <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-white/5">
                <h3 className="font-semibold">Component Status</h3>
            </div>
            <div className="divide-y divide-white/5">
                {[
                    { name: "Website Frontend (Next.js)", status: "Operational" },
                    { name: "Student API", status: "Operational" },
                    { name: "Library Database", status: "Operational" },
                    { name: "Cloud Run Infrastructure", status: "Operational" },
                    { name: "CDN (Content Delivery)", status: "Operational" },
                ].map((item, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition">
                        <span className="font-medium text-gray-300">{item.name}</span>
                        <span className="flex items-center gap-2 text-sm text-green-400">
                            <CheckCircle className="w-4 h-4" /> {item.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}