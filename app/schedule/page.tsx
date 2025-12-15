import Link from "next/link";
import { ArrowLeft, Clock, MapPin } from "lucide-react";

export default function Schedule() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-8">
      {/* Навігація назад */}
      <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition">
        <ArrowLeft className="w-5 h-5 mr-2" />
        На головну
      </Link>

      <h1 className="text-3xl font-bold mb-6">Розклад занять</h1>

      {/* Сітка розкладу */}
      <div className="max-w-4xl space-y-4">
        {/* Приклад однієї пари */}
        <div className="bg-[#161616] p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-4">
            <div className="bg-blue-900/30 text-blue-400 p-3 rounded-xl flex flex-col items-center justify-center min-w-[80px]">
              <span className="text-xl font-bold">10:00</span>
              <span className="text-xs">11:20</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">DevOps Методології</h3>
              <p className="text-gray-400 flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4" /> 1-й корпус, ауд. 203
              </p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium flex items-center gap-2">
             <Clock className="w-4 h-4" /> Зараз триває
          </div>
        </div>

        {/* Ще одна пара */}
        <div className="bg-[#161616] p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-75">
           <div className="flex gap-4">
            <div className="bg-[#2a2a2a] text-gray-400 p-3 rounded-xl flex flex-col items-center justify-center min-w-[80px]">
              <span className="text-xl font-bold">11:40</span>
              <span className="text-xs">13:00</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">UI/UX Дизайн</h3>
              <p className="text-gray-400 flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4" /> Лекція онлайн (Zoom)
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}