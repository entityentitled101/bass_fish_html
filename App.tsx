import React, { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Breeding from './pages/Breeding';
import Report from './pages/Report';
import Review from './pages/Review';
import Purchase from './pages/Purchase';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    // 使用 min-h-[100dvh] 确保在移动端浏览器（包括 Safari）中占满可见区域
    // pb-[env(safe-area-inset-bottom)] 在外层虽然这里主要靠 Nav 组件处理，
    // 但主容器设置为 flex column 确保布局稳固
    <div className="min-h-[100dvh] w-full flex flex-col bg-gradient-to-br from-warm/30 to-cream text-textDark font-sans">
      
      {/* Main Content Area */}
      {/* pb-20 确保内容不被底部导航栏遮挡 (60px nav + padding) */}
      <main className="flex-1 w-full max-w-md mx-auto bg-white shadow-xl min-h-[100dvh] relative">
        {activeTab === Tab.HOME && <Home setTab={setActiveTab} />}
        {activeTab === Tab.BREEDING && <Breeding />}
        {activeTab === Tab.REPORT && <Report />}
        {activeTab === Tab.REVIEW && <Review />}
        {activeTab === Tab.PURCHASE && <Purchase />}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
