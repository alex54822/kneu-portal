import Link from "next/link";
import { ArrowLeft, Search, Book, Bookmark, Download } from "lucide-react";

export default function Library() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-8">
      <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition">
        <ArrowLeft className="w-5 h-5 mr-2" /> На головну
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
            <h1 className="text-3xl font-bold mb-2">Цифрова бібліотека</h1>
            <p className="text-gray-400">Доступ до 150,000+ наукових матеріалів</p>
        </div>
        <div className="relative w-full md:w-96">
            <input type="text" placeholder="Пошук книг, статей, авторів..." 
                className="w-full bg-[#161616] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 transition" />
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-6 scrollbar-hide">
        {["Всі", "Економіка", "Менеджмент", "IT та Data Science", "Право", "Маркетинг"].map((cat, i) => (
            <button key={i} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${i === 0 ? 'bg-white text-black font-bold' : 'bg-[#161616] text-gray-300 hover:bg-[#222] border border-white/5'}`}>
                {cat}
            </button>
        ))}
      </div>

      {/* Grid of Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
            { title: "Macroeconomics: Modern Approach", author: "Robert J. Barro", type: "PDF Підручник", color: "bg-blue-500" },
            { title: "DevOps Handbook", author: "Gene Kim", type: "Методичка", color: "bg-purple-500" },
            { title: "Основи фінансового права", author: "Колектив авторів КНЕУ", type: "Курс лекцій", color: "bg-orange-500" },
            { title: "Python for Data Analysis", author: "Wes McKinney", type: "Лабораторний практикум", color: "bg-green-500" },
            { title: "Маркетингові стратегії 2024", author: "Журнал 'Економіст'", type: "Стаття", color: "bg-pink-500" },
            { title: "Історія економічних вчень", author: "Проф. Шевченко", type: "Монографія", color: "bg-indigo-500" },
        ].map((book, i) => (
            <div key={i} className="group bg-[#161616] border border-white/5 p-5 rounded-2xl hover:border-white/20 transition cursor-pointer flex gap-4">
                <div className={`w-24 h-32 ${book.color} rounded-lg shadow-lg flex-shrink-0 flex items-center justify-center`}>
                    <Book className="text-white/50 w-8 h-8" />
                </div>
                <div className="flex flex-col justify-between py-1 w-full">
                    <div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{book.type}</span>
                        <h3 className="text-lg font-bold leading-tight mt-1 mb-1 group-hover:text-blue-400 transition">{book.title}</h3>
                        <p className="text-sm text-gray-400">{book.author}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition"><Download className="w-4 h-4" /></button>
                        <button className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition"><Bookmark className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}