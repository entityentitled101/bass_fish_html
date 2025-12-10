
import React from 'react';
import { Tab } from '../types';
import { HomeIcon, BreedingIcon, ReportIcon, ReviewIcon, PurchaseIcon } from './Icons';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: Tab.HOME, label: '首页', icon: HomeIcon },
    { id: Tab.BREEDING, label: '养殖', icon: BreedingIcon },
    { id: Tab.REPORT, label: '检测', icon: ReportIcon },
    { id: Tab.REVIEW, label: '评价', icon: ReviewIcon },
    { id: Tab.PURCHASE, label: '购买', icon: PurchaseIcon },
  ];

  return (
    /* 
      关键修复与优化：
      1. pb-[calc(env(safe-area-inset-bottom)+12px)]: 
         在系统安全区的基础上，额外增加 12px 的内边距。
         这会将导航栏整体向上抬起，完全避开 iPhone 底部的黑色手势条和 Safari 浏览器的底部工具栏触发区。
      2. h-auto & py-2: 让高度自适应内容。
    */
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#e8e0d5] pb-[calc(env(safe-area-inset-bottom)+12px)] pt-2 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all duration-200 active:scale-95 ${
              activeTab === item.id ? 'text-primary' : 'text-textGray'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <item.icon className={`w-5 h-5 transition-transform duration-300 ${activeTab === item.id ? 'scale-110 stroke-[2.5px]' : ''}`} />
            </div>
            <span className={`text-[10px] font-medium transition-colors ${activeTab === item.id ? 'text-primary' : 'text-textGray/80'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
