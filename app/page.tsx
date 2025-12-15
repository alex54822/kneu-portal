import Link from "next/link";
import { BookOpen, CalendarDays, LineChart, Users, Search } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">К</div>
          <h1 className="text-2xl font-bold tracking-tight">КНЕУ <span className="text-blue-500">NextGen</span></h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-400">
          <Link href="/students" className="hover:text-white transition">Студентам</Link>
          <Link href="/schedule" className="hover:text-white transition">Викладачам</Link>
          <Link href="/library" className="hover:text-white transition">Наука</Link>
        </nav>
        <div className="bg-white/10 p-2 rounded-full">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4">

        {/* Hero Block - Main Info */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
           <div className="absolute inset-0 bg-blue-600/20 blur-3xl group-hover:bg-blue-500/30 transition-all duration-700"></div>
           <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-4 leading-tight">Майбутнє економіки починається тут.</h2>
              <p className="text-blue-100 max-w-md">Оновлений цифровий простір Київського Національного Економічного Університету.</p>
           </div>
           <Link href="/news" className="relative z-10 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold w-fit mt-6 hover:bg-blue-50 transition inline-block">
             Вступна кампанія 2025
           </Link>
        </div>

        {/* Status Block (DevOps Element) -> Link to /status */}
         <Link href="/status" className="bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-white/5 hover:border-green-500/50 transition cursor-pointer">
          <div className="flex justify-between items-start">
             <LineChart className="w-8 h-8 text-green-500" />
             <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
          </div>
           <div>
              <h3 className="text-lg font-semibold text-gray-200">Система в нормі</h3>
              <p className="text-sm text-gray-400">Всі сервіси працюють стабільно. Uptime 99.99%</p>
           </div>
        </Link>

        {/* Schedule Block -> Link to /schedule */}
        <Link href="/schedule" className="bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-white/5 hover:bg-[#202020] transition group">
           <CalendarDays className="w-8 h-8 text-blue-400 group-hover:scale-110 transition" />
           <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-1">Мій розклад</h3>
              <p className="text-sm text-gray-400">Перевірити пари на сьогодні</p>
           </div>
        </Link>

         {/* News Block 1 -> Link to /news */}
         <Link href="/news" className="md:col-span-2 bg-[#161616] rounded-3xl p-6 border border-white/5 flex flex-col justify-end bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center relative overflow-hidden hover:border-white/20 transition group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent group-hover:bg-black/80 transition duration-500"></div>
             <div className="relative z-10">
                <span className="text-xs font-medium text-blue-400 mb-2 block">Новини університету</span>
                <h3 className="text-xl font-bold leading-tight group-hover:text-blue-200 transition">КНЕУ підписав меморандум про співпрацю з Google Україна</h3>
             </div>
        </Link>

        {/* Library Block -> Link to /library */}
        <Link href="/library" className="bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-white/5 hover:border-blue-500/30 transition">
           <BookOpen className="w-8 h-8 text-orange-400" />
           <div>
              <h3 className="text-lg font-semibold text-gray-200">Бібліотека</h3>
              <p className="text-sm text-gray-400">Цифровий репозитарій</p>
           </div>
        </Link>

        {/* Students Block -> Link to /students */}
        <Link href="/students" className="bg-[#161616] rounded-3xl p-6 flex flex-col justify-between border border-white/5 hover:border-purple-500/30 transition">
           <Users className="w-8 h-8 text-purple-400" />
           <div>
              <h3 className="text-lg font-semibold text-gray-200">Студрада</h3>
              <p className="text-sm text-gray-400">Події та ініціативи</p>
           </div>
        </Link>
      </div>
      
      <footer className="max-w-6xl mx-auto mt-20 py-8 text-center text-gray-500 text-sm border-t border-white/10">
         <p>© 2025 КНЕУ NextGen Pet Project. <br/>Designed with UI/UX & DevOps principles.</p>
      </footer>
    </main>
  );
}
