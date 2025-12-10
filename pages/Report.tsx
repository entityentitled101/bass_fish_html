
import React, { useState } from 'react';
import Modal from '../components/Modal';

const Report: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const baseUrl = "https://cdn.jsdelivr.net/gh/entityentitled101/bass_fish_photos@main";

  const reports = [
    { page: 1, src: `${baseUrl}/test%20(1).png` },
    { page: 2, src: `${baseUrl}/test%20(2).png` },
    { page: 3, src: `${baseUrl}/test%20(3).png` },
    { page: 4, src: `${baseUrl}/test%20(4).png` }
  ];

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + reports.length) % reports.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % reports.length);
  };

  const currentReport = reports[currentIndex];

  return (
    <div className="p-4 min-h-screen pb-32 animate-fadeIn">
      <div className="px-2 mb-4">
        <h2 className="text-2xl font-bold font-serif mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">权威检测</h2>
        <p className="text-xs text-textGray">绿城农科检测技术公司认证</p>
      </div>

      <div className="flex flex-col items-center">
          <div className="w-full bg-gradient-to-br from-white to-cream rounded-2xl p-4 shadow-md border border-warm text-center relative">
            <div className="text-[11px] text-teal font-bold mb-3 flex justify-between items-center">
              <span>检测报告 第{currentReport.page}页 / 共{reports.length}页</span>
              <span className="text-[9px] bg-teal/10 px-2 py-0.5 rounded-full text-teal">点击查看大图</span>
            </div>
            
            <div 
              className="w-full aspect-[3/4.2] bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all border border-gray-100 relative group"
              onClick={() => setModalImage(currentReport.src)}
            >
              {/* Image */}
              <div className="w-full h-full relative">
                <img 
                    src={currentReport.src} 
                    alt={`报告 ${currentReport.page}`} 
                    className="w-full h-full object-cover transition-transform duration-500" 
                />
              </div>

              {/* Navigation Buttons - Overlay */}
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 w-9 h-9 bg-white/90 border border-primary/20 rounded-full flex items-center justify-center text-primary text-xl shadow-md hover:scale-110 active:scale-95 transition-all z-10"
              >
                ‹
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9 bg-white/90 border border-primary/20 rounded-full flex items-center justify-center text-primary text-xl shadow-md hover:scale-110 active:scale-95 transition-all z-10"
              >
                ›
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 mt-4">
                {reports.map((_, idx) => (
                <div 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border border-primary/30 ${idx === currentIndex ? 'w-4 bg-primary' : 'w-1.5 bg-gray-300'}`}
                />
                ))}
            </div>
          </div>
      </div>

      <Modal isOpen={!!modalImage} onClose={() => setModalImage(null)}>
        {modalImage && (
          <div className="flex flex-col items-center">
             <img src={modalImage} alt="Report Detail" className="w-full h-auto rounded-lg shadow-2xl" />
             <div className="mt-4 text-gray-500 text-xs">双指捏合可缩放 (模拟)</div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Report;
