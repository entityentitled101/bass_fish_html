
import React from 'react';
import Carousel from '../components/Carousel';

const Review: React.FC = () => {
  const baseUrl = "https://cdn.jsdelivr.net/gh/entityentitled101/bass_fish_photos@main";
  
  const dishImages = [
    { src: `${baseUrl}/dishes%20(1).jpg`, alt: '消费场景1' },
    { src: `${baseUrl}/dishes%20(2).jpg`, alt: '消费场景2' },
    { src: `${baseUrl}/dishes%20(3).jpg`, alt: '消费场景3' },
  ];

  return (
    <div className="p-4 pb-32 animate-fadeIn">
      <div className="px-2 mb-4">
        <h2 className="text-2xl font-bold font-serif mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">营养丰富</h2>
        <p className="text-xs text-textGray">鲜味十足</p>
      </div>

      {/* Nutrition Card */}
      <div className="bg-gradient-to-br from-white to-cream rounded-2xl p-5 mb-6 shadow-sm border border-warm flex flex-col items-center text-center">
        <div className="w-48 h-48 bg-gray-100 rounded-xl mb-6 overflow-hidden shadow-inner p-2">
          <img src={`${baseUrl}/nutrition.jpg`} alt="鲈鱼" className="w-full h-full object-contain mix-blend-multiply" />
        </div>
        
        <div className="grid grid-cols-2 gap-3 w-full mb-4">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-3 border border-primary/10">
            <div className="text-xl font-bold text-primary font-serif">18.6</div>
            <div className="text-[11px] text-textGray">高蛋白<br/>g/100g</div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-3 border border-primary/10">
            <div className="text-xl font-bold text-primary font-serif">860</div>
            <div className="text-[11px] text-textGray">DHA含量<br/>mg/100g</div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-3 border border-primary/10">
            <div className="text-xl font-bold text-primary font-serif">3.5</div>
            <div className="text-[11px] text-textGray">低脂肪<br/>%</div>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-3 border border-primary/10">
            <div className="text-xl font-bold text-primary font-serif">0</div>
            <div className="text-[11px] text-textGray">零腥味<br/>天然</div>
          </div>
        </div>
        <div className="text-xs text-textGray leading-relaxed bg-white/50 p-2 rounded-lg w-full">
          每100克鲈鱼蛋白质含量：18.6-19.5g，相当于3个鸡蛋或5杯牛奶的蛋白量
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#e8e0d5] to-transparent my-6"></div>

      <div className="px-1 mb-4">
        <h3 className="text-lg font-bold text-textDark font-serif mb-1">用户评价</h3>
        <p className="text-xs text-textGray">家庭首选</p>
      </div>

      <div className="mb-6 rounded-xl overflow-hidden shadow-md">
        <Carousel images={dishImages} aspectRatio="aspect-video" />
      </div>

      <div className="flex flex-col gap-3">
        {[
          { text: "鱼肉紧实，一点不腥。全家都很喜欢！", author: "家庭主妇", role: "妈妈" },
          { text: "高蛋白低脂肪，增肌减脂首选，连续回购！", author: "健身爱好者", role: "达人" },
          { text: "零抗生素，孕妇也能放心吃。质量真的不错。", author: "准妈妈", role: "孕期" }
        ].map((review, i) => (
          <div key={i} className="bg-gradient-to-br from-white to-cream rounded-xl p-3 pl-4 border border-warm relative shadow-sm hover:shadow-md transition-all">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal rounded-l-xl"></div>
            <div className="text-xs text-textDark italic mb-2 leading-relaxed">"{review.text}"</div>
            <div className="flex justify-between items-center">
              <div className="text-[11px] text-textGray font-medium">- {review.author}</div>
              <div className="flex text-teal text-[10px]">
                ★★★★★
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
