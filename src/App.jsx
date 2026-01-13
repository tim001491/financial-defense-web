import React, { useState, useEffect } from 'react';
import { 
  Shield, PieChart, AlertTriangle, Umbrella, ChevronDown, Phone, Mail, User, Menu, X, ArrowRight, CheckCircle2, MinusCircle,
  Heart, Briefcase, Home, Plane, TrendingUp, Activity, Dog, MapPin, Smartphone, ChevronRight, Stethoscope, Pill, Armchair,
  Coins, PiggyBank, BarChart3, Landmark, Zap, Scale, FileText, Infinity, Wallet, Hourglass, Palmtree,
  Car, Flame, ShieldAlert, Gavel, Globe, Luggage, CreditCard, Watch, Award, Apple, Bone, HeartHandshake, Syringe,
  TrendingDown, Equal, Scroll, Crown, Users, Bot, Sparkles, RefreshCw, MessageCircle, Send
} from 'lucide-react';

// 【重要】請確保您的圖片檔案放在 src/assets/ 資料夾內
import lineQrCode from './assets/my_qrcode_1768092146213.jpg';

// --- 真實 AI 顧問區塊 (串接 Netlify Function) ---
const AIConsultantSection = ({ onContact }) => {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    job: 'office', 
    budget: '',
    other: ''
  });
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateAdvice = async () => {
    if (!formData.age || !formData.budget) {
      alert("請輸入年齡與預算，讓 AI 顧問更能精準分析喔！");
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      // 呼叫我們剛寫好的後端 API
      const response = await fetch('/.netlify/functions/askAI', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("API request failed");
      const data = await response.json();
      setResult(data);

    } catch (error) {
      console.error("Error:", error);
      // 錯誤處理 (例如本地端測試時或 API key 沒設)
      setResult({
        title: "連線忙線中 (或本地測試模式)",
        analysis: "目前無法連接到 AI 大腦。請確認您是否已將網站部署到 Netlify，並設定好 GEMINI_API_KEY。",
        plan: "在本地端 (localhost) 預覽時，此功能可能無法正常運作。請推送到 Netlify 線上測試。"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Sparkles size={16} /> 真實 AI 運算中
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI 智能保單試算</h2>
          <p className="text-gray-600">這不是罐頭回覆。我們串接了 Google Gemini AI 模型，<br/>根據您的輸入即時生成專屬的保險策略。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* 輸入表單 */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2"><User size={20}/> 您的基本資料</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">性別</label>
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="male">男</option>
                    <option value="female">女</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">年齡</label>
                  <input type="number" name="age" placeholder="例如：30" value={formData.age} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">工作性質</label>
                <select name="job" value={formData.job} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option value="內勤行政人員">內勤/行政 (一般上班族)</option>
                  <option value="計程車/職業駕駛">駕駛/運輸業 (司機)</option>
                  <option value="餐飲服務業">服務業 (業務/餐飲)</option>
                  <option value="工程/工地人員">體力勞動 (工程/製造)</option>
                  <option value="家庭主婦/主夫">家庭管理 (主婦/夫)</option>
                  <option value="退休人士">退休人士</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">年預算 (台幣)</label>
                <input type="number" name="budget" placeholder="例如：20000" value={formData.budget} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">其他需求 (選填)</label>
                <textarea name="other" placeholder="例如：擔心癌症、家中有兩個小孩、有房貸..." value={formData.other} onChange={handleInputChange} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none h-20"></textarea>
              </div>
              <button 
                onClick={generateAdvice}
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:bg-gray-400"
              >
                {isLoading ? <RefreshCw className="animate-spin" /> : <Bot />} 
                {isLoading ? "AI 正在思考策略..." : "開始分析"}
              </button>
            </div>
          </div>

          {/* 結果顯示 */}
          <div className="relative">
            {result ? (
              <div className="bg-white rounded-2xl border-2 border-blue-500 shadow-xl overflow-hidden animate-fade-in-up">
                <div className="bg-blue-600 text-white p-4 font-bold flex items-center gap-2">
                  <Bot size={24} /> AI 顧問建議
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{result.title}</h4>
                    <div className="w-full h-px bg-gray-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      <span className="font-bold text-blue-600 block mb-1">【現況與風險分析】</span>
                      {result.analysis}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-bold text-orange-600 block mb-1">【規劃策略建議】</span>
                      {result.plan}
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start">
                    <div className="bg-white p-2 rounded-full shadow-sm text-blue-600"><Smartphone size={20}/></div>
                    <div className="text-sm text-gray-600">
                      <p className="font-bold text-gray-800 mb-1">AI 建議僅供參考</p>
                      <p>實際保單條款細節與核保規則，建議您直接加我的 LINE，我幫您做最後確認。</p>
                    </div>
                  </div>

                  <button onClick={onContact} className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                    索取詳細建議書
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl h-full min-h-[400px] flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                  <Bot size={48} className="text-slate-300" />
                </div>
                <p className="text-lg font-medium text-slate-500">等待輸入資料...</p>
                <p className="text-sm mt-2">請在左側填寫您的狀況，<br/>AI 將為您量身打造分析。</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 以下為各詳情頁元件 (通用模板) ---
const LifeInsuranceDetail = ({ onBack, onContact }) => { useEffect(() => { window.scrollTo(0, 0); }, []); return (<div className="min-h-screen bg-stone-50 p-6 flex flex-col items-center justify-center"><h1 className="text-3xl font-bold mb-4 text-red-700">人壽保險詳情</h1><p className="mb-6 text-gray-600">留愛不留債，給家人的承諾。</p><button onClick={onBack} className="bg-gray-200 px-4 py-2 rounded mb-2">返回</button><button onClick={onContact} className="bg-red-700 text-white px-4 py-2 rounded">預約諮詢</button></div>); };
const MedicalInsuranceDetail = ({ onBack, onContact }) => { useEffect(() => { window.scrollTo(0, 0); }, []); return (<div className="min-h-screen bg-emerald-50 p-6 flex flex-col items-center justify-center"><h1 className="text-3xl font-bold mb-4 text-emerald-700">醫療保險詳情</h1><p className="mb-6 text-gray-600">雙實支實付，解決高額自費。</p><button onClick={onBack} className="bg-gray-200 px-4 py-2 rounded mb-2">返回</button><button onClick={onContact} className="bg-emerald-600 text-white px-4 py-2 rounded">預約諮詢</button></div>); };

const CommonDetail = ({ title, color, desc, onBack, onContact }) => { useEffect(() => { window.scrollTo(0, 0); }, []); return (<div className={`min-h-screen bg-${color}-50 p-6 flex flex-col items-center justify-center`}><h1 className={`text-3xl font-bold mb-4 text-${color}-700`}>{title}</h1><p className="mb-6 text-gray-600">{desc}</p><button onClick={onBack} className="bg-gray-200 px-4 py-2 rounded mb-2">返回</button><button onClick={onContact} className={`bg-${color}-600 text-white px-4 py-2 rounded`}>預約諮詢</button></div>); };
const SavingsInsuranceDetail = (props) => <CommonDetail title="儲蓄理財" color="amber" desc="時間複利的魔法" {...props} />;
const InvestmentInsuranceDetail = (props) => <CommonDetail title="投資型保險" color="indigo" desc="保障投資雙效合一" {...props} />;
const AnnuityInsuranceDetail = (props) => <CommonDetail title="年金保險" color="purple" desc="活得越久領得越多" {...props} />;
const PropertyInsuranceDetail = (props) => <CommonDetail title="產物保險" color="blue" desc="守護有形資產" {...props} />;
const TravelInsuranceDetail = (props) => <CommonDetail title="旅行平安險" color="sky" desc="開心出遊好安心" {...props} />;
const SpilloverInsuranceDetail = (props) => <CommonDetail title="外溢保單" color="lime" desc="越健康越便宜" {...props} />;
const PetInsuranceDetail = (props) => <CommonDetail title="寵物保險" color="orange" desc="毛小孩的健保" {...props} />;
const MortgageInsuranceDetail = (props) => <CommonDetail title="房貸壽險" color="slate" desc="留屋不留債" {...props} />;
const InheritanceInsuranceDetail = (props) => <CommonDetail title="資產傳承" color="stone" desc="富過三代的智慧" {...props} />;


// --- 主頁面元件 ---
const FinancialDefensePage = () => {
  const [showDetail, setShowDetail] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);

  const agentProfile = {
    name: "王大明", 
    title: "財務防禦規劃師",
    slogan: "保險不是為了改變生活，而是為了防止生活被改變。",
    phone: "0912-345-678",
    lineId: "agent.wang", 
    email: "wang.insurance@example.com",
    location: "台北市信義區 (全台服務)"
  };

  const insuranceData = [
    { id: 1, category: "human", title: "人壽保險", subtitle: "留愛不留債", icon: <Heart className="w-8 h-8 text-rose-500" />, desc: "轉嫁身故風險的基石。", tags: ["定期壽險", "終身壽險"] },
    { id: 2, category: "human", title: "醫療保險", subtitle: "生病受傷不擔心", icon: <Activity className="w-8 h-8 text-emerald-500" />, desc: "應對自費醫療趨勢。", tags: ["實支實付", "癌症/重大傷病"] },
    { id: 3, category: "wealth", title: "儲蓄/理財保險", subtitle: "時間複利的魔法", icon: <Briefcase className="w-8 h-8 text-amber-500" />, desc: "結合保障與資產累積。", tags: ["增額終身壽險", "利變型保險"] },
    { id: 4, category: "wealth", title: "投資型保險", subtitle: "保障投資雙效合一", icon: <TrendingUp className="w-8 h-8 text-indigo-500" />, desc: "用小錢買高保障。", tags: ["變額萬能壽險", "變額年金"] },
    { id: 5, category: "wealth", title: "年金保險", subtitle: "活得越久領得越多", icon: <Shield className="w-8 h-8 text-purple-500" />, desc: "對抗長壽風險的最佳工具。", tags: ["即期年金", "遞延年金"] },
    { id: 6, category: "property", title: "產物保險", subtitle: "守護有形資產", icon: <Home className="w-8 h-8 text-blue-500" />, desc: "不只保人，更保您的愛車與房子。", tags: ["汽機車險", "住宅火險"] },
    { id: 7, category: "property", title: "旅行平安險", subtitle: "開心出遊好安心", icon: <Plane className="w-8 h-8 text-sky-400" />, desc: "涵蓋海外突發疾病醫療。", tags: ["海外醫療", "旅遊不便險"] },
    { id: 8, category: "trends", title: "外溢保單", subtitle: "越健康越便宜", icon: <Activity className="w-8 h-8 text-lime-500" />, desc: "結合運動手錶或健檢數據。", tags: ["走路折抵", "健檢回饋"] },
    { id: 9, category: "trends", title: "寵物保險", subtitle: "毛小孩的健保", icon: <Dog className="w-8 h-8 text-orange-400" />, desc: "減輕毛小孩看醫生的高昂費用。", tags: ["醫療費用", "侵權責任"] },
    { id: 10, category: "trends", title: "房貸壽險", subtitle: "留屋不留債", icon: <Umbrella className="w-8 h-8 text-slate-500" />, desc: "專為貸款族設計。", tags: ["遞減型", "平準型"] },
    { id: 11, category: "wealth", title: "資產傳承", subtitle: "富過三代的智慧", icon: <Scroll className="w-8 h-8 text-stone-600" />, desc: "透過保險指定受益人，解決遺產稅現金缺口。", tags: ["遺產稅", "指定傳承"] }
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

  if (showDetail) {
    const Details = [LifeInsuranceDetail, MedicalInsuranceDetail, SavingsInsuranceDetail, InvestmentInsuranceDetail, AnnuityInsuranceDetail, PropertyInsuranceDetail, TravelInsuranceDetail, SpilloverInsuranceDetail, PetInsuranceDetail, MortgageInsuranceDetail, InheritanceInsuranceDetail];
    // 簡單的路由對應修正
    const detailMap = {life:0, medical:1, savings:2, investment:3, annuity:4, property:5, travel:6, spillover:7, pet:8, mortgage:9, inheritance:10};
    const DetailComponent = Details[detailMap[showDetail]];
    return <DetailComponent onBack={() => setShowDetail(null)} onContact={() => { setShowDetail(null); setTimeout(toggleContactModal, 100); }} />;
  }

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
            <button onClick={() => scrollToSection('portfolio')} className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>商品解析</button>
            <button onClick={toggleContactModal} className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-red-900/30 transform hover:-translate-y-0.5">預約健診</button>
          </div>
          <div className="md:hidden text-gray-800"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">{isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'} />}</button></div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('philosophy')} className="text-left text-gray-600 py-2 border-b border-gray-50">核心原則</button>
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={toggleContactModal} className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">啟動防禦計畫 <ArrowRight size={20} /></button>
              <button onClick={() => scrollToSection('portfolio')} className="bg-white hover:bg-red-50 text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-medium text-lg transition-all hover:border-red-300 flex items-center justify-center gap-2">瀏覽保險商品</button>
            </div>
          </div>
        </div>
      </header>

      <section id="philosophy" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold mb-4">構建穩固防護網的三大原則</h2>
           <p className="text-gray-600">631 法則 · 雙十原則 · 先保大再保小</p>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-10"><h2 className="text-3xl font-bold">全方位保險商品解析</h2></div>
        <div className="container mx-auto px-6 flex justify-center gap-2 mb-10">{categories.map(cat => <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full border ${activeCategory===cat.id?'bg-red-700 text-white':'bg-white'}`}>{cat.name}</button>)}</div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow border p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">{item.icon} <h3 className="font-bold text-lg">{item.title}</h3></div>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <button onClick={() => setShowDetail(['life','medical','savings','investment','annuity','property','travel','spillover','pet','mortgage','inheritance'][item.id-1])} className="text-red-700 text-sm font-bold flex items-center">深入了解 <ChevronRight size={16}/></button>
              </div>
            ))}
        </div>
      </section>

      {/* 🔥 真實 AI 區塊 (已保留) */}
      <AIConsultantSection onContact={toggleContactModal} />

      {/* ⚠️ 注意：精選案例區塊已被移除 */}

      <footer className="bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-500">
         <p>Financial Defense Blueprint</p>
      </footer>

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