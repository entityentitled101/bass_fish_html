
import React, { useState } from 'react';
import { StepMudIcon, StepGrassIcon, StepWaterIcon, StepFishIcon } from '../components/Icons';

const Breeding: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeBase, setActiveBase] = useState<number | null>(null);
  const [currentExpert, setCurrentExpert] = useState(0);

  const baseUrl = "https://cdn.jsdelivr.net/gh/entityentitled101/bass_fish_photos@main";

  const steps = [
    {
      title: "养泥",
      desc: "3-4年底质改良",
      icon: StepMudIcon,
      content: "底泥改良是基础。养殖前用石灰和微生物预处理，种植水草，长期保持好氧环境，让螺贝等底栖动物自然净化残饵和排泄物。"
    },
    {
      title: "养草",
      desc: "水下森林自净",
      icon: StepGrassIcon,
      content: "水草是生态系统的核心。它既能净化水质、处理底泥污染，还能为鱼类提供躲避空间，形成自然的生态平衡。"
    },
    {
      title: "养水",
      desc: "氨氮<0.2mg/L | 透明度>120cm",
      icon: StepWaterIcon,
      content: "严格的水质标准是保障。通过水草自净和生态食物链的循环，实现水质优于国家III类标准，无需化学处理。"
    },
    {
      title: "养鱼",
      desc: "生态食物链养殖",
      icon: StepFishIcon,
      content: "低密度散养，让鱼在模拟野生环境中生长。主要食物来自生态链中的小型水生动物，全程不用药、不激素，鱼体更健康。"
    }
  ];

  const bases = [
    {
      title: "宜兴西氿基地",
      items: ["300亩养殖基地 + 研究中心", "劣V类 → III类水体改造", "太湖治理示范工程"],
      // 注意：URL中的空格需要编码为 %20
      image: `${baseUrl}/base%20(1).jpg`
    },
    {
      title: "绍兴八福基地",
      items: ["210亩养殖基地", "养殖废水零排放", "城市周边生态养殖样板"],
      image: `${baseUrl}/base%20(2).jpg`
    }
  ];

  const experts = [
    { name: "宗兵年", image: `${baseUrl}/professional%20(1).jpg` },
    { name: "赵金良", image: `${baseUrl}/professional%20(2).jpg` }
  ];

  return (
    <div className="p-4 space-y-6 pb-32 animate-fadeIn">
      {/* Header */}
      <div className="px-2">
        <h2 className="text-2xl font-bold font-serif mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">好水出好鱼</h2>
        <p className="text-xs text-textGray">对比一览</p>
      </div>

      {/* Comparison Cards */}
      <div className="flex flex-col gap-3 px-2">
        <div className="bg-gradient-to-br from-white to-cream rounded-2xl p-4 shadow-sm border border-warm">
          <div className="w-full h-32 bg-gray-100 rounded-xl mb-3 overflow-hidden">
             <img src={`${baseUrl}/contrast%20(1).jpg`} alt="传统养殖" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="font-bold text-textDark mb-2 text-base font-serif">传统养殖</div>
          <div className="text-xs text-textGray leading-relaxed">水质等级：V类<br/>密度：2000-8000斤/亩<br/>频繁用药</div>
        </div>
        <div className="bg-gradient-to-br from-white to-cream rounded-2xl p-4 shadow-sm border border-warm">
          <div className="w-full h-32 bg-gray-100 rounded-xl mb-3 overflow-hidden shadow-md">
            <img src={`${baseUrl}/contrast%20(2).jpg`} alt="清水生态" className="w-full h-full object-cover" />
          </div>
          <div className="font-bold text-textDark mb-2 text-base font-serif">清水生态</div>
          <div className="text-xs text-textGray leading-relaxed">水质等级：III类<br/>密度：≈500斤/亩<br/>全程零抗</div>
        </div>
      </div>

      {/* Four Steps Logic */}
      <div className="px-2">
        <h3 className="text-lg font-bold text-textDark font-serif mb-1">四养逻辑</h3>
        <p className="text-xs text-textGray mb-4">养鱼先养水，养水先养泥</p>
        <div className="flex flex-col gap-3">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              className={`relative rounded-xl p-3 flex flex-col gap-3 transition-all duration-300 border cursor-pointer
                ${activeStep === idx 
                  ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary shadow-md' 
                  : 'bg-gradient-to-br from-cream to-warm border-warm shadow-sm hover:shadow-md'
                }
              `}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-teal rounded-l-xl"></div>
              <div className="flex items-center gap-3 pl-2">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg shrink-0">
                  <step.icon />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-textDark text-[15px] font-serif">{step.title}</div>
                  <div className="text-xs text-textGray">{step.desc}</div>
                </div>
                <div className={`text-primary font-bold text-lg transition-transform duration-300 ${activeStep === idx ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${activeStep === idx ? 'max-h-40 border-t border-primary/10 pt-3 mt-1' : 'max-h-0'}`}>
                <p className="text-xs text-textGray leading-relaxed">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Base Info */}
      <div className="px-2">
        <h3 className="text-lg font-bold text-textDark font-serif mb-3">生态基地</h3>
        <div className="flex flex-col gap-3">
          {bases.map((base, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveBase(activeBase === idx ? null : idx)}
              className="bg-gradient-to-br from-white to-cream rounded-xl p-4 border border-warm shadow-sm relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal"></div>
              <div className="flex justify-between items-center pl-3">
                <div className="font-bold text-primary text-[15px] font-serif">{base.title}</div>
                <div className={`text-teal transition-transform duration-300 ${activeBase === idx ? 'rotate-90' : ''}`}>➤</div>
              </div>
              <div className={`transition-all duration-300 overflow-hidden ${activeBase === idx ? 'max-h-[300px] mt-3' : 'max-h-0'}`}>
                <div className="space-y-1.5 pl-3">
                  {base.items.map((item, i) => (
                    <div key={i} className="text-xs text-textGray flex items-start gap-1">
                      <span className="text-teal font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                  <div className="mt-3 rounded-lg overflow-hidden h-40 w-full shadow-inner">
                    <img src={base.image} alt={base.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experts - Simplified Carousel */}
      <div className="px-2 pb-4">
        <div className="bg-gradient-to-br from-white to-cream rounded-xl p-4 shadow-sm border border-warm">
          <div className="text-[15px] font-bold text-textDark font-serif mb-3">专家背书</div>
          <div className="text-xs text-textGray leading-relaxed mb-4 text-justify">
            同济大学农业环境与生态研究所与海洋大学淡水渔业研究中心联合，由资深水生生态学专家团队潜心三年研发。以"绿色、生态、环保"为核心理念，打造优质的水生态环境。
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md">
             {/* 专家图片比例从 3:4 调整为 16:9 (aspect-video) 以适配横屏图片 */}
             <div className="w-full aspect-video bg-gray-100 relative">
               <img src={experts[currentExpert].image} alt={experts[currentExpert].name} className="w-full h-full object-cover" />
               <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent pt-8 pb-3 text-white text-center">
                 <div className="text-lg font-serif font-bold tracking-widest">{experts[currentExpert].name}</div>
               </div>
             </div>
             <button 
                onClick={(e) => { e.stopPropagation(); setCurrentExpert(curr => (curr - 1 + experts.length) % experts.length) }}
                className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-primary shadow-lg"
             >‹</button>
             <button 
                onClick={(e) => { e.stopPropagation(); setCurrentExpert(curr => (curr + 1) % experts.length) }}
                className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-primary shadow-lg"
             >›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breeding;
