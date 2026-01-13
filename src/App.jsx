import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, PieChart, AlertTriangle, Umbrella, ChevronDown, Phone, Mail, User, Menu, X, ArrowRight, CheckCircle2, MinusCircle,
  Heart, Briefcase, Home, Plane, TrendingUp, Activity, Dog, MapPin, Smartphone, ChevronRight, Stethoscope, Pill, Armchair,
  Coins, PiggyBank, BarChart3, Landmark, Zap, Scale, FileText, Infinity, Wallet, Hourglass, Palmtree,
  Car, Flame, ShieldAlert, Gavel, Globe, Luggage, CreditCard, Watch, Award, Apple, Bone, HeartHandshake, Syringe,
  TrendingDown, Equal, Scroll, Crown, Users,
  // 新增 AI 需要的 icon
  MessageSquare, Send, Bot, Loader2, RefreshCcw 
} from 'lucide-react';

// 【重要】請確保您的圖片檔案放在 src/assets/ 資料夾內
import lineQrCode from './assets/my_qrcode_1768092146213.jpg';

// --- 1. 人壽保險詳情頁 (紅色系) ---
const LifeInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-red-700 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">人壽保險詳情</span>
        <button onClick={onContact} className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      <header className="bg-red-50 py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-rose-500"><Heart size={32} fill="currentColor" /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">人壽保險：留愛不留債</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">這是給家人最深情的承諾。當家庭支柱倒下時，<span className="text-red-700 font-bold">理賠金</span>將代替您繼續守護摯愛，確保房貸、教育費與生活費無後顧之憂。</p>
        </div>
      </header>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12"><h2 className="text-2xl font-bold text-gray-800 mb-2">三大壽險類型解析</h2><div className="w-16 h-1 bg-red-700 mx-auto rounded-full"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform"><Shield size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">定期壽險</h3><span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">高槓桿首選</span>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed mb-6">「花小錢，買大保障」。只保障特定期間（如10年、20年），保費最便宜，適合責任最重的時期。</p>
              <ul className="space-y-2 text-sm text-gray-600"><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> 適合房貸族</li><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> 小孩成年前的防護</li><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> 符合雙十原則</li></ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-xl transition-all group">
              <div className="bg-amber-50 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform"><Briefcase size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">終身壽險</h3><span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium">資產傳承</span>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed mb-6">保障終身有效，人一定會走，所以一定賠得到。除了保障，更有資產累積與傳承的功能。</p>
              <ul className="space-y-2 text-sm text-gray-600"><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500"/> 預留遺產稅源</li><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500"/> 指定受益人傳承</li><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500"/> 強迫儲蓄功能</li></ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-xl transition-all group">
              <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform"><User size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">小額終老</h3><span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">政策優惠</span>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed mb-6">政府推動的「基本款」終身壽險。保費比一般終身險便宜約2-3成，投保門檻低，免體檢。</p>
              <ul className="space-y-2 text-sm text-gray-600"><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> 高齡者也能保</li><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> 體況寬鬆好核保</li><li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500"/> 享有最後尊嚴</li></ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
           <h2 className="text-3xl font-bold text-gray-900 mb-6">不確定自己需要多少額度？</h2>
           <p className="text-gray-600 mb-8 text-lg">根據雙十原則，建議保額為年收入的 10 倍，或是足以覆蓋剩餘房貸與小孩教育費的總和。<br/>讓我協助您試算最適合的保障方案。</p>
           <button onClick={onContact} className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mx-auto"><Phone size={20} /> 免費預約保單試算</button>
        </div>
      </section>
    </div>
  );
};

// --- 2. 醫療保險詳情頁 (綠色系) ---
const MedicalInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-emerald-50/30 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">醫療保險詳情</span>
        <button onClick={onContact} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      <header className="bg-gradient-to-br from-emerald-50 to-green-100 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-emerald-600"><Activity size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">醫療保險：生病受傷不擔心</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">應對自費醫療趨勢，給您最好的治療選擇權。<br/>當健保不夠用時，讓保險幫您支付高品質的醫療費用。</p>
        </div>
      </header>
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4 pb-2 border-b-4 border-emerald-200 inline-block">為什麼有健保還需要醫療險？</h2>
          <p className="text-gray-600 leading-relaxed text-lg">隨著醫療科技進步，標靶藥物、達文西手術動輒數十萬。健保提供的是「基本保障」，但想要更好的醫療品質、更少的副作用、更快的復原速度，您需要商業保險來轉嫁這些高額的自費帳單。</p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm"><Stethoscope size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">實支實付</h3><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold">帳單消除器</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">最基礎也最重要的防護。解決「升等病房費」、「手術費」以及最可怕的「高額醫療雜費（自費醫材）」。</p>
              <p className="text-emerald-700 font-bold text-sm">功能：花多少、賠多少 (限額內)</p>
            </div>
            <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm"><Pill size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">癌症/重大傷病</h3><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold">急用週轉金</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">罹癌初期需要長期休養，這筆錢用來填補「收入中斷」的薪水損失，或購買不受收據限制的營養品。</p>
              <p className="text-emerald-700 font-bold text-sm">功能：確診即理賠一筆大額現金</p>
            </div>
            <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm"><Armchair size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">長照失能</h3><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold">尊嚴維護者</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">解決「走不掉」的風險。當需要請看護或住機構時，不讓龐大的照護費用拖垮家人的經濟。</p>
              <p className="text-emerald-700 font-bold text-sm">功能：按月或按年給付扶助金</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-emerald-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-10">完整的醫療防護網，建議包含：</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-4 bg-emerald-800/50 rounded-lg"><CheckCircle2 className="text-emerald-300 flex-shrink-0" /><div><strong className="block text-emerald-100 mb-1">雙實支實付</strong>一份付醫藥費，一份補貼薪資損失與隱形開銷。</div></div>
            <div className="flex gap-4 p-4 bg-emerald-800/50 rounded-lg"><CheckCircle2 className="text-emerald-300 flex-shrink-0" /><div><strong className="block text-emerald-100 mb-1">足額重大傷病</strong>建議至少規劃 100 萬以上，應對突發重症風險。</div></div>
            <div className="flex gap-4 p-4 bg-emerald-800/50 rounded-lg"><CheckCircle2 className="text-emerald-300 flex-shrink-0" /><div><strong className="block text-emerald-100 mb-1">手術險與日額</strong>作為輔助，填補住院期間的額外開銷與看護費。</div></div>
            <div className="flex gap-4 p-4 bg-emerald-800/50 rounded-lg"><CheckCircle2 className="text-emerald-300 flex-shrink-0" /><div><strong className="block text-emerald-100 mb-1">豁免保費</strong>發生特定風險時，不用再繳保費，保障依然有效。</div></div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">不確定目前的保障是否足夠？</h2>
          <p className="text-gray-600 mb-8">讓我幫您檢視既有保單，補強缺口，把每一分錢都花在刀口上。</p>
          <button onClick={onContact} className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">免費保單健檢諮詢</button>
        </div>
      </section>
    </div>
  );
};

// --- 3. 儲蓄理財保險詳情頁 (金色/橙色系) ---
const SavingsInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-orange-50/30 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">儲蓄理財詳情</span>
        <button onClick={onContact} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      <header className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-amber-500"><Coins size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">儲蓄理財：時間複利的魔法</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">早一點開始，輕鬆一點退休。<br/>透過強迫儲蓄與複利滾存，為未來預約一筆確定的財富。</p>
        </div>
      </header>
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-4 pb-2 border-b-4 border-amber-200 inline-block">為什麼需要保險理財？</h2>
          <p className="text-gray-600 leading-relaxed text-lg">除了股票與基金的波動風險，您需要一個「保本且穩定增長」的核心資產。保險理財具有「強迫儲蓄」與「鎖利」的功能，確保您的退休金或子女教育金，在約定的時間點一定能到位，不受市場崩盤影響。</p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 mb-4 shadow-sm"><PiggyBank size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">增額終身壽險</h3><span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-bold">資產長大</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">保額與保單價值會隨著時間「複利增值」。活越久領越多，除了抗通膨，還能作為傳承給下一代的免稅資產。</p>
              <p className="text-amber-600 font-bold text-sm">特色：時間越長，效益越高</p>
            </div>
            <div className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 mb-4 shadow-sm"><BarChart3 size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">利變型保險</h3><span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-bold">靈活反應</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">除了預定利率，還有機會享有保險公司的「宣告利率」回饋。當市場利率上升時，您的保單價值也會跟著加速累積。</p>
              <p className="text-amber-600 font-bold text-sm">特色：進可攻，退可守</p>
            </div>
            <div className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 mb-4 shadow-sm"><Landmark size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">還本險/年金</h3><span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-bold">穩定現金流</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">約定時間一到，開始定期領錢（如每年或每月），創造源源不絕的被動收入，就像是為自己打造一份終身俸。</p>
              <p className="text-amber-600 font-bold text-sm">特色：活到老，領到老</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">您的錢，存對地方了嗎？</h2>
          <p className="text-gray-600 mb-8">好的理財規劃，能讓您在退休時優雅轉身。讓我為您試算複利效果，量身打造退休藍圖。</p>
          <button onClick={onContact} className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">預約理財諮詢</button>
        </div>
      </section>
    </div>
  );
};

// --- 4. 投資型保險詳情頁 (靛藍/紫色系) ---
const InvestmentInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-indigo-50/30 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-indigo-100 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">投資型保險詳情</span>
        <button onClick={onContact} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      
      {/* Hero */}
      <header className="bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-indigo-600"><TrendingUp size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">投資型保險：保障投資雙效合一</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            用小錢買高保障，讓資產跟著市場一起長大。<br/>
            結合<span className="text-indigo-700 font-bold">保險保障</span>與<span className="text-purple-700 font-bold">投資理財</span>的靈活工具。
          </p>
        </div>
      </header>

      {/* 概念說明 */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 pb-2 border-b-4 border-indigo-200 inline-block">魚與熊掌，可以兼得</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            傳統保險保費固定，但缺乏彈性。投資型保險將保費分為「保險成本」與「投資帳戶」。您可以根據人生階段，自由調整保額高低，並透過連結基金、ETF 等標的，參與市場獲利機會。
          </p>
        </div>
      </section>

      {/* 兩大類型 */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* 卡片 1: 變額萬能壽險 */}
            <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 mb-4 shadow-sm"><Zap size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">變額萬能壽險 (VUL)</h3>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-bold">年輕人首選</span>
              <p className="text-gray-600 text-sm mt-4 mb-4 leading-relaxed">
                特色是「保費低、保障高」。適合預算有限但責任重大的年輕族群。保費繳納彈性（有錢多繳、沒錢少繳），且擁有壽險高槓桿效益。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500"/> 保額可隨需求調整</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500"/> 繳費時間金額彈性</li>
              </ul>
            </div>

            {/* 卡片 2: 變額年金 */}
            <div className="bg-purple-50/50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 mb-4 shadow-sm"><Coins size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">變額年金</h3>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-bold">退休加速器</span>
              <p className="text-gray-600 text-sm mt-4 mb-4 leading-relaxed">
                特色是「無壽險成本，純粹累積」。沒有身故保額（或很低），保費全數投入投資。適合已有足夠壽險，想單純透過保險平台累積退休金的人。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500"/> 專注資產累積</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-purple-500"/> 未來可轉年金領取</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 適合度檢測 */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-10">這類產品適合我嗎？</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 mb-4 text-indigo-400 font-bold text-lg"><Scale /> 適合對象</div>
                <ul className="space-y-3 text-slate-300">
                    <li className="flex gap-2"><CheckCircle2 size={18} className="text-indigo-400 mt-1"/> 能承受一定的市場波動風險</li>
                    <li className="flex gap-2"><CheckCircle2 size={18} className="text-indigo-400 mt-1"/> 希望資金運用靈活（隨時可部分提領）</li>
                    <li className="flex gap-2"><CheckCircle2 size={18} className="text-indigo-400 mt-1"/> 希望保費與保障內容公開透明</li>
                </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 mb-4 text-gray-400 font-bold text-lg"><FileText /> 注意事項</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    投資型保險之投資帳戶由保險公司分離設帳，投資標的價值會隨市場波動。本商品所連結之一切投資標的，其發行或管理機構以往之投資績效不保證未來之投資收益，除保險契約另有約定外，本公司不負投資盈虧之責。
                </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">想了解更多配置策略？</h2>
          <p className="text-gray-600 mb-8">投資型保險結構較為複雜，建議由專業顧問為您詳細解說商品特性與費用結構。</p>
          <button onClick={onContact} className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">預約專業評估</button>
        </div>
      </section>
    </div>
  );
};

// --- 5. 年金保險詳情頁 (紫色系) ---
const AnnuityInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-purple-50/30 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-purple-700 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">年金保險詳情</span>
        <button onClick={onContact} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      
      {/* Hero */}
      <header className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-purple-600"><Infinity size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">年金保險：活得越久，領得越多</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            打造退休後的「終身俸」，做自己晚年的財神爺。<br/>讓源源不絕的現金流，守護您尊嚴的退休生活。
          </p>
        </div>
      </header>

      {/* Why */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4 pb-2 border-b-4 border-purple-200 inline-block">退休，最怕這件事發生...</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            醫學進步讓我們活得更久，但存款夠用到 100 歲嗎？年金保險就像是「買一個未來的薪水」，不管活到幾歲，保險公司按時發錢給您，確保晚年生活品質不縮水，解決長壽風險。
          </p>
        </div>
      </section>

      {/* Two Types */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Type 1 */}
            <div className="bg-purple-50/50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 mb-4 shadow-sm"><Wallet size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">即期年金</h3>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-bold">現金轉換器</span>
              <p className="text-gray-600 text-sm mt-4 mb-4 leading-relaxed">
                「我有一大筆錢，怕坐吃山空」。躉繳（一次繳）一筆錢後，下個月或下一年就開始領年金。
              </p>
              <p className="text-purple-700 font-bold text-sm">適合：已退休、手上有退休金或賣房款的長輩。</p>
            </div>

            {/* Type 2 */}
            <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 mb-4 shadow-sm"><Hourglass size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">遞延年金</h3>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-bold">長期存糧計畫</span>
              <p className="text-gray-600 text-sm mt-4 mb-4 leading-relaxed">
                「我還年輕，想慢慢存」。年輕時分期繳費，經過一段時間的複利滾存，約定好退休年齡（如65歲）開始啟動給付。
              </p>
              <p className="text-indigo-700 font-bold text-sm">適合：青壯年族群，提早規劃退休金。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-10">一次領 vs. 年金領</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center">
                <div className="text-gray-400 mb-4 font-bold text-xl">一次領 (整筆退休金)</div>
                <div className="text-4xl mb-4">💰 📉</div>
                <p className="text-gray-300">越花越少，心裡會慌。<br/>擔心活太久錢花光，不敢享受生活。</p>
            </div>
            <div className="bg-purple-900/40 p-8 rounded-xl border border-purple-500/50 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-600 text-xs px-2 py-1 rounded-bl-lg font-bold">推薦</div>
                <div className="text-white mb-4 font-bold text-xl">年金領 (終身俸)</div>
                <div className="text-4xl mb-4">♾️ 🌴</div>
                <p className="text-gray-200">活多久領多久，心裡踏實。<br/>不用擔心壽命長短，自在規劃旅遊與興趣。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">預約您的美好晚年</h2>
          <p className="text-gray-600 mb-8">退休規劃不能等，時間是您最好的朋友。讓我為您試算專屬的年金方案。</p>
          <button onClick={onContact} className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"><Palmtree className="inline mr-2" size={20}/> 啟動退休規劃</button>
        </div>
      </section>
    </div>
  );
};

// --- 6. 產物保險詳情頁 (藍色系) ---
const PropertyInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-blue-50/30 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">產物保險詳情</span>
        <button onClick={onContact} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      
      {/* Hero */}
      <header className="bg-gradient-to-br from-blue-50 to-sky-100 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-600"><Home size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">產物保險：守護您打拼下來的有形資產</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            有車有房更有保障，別讓一次意外賠掉半生積蓄。<br/>
            除了保自己的財產，更要轉嫁賠償給別人的風險。
          </p>
        </div>
      </header>

      {/* Why */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-4 border-blue-200 inline-block">您開車很小心，但別人未必...</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            路上名車越來越多，輕輕一撞可能就是百萬維修費。強制險只賠人身受傷，不賠車輛損壞。產物保險的功能，就是當您不小心造成別人財產損失時，幫您支付那些「天價賠償金」。
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Auto */}
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm"><Car size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">汽機車險</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">馬路護身符</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">除了基本的強制險，您更需要「超額責任險」。專門對付撞到超跑的高額賠償，一年保費幾千元，換來千萬的防護網。</p>
              <p className="text-blue-700 font-bold text-sm">重點：第三人責任險 + 超額責任險</p>
            </div>

            {/* Fire */}
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm"><Flame size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">住宅火險</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">居家守護神</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">房子是資產，也是家。火險不僅理賠房屋重建費用，還包含屋內傢俱動產，以及最容易被忽略的「延燒責任」（賠給鄰居）。</p>
              <p className="text-blue-700 font-bold text-sm">重點：火災、地震、動產、延燒</p>
            </div>

            {/* Liability */}
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm"><Gavel size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">責任險</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">意外防護網</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">無論是寵物咬傷人、小孩打破店家昂貴商品，或是身為店家的公共意外責任。當意外發生時，由保險公司出面幫您談和解、付賠償。</p>
              <p className="text-blue-700 font-bold text-sm">重點：個人責任、公共意外責任</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-10">如果不小心撞到超跑...</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center">
                <div className="text-gray-400 mb-4 font-bold text-xl">只有強制險</div>
                <div className="text-4xl mb-4">💸 😱</div>
                <p className="text-gray-300">強制險只賠人身受傷，<br/>對方數百萬的修車費，<span className="text-red-400 font-bold">您要自己賠！</span></p>
            </div>
            <div className="bg-blue-900/40 p-8 rounded-xl border border-blue-500/50 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-xs px-2 py-1 rounded-bl-lg font-bold">推薦</div>
                <div className="text-white mb-4 font-bold text-xl">加保超額責任險</div>
                <div className="text-4xl mb-4">🛡️ 😌</div>
                <p className="text-gray-200">啟動高額防護網，<br/>保險公司幫您處理天價賠償，<span className="text-blue-300 font-bold">守住您的積蓄。</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">別讓意外帶走您的資產</h2>
          <p className="text-gray-600 mb-8">產險保費低、保障高，是CP值最高的風險轉嫁工具。讓我為您規劃完整的資產防護網。</p>
          <button onClick={onContact} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"><ShieldAlert className="inline mr-2" size={20}/> 預約產險規劃</button>
        </div>
      </section>
    </div>
  );
};

// --- 7. 旅行平安險詳情頁 (天藍色系) ---
const TravelInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-sky-50/30 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">旅行平安險詳情</span>
        <button onClick={onContact} className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      
      {/* Hero */}
      <header className="bg-gradient-to-br from-sky-50 to-blue-100 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-sky-500"><Plane size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">旅行平安險：開心出遊，全程守護</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            從踏出家門到平安返家，為您的美好旅程加裝安全氣囊。<br/>無論國內外旅遊，讓您玩得盡興更安心。
          </p>
        </div>
      </header>

      {/* Why */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-sky-800 mb-4 pb-2 border-b-4 border-sky-200 inline-block">刷卡送的保險就夠了嗎？</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            許多人以為刷卡就有保障，但往往只涵蓋「搭乘公共運輸工具期間」。萬一在國外走路滑倒、吃壞肚子、或是班機延誤滯留機場，信用卡保險可能一毛都不賠。您需要的是一份「全程保障」的商業旅平險。
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Medical */}
            <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 mb-4 shadow-sm"><Globe size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">海外突發疾病</h3>
              <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded-full font-bold">國外醫藥費錢包</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">國外看醫生非常貴。如果不幸在國外生病或受傷，保險公司幫您支付高額的醫療帳單，甚至提供 SOS 海外急難救助專機。</p>
              <p className="text-sky-600 font-bold text-sm">重點：門診、急診、住院、SOS</p>
            </div>

            {/* Inconvenience */}
            <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 mb-4 shadow-sm"><Luggage size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">旅遊不便險</h3>
              <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded-full font-bold">心情補償金</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">當飛機不飛、行李沒到時，保險理賠讓您可以去吃頓好料、買生活日用品，把旅遊的不便轉化為小確幸。</p>
              <p className="text-sky-600 font-bold text-sm">重點：班機延誤、行李遺失、行程取消</p>
            </div>

            {/* Liability */}
            <div className="bg-sky-50/50 rounded-2xl p-8 border border-sky-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-500 mb-4 shadow-sm"><Shield size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">個人責任</h3>
              <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded-full font-bold">隨身防護罩</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">除了保自己，也保「別人」。如果不小心造成第三人受傷或弄壞飯店設施、打破店家商品，由保險公司協助賠償。</p>
              <p className="text-sky-600 font-bold text-sm">重點：第三人責任險</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-10">超級比一比</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center">
                <div className="text-gray-400 mb-4 font-bold text-xl"><CreditCard className="inline mr-2"/> 信用卡贈送保險</div>
                <ul className="text-left text-gray-300 space-y-3 pl-4 list-disc">
                    <li>通常只保「搭乘公共運輸」期間</li>
                    <li>班機延誤理賠門檻較高</li>
                    <li>通常不含突發疾病醫療</li>
                </ul>
            </div>
            <div className="bg-sky-900/40 p-8 rounded-xl border border-sky-500/50 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-sky-500 text-white text-xs px-2 py-1 rounded-bl-lg font-bold">推薦</div>
                <div className="text-white mb-4 font-bold text-xl"><Plane className="inline mr-2"/> 自費旅平險</div>
                <ul className="text-left text-gray-200 space-y-3 pl-4 list-disc">
                    <li>保障範圍：<span className="text-sky-300 font-bold">全程保障</span> (包含逛街、睡覺)</li>
                    <li>包含高額海外突發疾病醫療</li>
                    <li>完整的旅遊不便險項目</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">出發前，別忘了最後一道手續</h2>
          <p className="text-gray-600 mb-8">旅平險保費低廉，卻能為您的旅途提供千萬保障。線上投保快速方便，馬上試算！</p>
          <button onClick={onContact} className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"><Plane className="inline mr-2" size={20}/> 立即試算保費</button>
        </div>
      </section>
    </div>
  );
};

// --- 8. 外溢保單詳情頁 (活力綠色系) ---
const SpilloverInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-lime-50/30 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-lime-200 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-lime-700 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">外溢保單詳情</span>
        <button onClick={onContact} className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      
      {/* Hero */}
      <header className="bg-gradient-to-br from-lime-50 to-green-100 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-lime-600"><Activity size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">外溢保單：越健康，越便宜</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            您的汗水值千金！結合科技數據，讓保費跟著體脂肪一起降。<br/>保險不再只是事後理賠，更是您的健康教練。
          </p>
        </div>
      </header>

      {/* Why */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-lime-800 mb-4 pb-2 border-b-4 border-lime-200 inline-block">保險不再只是「生病才賠」</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            傳統保險是生病了才理賠，但外溢保單鼓勵您「不要生病」。透過上傳步數、睡眠數據或健檢報告，只要達標，保險公司就給您保費折扣或增加保額。這是一場您與保險公司都贏的遊戲。
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Steps */}
            <div className="bg-lime-50/50 rounded-2xl p-8 border border-lime-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lime-600 mb-4 shadow-sm"><Watch size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">走路折抵</h3>
              <span className="bg-lime-100 text-lime-800 text-xs px-2 py-1 rounded-full font-bold">懶人救星</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">每天走 7,500 步，保費最高打折！連結您的智慧手錶或手機 App，走路就是賺錢。讓省下的保費成為您每天多走一站路的動力。</p>
              <p className="text-lime-700 font-bold text-sm">重點：結合 Apple Watch / Garmin</p>
            </div>

            {/* Checkup */}
            <div className="bg-lime-50/50 rounded-2xl p-8 border border-lime-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lime-600 mb-4 shadow-sm"><FileText size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">健檢回饋</h3>
              <span className="bg-lime-100 text-lime-800 text-xs px-2 py-1 rounded-full font-bold">身體成績單</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">每年定期健康檢查，只要數值維持在標準範圍（如 BMI 正常、不抽菸），隔年保費直接減免，或是回饋現金給您。</p>
              <p className="text-lime-700 font-bold text-sm">重點：BMI、膽固醇、血壓</p>
            </div>

            {/* Service */}
            <div className="bg-lime-50/50 rounded-2xl p-8 border border-lime-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lime-600 mb-4 shadow-sm"><Apple size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">實物給付</h3>
              <span className="bg-lime-100 text-lime-800 text-xs px-2 py-1 rounded-full font-bold">健康管家</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">有些保單的回饋不是折抵保費，而是送您健身房會籍、營養師諮詢、甚至是智慧手錶。全方位協助您打造健康生活型態。</p>
              <p className="text-lime-700 font-bold text-sm">重點：不只給錢，更給服務</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-10">誰最適合買？</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center">
                <div className="text-lime-400 mb-4 font-bold text-xl"><Award className="inline mr-2"/> 有運動習慣的人</div>
                <p className="text-gray-300">您本來就在運動，<br/>為什麼不順便把保費賺回來？<br/><span className="text-lime-300 font-bold">不買可惜！</span></p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center">
                <div className="text-lime-400 mb-4 font-bold text-xl"><Activity className="inline mr-2"/> 想強迫自己運動的人</div>
                <p className="text-gray-300">需要一點動力嗎？<br/>讓「金錢回饋」成為您的教練，<br/><span className="text-lime-300 font-bold">督促自己變健康。</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">準備好賺回饋了嗎？</h2>
          <p className="text-gray-600 mb-8">現在就戴上您的智慧手錶，讓我們一起跑向更健康、更便宜的未來。</p>
          <button onClick={onContact} className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"><Watch className="inline mr-2" size={20}/> 了解外溢保單</button>
        </div>
      </section>
    </div>
  );
};

// --- 9. 寵物保險詳情頁 (溫暖橘色系) ---
const PetInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-orange-50/30 font-sans text-gray-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-gray-800">寵物保險詳情</span>
        <button onClick={onContact} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      <header className="bg-gradient-to-br from-orange-50 to-amber-100 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-orange-500"><Dog size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">寵物保險：毛小孩的專屬健保</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            牠給您無條件的愛，您給牠最好的醫療。<br/>為家中的毛寶貝，準備一份愛的守護。
          </p>
        </div>
      </header>
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-orange-800 mb-4 pb-2 border-b-4 border-orange-200 inline-block">您知道帶毛孩看醫生有多貴嗎？</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            在台灣，寵物看病是沒有健保的，全額自費。一次簡單的血液檢查、一場骨折手術，費用動輒數千至數萬元。寵物險就是毛孩的健保卡，讓您在面對高昂醫藥費時，不用猶豫，給牠最好的治療。
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50/50 rounded-2xl p-8 border border-orange-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-sm"><Bone size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">醫療費用補償</h3>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-bold">醫藥費錢包</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">這是不分貓狗最實用的保障。無論是皮膚病、腸胃炎看門診，還是發生意外需要住院開刀，保險公司依據收據實支實付，分擔您的荷包壓力。</p>
              <p className="text-orange-600 font-bold text-sm">重點：門診、手術、住院</p>
            </div>
            <div className="bg-orange-50/50 rounded-2xl p-8 border border-orange-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-sm"><ShieldAlert size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">侵權責任</h3>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-bold">闖禍防護罩</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">毛孩也有失控的時候。如果狗狗衝出去咬傷路人、或貓咪抓壞鄰居的昂貴物品，依法飼主需負賠償責任。這筆錢由保險公司幫您賠。</p>
              <p className="text-orange-600 font-bold text-sm">重點：咬傷人、抓壞東西</p>
            </div>
            <div className="bg-orange-50/50 rounded-2xl p-8 border border-orange-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-sm"><HeartHandshake size={24} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">協尋與喪葬</h3>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-bold">最後的溫柔</span>
              <p className="text-gray-600 text-sm mt-4 mb-4">如果不幸走失，補貼您印海報、登廣告的協尋費用；當牠走完這一生，補貼喪葬費用，讓您能好好送牠最後一程。</p>
              <p className="text-orange-600 font-bold text-sm">重點：走失廣告費、喪葬費用</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-10">真實數據：獸醫收費參考</h3>
          <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700">
            <table className="w-full text-sm md:text-base">
                <thead className="bg-slate-700 text-gray-200"><tr><th className="py-4 px-6 text-left">醫療項目</th><th className="py-4 px-6 text-right">預估費用 (新台幣)</th></tr></thead>
                <tbody className="divide-y divide-slate-600 text-gray-300">
                    <tr><td className="py-4 px-6 font-medium"><Syringe className="inline mr-2 text-orange-400" size={16}/> 一般血液檢查</td><td className="py-4 px-6 text-right">$1,500 - $3,000</td></tr>
                    <tr><td className="py-4 px-6 font-medium"><Bone className="inline mr-2 text-orange-400" size={16}/> 誤食異物手術</td><td className="py-4 px-6 text-right">$15,000 - $30,000</td></tr>
                    <tr><td className="py-4 px-6 font-medium"><Activity className="inline mr-2 text-orange-400" size={16}/> 骨折手術 (含住院)</td><td className="py-4 px-6 text-right">$30,000 - $60,000</td></tr>
                    <tr><td className="py-4 px-6 font-medium"><Zap className="inline mr-2 text-orange-400" size={16}/> 腎衰竭/癌症治療</td><td className="py-4 px-6 text-right text-orange-400 font-bold">無上限</td></tr>
                </tbody>
            </table>
            <div className="p-4 text-center text-xs text-gray-500 bg-slate-800 border-t border-slate-700">* 費用僅供參考，實際收費依各動物醫院標準而定。</div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">給牠一份終身的承諾</h2>
          <p className="text-gray-600 mb-8">因為愛，所以負責。寵物險保費親民，每天不到一杯飲料錢，就能換來完善的醫療保障。</p>
          <button onClick={onContact} className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"><Dog className="inline mr-2" size={20}/> 幫毛孩試算保費</button>
        </div>
      </section>
    </div>
  );
};

// --- 10. 房貸壽險詳情頁 (沈穩灰藍色系) ---
const MortgageInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-slate-800">房貸壽險詳情</span>
        <button onClick={onContact} className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>
      <header className="bg-gradient-to-br from-slate-50 to-gray-200 py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-slate-600"><Umbrella size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">房貸壽險：留屋不留債</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            給家人最實在的避風港，別讓愛的小窩變成沈重負擔。<br/>確保無論發生什麼事，房子永遠是家人的。
          </p>
        </div>
      </header>
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-4 border-slate-300 inline-block">辛苦買的房，能住得安心嗎？</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            買房是人生大事，但長達 20、30 年的房貸是一場馬拉松。萬一經濟支柱中途倒下，存款可能無法支付剩餘貸款。房貸壽險的功能，就是當風險發生時，保險公司直接幫您把「欠銀行的錢」還清，確保房子真正屬於家人，避免法拍悲劇。
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-50/50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 mb-4 shadow-sm"><TrendingDown size={24} /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">遞減型</h3>
              <span className="bg-slate-200 text-slate-800 text-xs px-2 py-1 rounded-full font-bold">精算實惠型</span>
              <p className="text-slate-600 text-sm mt-4 mb-4 leading-relaxed">
                保費較便宜。隨著您每個月還款，欠銀行的錢變少，需要的保障額度也跟著變少。
              </p>
              <p className="text-slate-700 font-bold text-sm">適合：預算有限、首要目標是「不留債務」的族群。</p>
            </div>
            <div className="bg-gray-100/50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 mb-4 shadow-sm"><Equal size={24} /></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">平準型</h3>
              <span className="bg-gray-200 text-slate-800 text-xs px-2 py-1 rounded-full font-bold">雙重保障型</span>
              <p className="text-slate-600 text-sm mt-4 mb-4 leading-relaxed">
                保費較高，但保障額度從頭到尾固定。後期隨著房貸減少，多出來的保額會成為給家人的「安家費」。
              </p>
              <p className="text-slate-700 font-bold text-sm">適合：預算充裕、想兼顧房貸與生活費的族群。</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-slate-800 text-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-10">為什麼不買一般壽險就好？</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 text-center">
                <div className="text-gray-400 mb-4 font-bold text-xl">一般壽險</div>
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦 ❓</div>
                <p className="text-gray-300">理賠金給家人，<br/>可能被挪作他用（辦喪事、生活費），<br/>最後還是<span className="text-red-400 font-bold">沒錢繳房貸</span>。</p>
            </div>
            <div className="bg-slate-900/80 p-8 rounded-xl border border-slate-500 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-500 text-white text-xs px-2 py-1 rounded-bl-lg font-bold">推薦</div>
                <div className="text-white mb-4 font-bold text-xl">房貸壽險</div>
                <div className="text-4xl mb-4">🏦 ✅</div>
                <p className="text-gray-200">設有「批註條款」，<br/><span className="text-blue-300 font-bold">優先償還給銀行</span>，<br/>剩下的才給家人，確保房子絕對安全。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">守護家，從這裡開始</h2>
          <p className="text-slate-600 mb-8">別讓最愛的家人承擔失去您的痛苦，還要面對失去房子的恐懼。讓我協助您規劃最安心的房貸壽險。</p>
          <button onClick={onContact} className="bg-slate-600 hover:bg-slate-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"><Landmark className="inline mr-2" size={20}/> 預約房貸保障規劃</button>
        </div>
      </section>
    </div>
  );
};

// --- 11. 資產傳承詳情頁 (尊爵金/石墨色) ---
const InheritanceInsuranceDetail = ({ onBack, onContact }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-800 animate-fade-in-up">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-300 px-6 py-4 flex justify-between items-center">
        <button onClick={onBack} className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors font-medium"><ArrowRight className="rotate-180" size={20} /> 返回總覽</button>
        <span className="font-bold text-stone-900">資產傳承詳情</span>
        <button onClick={onContact} className="bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all">立即諮詢</button>
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-br from-stone-200 to-amber-100 py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-stone-700"><Scroll size={32} /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">資產傳承：富過三代的智慧</h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">不僅是財富的傳遞，更是愛的延續。<br/>透過保險架構，解決稅務與分配難題，讓家族基業長青。</p>
        </div>
      </header>

      {/* Pain Points */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6 pb-2 border-b-4 border-amber-300 inline-block">您努力打拼一輩子，最後國稅局分走一半？</h2>
              <p className="text-stone-600 mb-4 leading-relaxed">當資產達到一定規模，「遺產稅」將成為財富傳承最大的隱形殺手。更可怕的是「現金不足」，繼承人明明有房有地，卻因為繳不出高額稅金，被迫賤賣祖產，甚至面臨資產被凍結的困境。</p>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-center gap-2"><MinusCircle className="text-red-500" size={18}/> 最高 20% 遺產稅率</li>
                <li className="flex items-center gap-2"><MinusCircle className="text-red-500" size={18}/> 銀行帳戶凍結，無法提領</li>
                <li className="flex items-center gap-2"><MinusCircle className="text-red-500" size={18}/> 繼承人意見不合，資產閒置</li>
              </ul>
            </div>
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 text-center">
               <div className="text-4xl mb-6">🏛️ 📉</div>
               <p className="text-lg font-bold text-stone-800 mb-2">資產縮水風險</p>
               <p className="text-stone-500 text-sm">未經規劃的資產，在傳承過程中可能流失 10% ~ 20% 甚至更多。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-bold text-center text-stone-800 mb-12">保險傳承的三大優勢</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-amber-500 hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-amber-600"><Landmark size={32}/></div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">預留稅源</h4>
              <p className="text-stone-600 text-sm">身故理賠金是「現金」，能迅速提供給繼承人繳納遺產稅，無需變賣不動產或股票，保全資產完整性。</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-amber-500 hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-amber-600"><Users size={32}/></div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">指定分配</h4>
              <p className="text-stone-600 text-sm">透過「指定受益人」，您可以決定誰拿多少，不受民法特留分限制（需符合實質課稅原則），避免爭產糾紛。</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-amber-500 hover:-translate-y-1 transition-transform">
              <div className="mb-4 text-amber-600"><Scale size={32}/></div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">控制權與隱私</h4>
              <p className="text-stone-600 text-sm">要保人擁有保單控制權，可隨時變更受益人。且保險理賠流程相對隱密，不需像遺囑公證那樣繁瑣公開。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">別讓財富成為家人的負擔</h2>
          <p className="text-stone-600 mb-8">透過保險架構，我們能協助您完成資產盤點、稅務試算與受益人規劃。讓您的愛與財富，順利傳承給下一代。</p>
          <button onClick={onContact} className="bg-stone-800 hover:bg-stone-900 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"><Crown className="inline mr-2" size={20}/> 預約資產傳承諮詢</button>
        </div>
      </section>
    </div>
  );
};

// --- 新增：AI 智能保險顧問視窗 ---
const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: '您好！我是林昆輝理財保險顧問的 AI 保險規劃助理。把風險交給我們，把財富與安心留給最愛。 讓我依據您的年齡與預算，為您量身打造最合適的防護網。' }
  ]);
  const [step, setStep] = useState('INIT'); // INIT, ASKING_AGE, ASKING_GENDER, ASKING_BUDGET, FINISHED
  const [userData, setUserData] = useState({ age: '', gender: '', budget: '' });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // 模擬 AI 思考與回應
  const processAIResponse = async (userText) => {
    setIsTyping(true);
    
    // 模擬網路延遲
    setTimeout(() => {
      let botResponse = '';
      let nextStep = step;
      const text = userText.trim();

      // 簡單的狀態機邏輯
      if (text.includes('推薦') || text.includes('規劃') || text.includes('建議') || step === 'INIT') {
        botResponse = '沒問題！為了提供精準的建議，我需要了解您的基本資料。請問您目前的「年齡」是？';
        nextStep = 'ASKING_AGE';
      } 
      else if (step === 'ASKING_AGE') {
        const age = parseInt(text.replace(/[^0-9]/g, ''));
        if (!isNaN(age)) {
          setUserData(prev => ({ ...prev, age }));
          botResponse = `了解，${age} 歲。請問您的「生理性別」是？(先生/小姐)`;
          nextStep = 'ASKING_GENDER';
        } else {
          botResponse = '不好意思，請輸入數字即可，例如：30。';
        }
      }
      else if (step === 'ASKING_GENDER') {
        if (text.includes('男') || text.includes('先生')) {
          setUserData(prev => ({ ...prev, gender: 'male' }));
          botResponse = '好的。最後請問您每年的「保費預算」大約是多少？(例如：3萬、5萬)';
          nextStep = 'ASKING_BUDGET';
        } else if (text.includes('女') || text.includes('小姐')) {
          setUserData(prev => ({ ...prev, gender: 'female' }));
          botResponse = '好的。最後請問您每年的「保費預算」大約是多少？(例如：3萬、5萬)';
          nextStep = 'ASKING_BUDGET';
        } else {
          botResponse = '請回答男生或女生，這會影響費率計算喔！';
        }
      }
      else if (step === 'ASKING_BUDGET') {
        setUserData(prev => ({ ...prev, budget: text }));
        // 觸發推薦邏輯
        const recommendation = generateRecommendation(userData.age, userData.gender, text);
        botResponse = recommendation;
        nextStep = 'FINISHED';
      }
      else if (step === 'FINISHED') {
        botResponse = '如果您想重新規劃，請輸入「重新開始」。或是點擊下方的諮詢按鈕由專人為您服務。';
        if (text.includes('重新')) {
            setStep('INIT');
            setUserData({ age: '', gender: '', budget: '' });
            botResponse = '好的，我們重新開始。請問您目前的「年齡」是？';
            nextStep = 'ASKING_AGE';
        }
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setStep(nextStep);
      setIsTyping(false);
    }, 1000);
  };

  // 核心推薦邏輯 (依據年齡層與預算)
  const generateRecommendation = (age, gender, budget) => {
    let advice = `根據您 ${age} 歲${gender === 'male' ? '男性' : '女性'}，預算 ${budget} 的條件，我建議的配置如下：\n\n`;
    
    if (age < 30) {
      advice += `🎯 **青年奮鬥期 (高 CP 值防護)**\n`;
      advice += `1. **意外險**：優先拉高，包含骨折未住院。\n`;
      advice += `2. **雙實支實付醫療**：解決生病住院的高自費。\n`;
      advice += `3. **定期壽險**：低保費高保障，對父母負責。\n`;
      advice += `💡 預算若有限，建議先用「定期險」將保障做足。`;
    } else if (age >= 30 && age < 50) {
      advice += `🎯 **家庭責任期 (家庭支柱防護)**\n`;
      advice += `1. **高額壽險**：覆蓋房貸與子女教育費 (建議參考房貸壽險)。\n`;
      advice += `2. **重大傷病險**：預防癌症或中風導致收入中斷。\n`;
      advice += `3. **醫療雙實支**：提升醫療品質，不拖累家人。\n`;
      advice += `💡 這個階段責任最重，建議檢視「失能險」以防萬一。`;
    } else {
      advice += `🎯 **樂齡退休期 (資產保全)**\n`;
      advice += `1. **年金保險**：創造源源不絕的現金流。\n`;
      advice += `2. **長照險/失能險**：解決老年照護費用。\n`;
      advice += `3. **資產傳承**：透過壽險預留稅源，指定分配。\n`;
      advice += `💡 建議重點放在「不連累子女」與「退休金流」。`;
    }
    return advice;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    processAIResponse(userText);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* 浮動按鈕 */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-2 ${isOpen ? 'bg-gray-800 rotate-90' : 'bg-red-700 animate-bounce'}`}
      >
        {isOpen ? <X className="text-white" /> : <Bot className="text-white" size={28} />}
        {!isOpen && <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">AI 諮詢</span>}
      </button>

      {/* 聊天視窗 */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden animate-fade-in-up">
          {/* 標題列 */}
          <div className="bg-gradient-to-r from-red-700 to-red-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full"><Bot className="text-white" size={20} /></div>
              <div>
                <h3 className="font-bold text-white text-sm">AI 智能保險顧問</h3>
                <p className="text-red-100 text-xs flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> 線上服務中</p>
              </div>
            </div>
            <button onClick={() => {setMessages([{role: 'bot', text: '您好！我是您的 AI 保險規劃助理。請問您想了解哪方面的規劃？'}]); setStep('INIT');}} className="text-white/80 hover:text-white" title="重新開始">
                <RefreshCcw size={18}/>
            </button>
          </div>

          {/* 訊息區 */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                  <Loader2 className="animate-spin text-gray-400" size={16} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 輸入區 */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="輸入訊息..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-700"
              />
              <button onClick={handleSend} className={`p-2 rounded-full transition-colors ${input.trim() ? 'text-red-600 hover:bg-red-100' : 'text-gray-400'}`}>
                <Send size={18} />
              </button>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-2">AI 建議僅供參考，實際規劃請諮詢專業顧問。</p>
          </div>
        </div>
      )}
    </>
  );
};

// --- 主元件 ---
const FinancialDefensePage = () => {
  const [showDetail, setShowDetail] = useState(null); // 'life' | 'medical' | 'savings' | 'investment' | 'annuity' | 'property' | 'travel' | 'spillover' | 'pet' | 'mortgage' | 'inheritance' | null
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);

  // 模擬顧問個人資料
  const agentProfile = {
    name: "王大明", 
    title: "財務防禦規劃師",
    slogan: "保險不是為了改變生活，而是為了防止生活被改變。",
    phone: "0912-345-678",
    lineId: "agent.wang", 
    email: "wang.insurance@example.com",
    location: "台北市信義區 (全台服務)"
  };

  // 保險資料結構
  const insuranceData = [
    { id: 1, category: "human", title: "人壽保險", subtitle: "留愛不留債", icon: <Heart className="w-8 h-8 text-rose-500" />, desc: "轉嫁身故風險的基石。無論是定期壽險的高槓桿保障，或是終身壽險的資產傳承，都是為了給家人最安穩的承諾。", tags: ["定期壽險", "終身壽險", "小額終老"] },
    { id: 2, category: "human", title: "醫療保險", subtitle: "生病受傷不擔心", icon: <Activity className="w-8 h-8 text-emerald-500" />, desc: "應對自費醫療趨勢。包含實支實付解決高額醫材費、重大傷病險提供急用週轉金，以及長照失能險的看護補助。", tags: ["實支實付", "癌症/重大傷病", "長照失能"] },
    { id: 3, category: "wealth", title: "儲蓄/理財保險", subtitle: "時間複利的魔法", icon: <Briefcase className="w-8 h-8 text-amber-500" />, desc: "結合保障與資產累積。透過強迫儲蓄與複利滾存，為子女教育金、退休生活金提早做準備。", tags: ["增額終身壽險", "利變型保險", "還本險"] },
    { id: 4, category: "wealth", title: "投資型保險", subtitle: "保障投資雙效合一", icon: <TrendingUp className="w-8 h-8 text-indigo-500" />, desc: "用小錢買高保障，同時連結投資標的參與市場獲利。適合風險承受度較高，希望資金運用靈活的族群。", tags: ["變額萬能壽險", "變額年金"] },
    { id: 5, category: "wealth", title: "年金保險", subtitle: "活得越久領得越多", icon: <Shield className="w-8 h-8 text-purple-500" />, desc: "對抗長壽風險的最佳工具。約定時間後開始領取年金，創造源源不絕的現金流，做自己的退休金庫。", tags: ["即期年金", "遞延年金"] },
    { id: 6, category: "property", title: "產物保險", subtitle: "守護有形資產", icon: <Home className="w-8 h-8 text-blue-500" />, desc: "不只保人，更保您的愛車與房子。包含強制險、第三人責任險、超額責任險以及住宅火險。", tags: ["汽機車險", "住宅火險", "責任險"] },
    { id: 7, category: "property", title: "旅行平安險", subtitle: "開心出遊好安心", icon: <Plane className="w-8 h-8 text-sky-400" />, desc: "涵蓋海外突發疾病醫療與旅遊不便險（班機延誤、行李遺失），是國內外旅遊的必備護身符。", tags: ["海外醫療", "旅遊不便險"] },
    { id: 8, category: "trends", title: "外溢保單", subtitle: "越健康越便宜", icon: <Activity className="w-8 h-8 text-lime-500" />, desc: "結合運動手錶或健檢數據，只要達標（如步數、BMI），保費即可打折或保額增加，鼓勵自主健康管理。", tags: ["走路折抵", "健檢回饋"] },
    { id: 9, category: "trends", title: "寵物保險", subtitle: "毛小孩的健保", icon: <Dog className="w-8 h-8 text-orange-400" />, desc: "減輕毛小孩看醫生的高昂費用，包含門診、手術、住院以及寵物侵權責任（咬傷別人）的保障。", tags: ["醫療費用", "侵權責任"] },
    { id: 10, category: "trends", title: "房貸壽險", subtitle: "留屋不留債", icon: <Umbrella className="w-8 h-8 text-slate-500" />, desc: "專為貸款族設計，萬一發生變故，保險金優先償還房貸，確保家人不會因為繳不出貸款而流離失所。", tags: ["遞減型", "平準型"] },
    { id: 11, category: "wealth", title: "資產傳承", subtitle: "富過三代的智慧", icon: <Scroll className="w-8 h-8 text-stone-600" />, desc: "透過保險指定受益人，解決遺產稅現金缺口。讓您的財富依照您的意願，完整傳承給下一代，避免爭產糾紛。", tags: ["遺產稅", "指定傳承", "資產保全"] }
  ];

  const categories = [ { id: 'all', name: '全部險種' }, { id: 'human', name: '人身保障' }, { id: 'wealth', name: '財富傳承' }, { id: 'property', name: '財產生活' }, { id: 'trends', name: '趨勢/特殊' } ];
  const filteredData = activeCategory === 'all' ? insuranceData : insuranceData.filter(item => item.category === activeCategory);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
    setIsMenuOpen(false);
  };

  const toggleContactModal = () => { setShowContactModal(!showContactModal); };

  // --- 頁面路由切換 ---
  if (showDetail === 'life') {
    return <LifeInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'medical') {
    return <MedicalInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'savings') {
    return <SavingsInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'investment') {
    return <InvestmentInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'annuity') {
    return <AnnuityInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'property') {
    return <PropertyInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'travel') {
    return <TravelInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'spillover') {
    return <SpilloverInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'pet') {
    return <PetInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'mortgage') {
    return <MortgageInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }
  if (showDetail === 'inheritance') {
    return <InheritanceInsuranceDetail onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }

  // 主頁內容
  return (
    <div className="font-sans text-gray-700 bg-stone-50 min-h-screen selection:bg-red-100 selection:text-red-800">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-red-700 p-2 rounded-lg text-white"><Shield size={24} fill="currentColor" /></div>
            <span className={`text-xl font-bold tracking-wide ${isScrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'}`}>{agentProfile.name} <span className="font-light">財務防禦</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('philosophy')} className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>核心原則</button>
            <button onClick={() => scrollToSection('priorities')} className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>防護順序</button>
            <button onClick={() => scrollToSection('portfolio')} className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>商品解析</button>
            <button onClick={toggleContactModal} className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-red-900/30 transform hover:-translate-y-0.5">預約健診</button>
          </div>
          <div className="md:hidden text-gray-800"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">{isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'} />}</button></div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('philosophy')} className="text-left text-gray-600 py-2 border-b border-gray-50">核心原則</button>
            <button onClick={() => scrollToSection('priorities')} className="text-left text-gray-600 py-2 border-b border-gray-50">防護順序</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-600 py-2 border-b border-gray-50">商品解析</button>
            <button onClick={() => { setIsMenuOpen(false); toggleContactModal(); }} className="text-center bg-red-700 text-white py-3 rounded-lg mt-2">預約健診</button>
          </div>
        )}
      </nav>

      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-red-50 opacity-90"></div>
           <div className="absolute top-0 right-0 w-2/3 h-full bg-red-50/50 rounded-bl-[150px] transform translate-x-1/3 -translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-red-100 text-red-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm"><Shield size={16} /><span>您的財務防禦藍圖</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">保險不是為了改變生活<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-700">而是為了防止生活被改變</span></h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">{agentProfile.slogan}<br className="hidden md:block"/>透過理性的預算分配，讓我們一起守護您最珍視的家。</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={toggleContactModal} className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">啟動防禦計畫 <ArrowRight size={20} /></button>
              <button onClick={() => scrollToSection('portfolio')} className="bg-white hover:bg-red-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-medium text-lg transition-all hover:border-red-300 flex items-center justify-center gap-2">瀏覽保險商品</button>
            </div>
          </div>
        </div>
      </header>

      <section id="philosophy" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-gray-900 mb-4">構建穩固防護網的三大原則</h2><div className="w-24 h-1 bg-red-700 mx-auto rounded-full mb-6"></div><p className="text-gray-600 max-w-2xl mx-auto">拒絕憑感覺投保，我們運用金融界公認的黃金法則，<br/>確保您的每一分錢都花在刀口上。</p></div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-blue-300 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform"><PieChart size={28} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">原則一：631 法則</h3><p className="text-sm text-gray-500 mb-6 font-medium">黃金比例分配</p>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between"><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">生活消費 60%</span></div>
                  <div className="flex h-2 mb-4 overflow-hidden h-2 text-xs flex rounded bg-gray-200"><div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500"></div></div>
                  <div className="flex mb-2 items-center justify-between"><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-700 bg-yellow-100">儲蓄投資 30%</span></div>
                  <div className="flex h-2 mb-4 overflow-hidden h-2 text-xs flex rounded bg-gray-200"><div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div></div>
                  <div className="flex mb-2 items-center justify-between"><span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-700 bg-red-100">風險規劃 10%</span></div>
                  <div className="flex h-2 overflow-hidden h-2 text-xs flex rounded bg-gray-200"><div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"></div></div>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-yellow-300 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform"><Shield size={28} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">原則二：雙十原則</h3><p className="text-sm text-gray-500 mb-6 font-medium">極大化槓桿效益</p>
              <div className="flex flex-col gap-6 items-center justify-center py-4">
                <div className="text-center w-full bg-white p-4 rounded-lg shadow-sm border border-stone-100"><span className="block text-3xl font-bold text-gray-800">10%</span><span className="text-xs text-gray-500 uppercase tracking-wider">薪水預算</span></div>
                <div className="text-gray-400 rotate-90 md:rotate-0"><ArrowRight size={24} /></div>
                <div className="text-center w-full bg-white p-4 rounded-lg shadow-sm border border-stone-100 border-b-4 border-b-yellow-500"><span className="block text-3xl font-bold text-yellow-600">10倍</span><span className="text-xs text-gray-500 uppercase tracking-wider">年薪防護</span></div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-red-300 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform"><AlertTriangle size={28} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">原則三：優先順序</h3><p className="text-sm text-gray-500 mb-6 font-medium">先保大、再保小</p>
              <div className="relative h-48 w-full flex flex-col items-center justify-center space-y-2">
                <div className="w-full bg-red-100 border border-red-200 p-3 rounded text-center"><span className="block font-bold text-red-800">優先：大風險</span><span className="text-xs text-red-600">無法自行承擔</span></div>
                <div className="w-2 h-8 border-l-2 border-dashed border-gray-300"></div>
                <div className="w-3/4 bg-gray-100 border border-gray-200 p-3 rounded text-center opacity-70"><span className="block font-bold text-gray-600">次要：小風險</span><span className="text-xs text-gray-500">可用儲蓄解決</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="priorities" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">投保順序：先保大、再保小</h2><p className="text-lg text-gray-600 max-w-3xl mx-auto">預算有限時，錢要花在刀口上。優先處理無法承擔的鉅額損失，確保家庭經濟不至於崩潰。</p></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-700">
                <div className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0"><div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-700 shadow-sm"><Umbrella size={24} /></div></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">優先：無法自行承擔的鉅額損失</h4><p className="text-gray-600 mb-4 text-sm">一旦發生，動輒需要數百萬，可能拖垮家庭經濟。</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-700 font-medium"><CheckCircle2 size={18} className="text-red-600"/> 身故 (家庭支柱倒下)</li>
                        <li className="flex items-center gap-2 text-gray-700 font-medium"><CheckCircle2 size={18} className="text-red-600"/> 失能 (需長期照護)</li>
                        <li className="flex items-center gap-2 text-gray-700 font-medium"><CheckCircle2 size={18} className="text-red-600"/> 重大傷病 (癌症/中風)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-gray-300 opacity-90">
                <div className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0"><div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 shadow-sm"><User size={24} /></div></div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">次要：可用儲蓄解決的小額支出</h4><p className="text-gray-600 mb-4 text-sm">行有餘力再補充的項目，大多能自行負擔。</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-600"><MinusCircle size={18} className="text-gray-400"/> 小病小痛 (感冒)</li>
                        <li className="flex items-center gap-2 text-gray-600"><MinusCircle size={18} className="text-gray-400"/> 一般門診</li>
                        <li className="flex items-center gap-2 text-gray-600"><MinusCircle size={18} className="text-gray-400"/> 小手術</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-stone-100 skew-y-2 origin-top-right transform -translate-y-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">全方位保險商品解析</h2><div className="w-24 h-1 bg-red-700 mx-auto rounded-full mb-6"></div><p className="text-gray-600 max-w-2xl mx-auto">理解原則之後，我們需要合適的工具來轉嫁風險。<br/>無論是基礎保障還是財富傳承，這裡都有您需要的解析。</p></div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? 'bg-red-700 text-white shadow-md transform scale-105' : 'bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-700'}`}>{cat.name}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col group">
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">{item.icon}</div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider border border-gray-100 px-2 py-1 rounded">{categories.find(c => c.id === item.category)?.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3><p className="text-red-600 text-sm font-medium mb-4">{item.subtitle}</p><p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">{item.tags.map((tag, idx) => (<span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">#{tag}</span>))}</div>
                </div>
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <button 
                    onClick={() => {
                        if (item.id >= 1 && item.id <= 11) setShowDetail(['life','medical','savings','investment','annuity','property','travel','spillover','pet','mortgage','inheritance'][item.id-1]);
                        else toggleContactModal();
                    }} 
                    className="text-red-700 text-sm font-bold hover:text-red-800 flex items-center transition-colors"
                  >
                    {(item.id >= 1 && item.id <= 11) ? "深入了解" : "我想諮詢"} <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 hover:bg-slate-800 rounded-2xl transition-colors">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-900/50"><CheckCircle2 className="w-8 h-8 text-white" /></div><h3 className="text-xl font-bold mb-3">客觀中立建議</h3><p className="text-gray-400">不推銷最貴的，只推薦最適合您的。嚴格遵循 631 與雙十原則為您規劃。</p>
            </div>
            <div className="p-6 hover:bg-slate-800 rounded-2xl transition-colors">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-900/50"><Shield className="w-8 h-8 text-white" /></div><h3 className="text-xl font-bold mb-3">完整的售後服務</h3><p className="text-gray-400">成交只是開始，理賠協助、契約變更、保單健診，我都在您身邊。</p>
            </div>
            <div className="p-6 hover:bg-slate-800 rounded-2xl transition-colors">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-900/50"><Activity className="w-8 h-8 text-white" /></div><h3 className="text-xl font-bold mb-3">持續更新資訊</h3><p className="text-gray-400">隨時掌握最新醫療趨勢與法規變動，確保您的財務防禦網與時俱進。</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-8">
         <div className="container mx-auto px-6 text-center text-sm text-gray-500"><p className="mb-2">本網站內容僅供保險觀念推廣與教育用途，詳細商品內容與理賠條件請以各保險公司正式保單條款為準。</p><p>Financial Defense Blueprint · Designed for Insurance Professionals</p></div>
      </footer>

      {/* --- 在這裡加入 AI 視窗 --- */}
      <AIChatWidget />

      {showContactModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 relative shadow-2xl animate-fade-in-up border-t-8 border-green-500">
            <button onClick={toggleContactModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1"><X className="w-6 h-6" /></button>
            <div className="text-center pt-2">
              <h3 className="text-xl font-bold text-gray-900 mb-1">加入我的 LINE</h3><p className="text-gray-500 text-sm mb-6">掃描下方行動條碼，即時諮詢保險規劃</p>
              <div className="bg-white p-2 rounded-xl border-2 border-green-100 inline-block mb-4 shadow-sm"><img src={lineQrCode} alt="LINE QR Code" className="w-48 h-48 object-contain rounded-lg"/></div>
              <div className="bg-gray-50 rounded-lg py-2 px-4 mb-6 inline-block"><p className="text-gray-600 text-sm font-medium">LINE ID: <span className="text-green-600 font-bold text-lg select-all">{agentProfile.lineId}</span></p></div>
              <div className="space-y-3"><p className="text-xs text-gray-400">手機用戶可直接截圖此畫面，<br/>並在 LINE 加入好友中選擇「行動條碼」讀取</p><button onClick={toggleContactModal} className="w-full inline-flex justify-center rounded-xl bg-green-500 text-white font-bold py-3 hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30">好的，我已掃描</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialDefensePage;