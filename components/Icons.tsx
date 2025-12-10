import React from 'react';

export const HomeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

export const BreedingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 18c-1 1-1 2-1 4s0 3 1 4M17 18c1 1 1 2 1 4s0 3-1 4M4 6h16v8a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V6z"/>
  </svg>
);

export const ReportIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export const ReviewIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export const PurchaseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

export const StepMudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
    <circle cx="12" cy="12" r="9" stroke="#2D8B6A"/><path d="M12 7v10M7 12h10" stroke="#0B7BA7" strokeLinecap="round"/>
  </svg>
);

export const StepGrassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
    <path d="M12 2L20 7v10c0 5-8 8-8 8s-8-3-8-8V7l8-5z" stroke="#2D8B6A"/><line x1="12" y1="12" x2="12" y2="18" stroke="#0B7BA7"/>
  </svg>
);

export const StepWaterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
    <path d="M12 2c-1 0-2 1-2 2v8c0 1 1 2 2 2s2-1 2-2V4c0-1-1-2-2-2z" stroke="#0B7BA7"/><path d="M8 10c-1 0-2 1-2 2v7c0 2 2 3 4 3h4c2 0 4-1 4-3v-7c0-1-1-2-2-2" stroke="#2D8B6A"/>
  </svg>
);

export const StepFishIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-6 h-6">
    <path d="M12 2c2 2 4 4 4 8v8c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-8c0-4 2-6 4-8z" stroke="#0B7BA7"/><path d="M8 10c-2 1-3 3-3 6v4c0 1 1 1 2 1M16 10c2 1 3 3 3 6v4c0 1-1 1-2 1" stroke="#2D8B6A"/>
  </svg>
);
