
import React, { useState } from 'react';
import Modal from '../components/Modal';

const Purchase: React.FC = () => {
  const [modalType, setModalType] = useState<'buy' | 'contact' | null>(null);
  const baseUrl = "https://cdn.jsdelivr.net/gh/entityentitled101/bass_fish_photos@main";

  return (
    <div className="flex flex-col items-center justify-center min-h-[inherit] p-6 text-center animate-fadeIn pb-32">
      <h1 className="text-4xl font-bold text-primary font-serif leading-tight mb-3 tracking-tight">
        清水生态<br />健康之选
      </h1>
      <p className="text-sm text-textGray mb-8 tracking-wide">
        专业养殖 | 权威背书 | 安心购买
      </p>

      <div className="flex flex-col gap-4 w-full max-w-[280px] mb-12">
        <button 
          onClick={() => setModalType('buy')}
          className="w-full h-12 bg-gradient-to-r from-primary to-teal text-white border-none text-[15px] font-bold rounded-xl font-serif shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>立即购买</span>
        </button>
        <button 
          onClick={() => setModalType('contact')}
          className="w-full h-12 bg-transparent text-accent border-2 border-accent text-[15px] font-bold rounded-xl font-serif hover:bg-accent hover:text-white transition-all active:scale-95"
        >
          联系合作
        </button>
      </div>

      <div className="text-[11px] text-textGray leading-relaxed space-y-4 max-w-[320px]">
        <div>
          <strong className="text-primary block mb-1 text-xs">上海绿佳元农业科技有限公司</strong>
        </div>
        <div>
          <strong className="text-primary block mb-1 text-xs">基地地址</strong>
          <p>宜兴西氿基地：无锡市宜兴市新街街道新乐村</p>
          <p>绍兴八福基地：绍兴市越城区孙端街道榆林村</p>
        </div>
        <div className="pt-4 border-t border-warm italic opacity-80 mt-4">
          每一条鱼都源于自然的馈赠<br/>也是人类遵循自然规律、与自然和谐共生的结果
        </div>
      </div>

      {/* Reusable Modal Content */}
      <Modal isOpen={modalType === 'buy'} onClose={() => setModalType(null)}>
        <div className="flex flex-col items-center p-6">
          <h3 className="text-lg font-bold text-primary mb-4 font-serif">访问我们的店铺</h3>
          <div className="w-56 h-auto bg-gray-50 mb-3 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
             <img src={`${baseUrl}/douyin.jpg`} alt="抖音店铺" className="w-full h-full object-contain" />
          </div>
          <p className="text-xs text-textGray mt-2">长按保存图片或截图扫码访问</p>
        </div>
      </Modal>

      <Modal isOpen={modalType === 'contact'} onClose={() => setModalType(null)}>
        <div className="flex flex-col items-center p-6">
          <h3 className="text-lg font-bold text-accent mb-4 font-serif">关注微信公众号</h3>
          <div className="w-56 h-auto bg-gray-50 mb-3 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
             <img src={`${baseUrl}/weixin.jpg`} alt="微信二维码" className="w-full h-full object-contain" />
          </div>
          <p className="text-xs text-textGray mt-2">长按保存图片或截图扫码关注</p>
        </div>
      </Modal>
    </div>
  );
};

export default Purchase;
