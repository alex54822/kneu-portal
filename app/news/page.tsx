import Link from "next/link";
import { ArrowLeft, Calendar, ArrowUpRight } from "lucide-react";

export default function News() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-8">
      <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition">
        <ArrowLeft className="w-5 h-5 mr-2" /> На головну
      </Link>

      <h1 className="text-3xl font-bold mb-8">Новини та Події</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Feature News */}
        <div className="md:col-span-2 bg-[#161616] rounded-3xl overflow-hidden border border-white/5 group cursor-pointer">
            <div className="h-64 md:h-80 bg-gray-800 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition duration-700"></div>
            <div className="p-8 relative z-10 bg-[#161616]">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Головне</span>
                    <span className="text-gray-500 text-sm flex items-center gap-2"><Calendar className="w-4 h-4" /> 11 Грудня 2024</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 leading-tight group-hover:text-blue-400 transition">Відкрито новий хаб інновацій та стартапів для студентів економічних спеціальностей</h2>
                <p className="text-gray-400 mb-6 line-clamp-2">КНЕУ продовжує цифрову трансформацію. Новий простір обладнано найсучаснішою технікою для роботи над проєктами.</p>
                <div className="flex items-center text-white font-semibold">Читати далі <ArrowUpRight className="w-4 h-4 ml-1" /></div>
            </div>
        </div>

        {/* Side News List */}
        <div className="flex flex-col gap-4">
            {[
                { title: "Графік зимової сесії 2024", tag: "Навчання", date: "10 Груд" },
                { title: "Лекція від експертів Google Cloud", tag: "Події", date: "09 Груд" },
                { title: "Студрада оголошує набір волонтерів", tag: "Студенти", date: "08 Груд" },
                { title: "Оновлення правил гуртожитку", tag: "Важливо", date: "05 Груд" },
            ].map((item, i) => (
                <div key={i} className="flex-1 bg-[#161616] p-6 rounded-2xl border border-white/5 hover:bg-[#202020] transition cursor-pointer flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                        <span className="bg-white/10 text-xs px-2 py-1 rounded text-gray-300">{item.tag}</span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="font-bold text-lg leading-snug">{item.title}</h3>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}