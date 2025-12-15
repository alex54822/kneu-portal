import Link from "next/link";
import { ArrowLeft, Users, MessageCircle, Heart, Star } from "lucide-react";

export default function Students() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-8">
       <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition">
        <ArrowLeft className="w-5 h-5 mr-2" /> На головну
      </Link>

      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 mb-12 border border-white/10 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Студентське Самоврядування</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Твій голос в університеті. Ми створюємо події, захищаємо права та робимо студентське життя незабутнім.</p>
        <div className="flex justify-center gap-4 mt-8">
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">Приєднатися</button>
            <button className="bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition">Написати нам</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
            { icon: Users, title: "Команда", desc: "Знай своїх представників", color: "text-blue-400" },
            { icon: Star, title: "Івенти", desc: "Вечірки, лекції, кіно", color: "text-yellow-400" },
            { icon: Heart, title: "Волонтерство", desc: "Допомога іншим", color: "text-red-400" },
            { icon: MessageCircle, title: "Фідбек", desc: "Є проблема? Кажи!", color: "text-green-400" },
        ].map((item, i) => (
             <div key={i} className="bg-[#161616] p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition duration-300">
                <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
             </div>
        ))}
      </div>
    </div>
  );
}