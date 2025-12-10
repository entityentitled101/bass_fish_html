
import React from 'react';
import Carousel from '../components/Carousel';
import { Tab } from '../types';

interface HomeProps {
  setTab: (tab: Tab) => void;
}

const Home: React.FC<HomeProps> = ({ setTab }) => {
  // 基础路径
  const baseUrl = "https://cdn.jsdelivr.net/gh/entityentitled101/bass_fish_photos@main";

  const images = [
    { src: `${baseUrl}/product1.jpg`, alt: '清水生态无抗鲈鱼' },
    { src: `${baseUrl}/product2.jpg`, alt: '12个月生态放养' },
    { src: `${baseUrl}/product3.jpg`, alt: '检验检测报告' },
    { src: `${baseUrl}/product4.jpg`, alt: '清蒸鲈鱼' },
    { src: `${baseUrl}/product5.jpg`, alt: '鲜活现杀' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[inherit] p-6 text-center animate-fadeIn pb-32">
      {/* 
        调整 aspectRatio 为 "aspect-video" (即 16:9 横屏)。
        如果需要根据 "横屏9:16" 这个描述理解为非常宽的横屏，Tailwind 默认的 aspect-video 已经很合适。
      */}
      <div className="w-full max-w-[340px] mb-8 shadow-xl rounded-xl overflow-hidden">
        <Carousel images={images} aspectRatio="aspect-video" />
      </div>

      <h1 className="text-4xl font-bold text-primary font-serif leading-tight mb-3 tracking-tight">
        清水生态<br />健康之选
      </h1>
      <p className="text-sm text-textGray leading-relaxed font-normal tracking-wide max-w-[280px] mb-8">
        生态养殖 | 零抗生素 | 专家背书
      </p>
      
      <button 
        onClick={() => setTab(Tab.BREEDING)}
        className="w-[200px] h-12 border-2 border-primary text-primary text-[15px] font-semibold rounded-lg font-serif hover:bg-primary hover:text-white hover:shadow-lg transition-all active:scale-95"
      >
        开始探索 →
      </button>
    </div>
  );
};

export default Home;
