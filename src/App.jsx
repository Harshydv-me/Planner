import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Cloud, Users } from 'lucide-react';

const THEMES = {
  morning: {
    name: 'Morning',
    color: '#facc15',
    accent: 'text-morning',
    bgAccent: 'bg-morning',
    gradient: 'from-amber-700 to-morning',
    shadow: 'shadow-morning/20',
    glow: 'rgba(250, 204, 21, 0.3)'
  },
  afternoon: {
    name: 'Afternoon',
    color: '#fb7185',
    accent: 'text-afternoon',
    bgAccent: 'bg-afternoon',
    gradient: 'from-rose-700 to-afternoon',
    shadow: 'shadow-afternoon/20',
    glow: 'rgba(251, 113, 133, 0.3)'
  },
  evening: {
    name: 'Evening',
    color: '#34d399',
    accent: 'text-evening',
    bgAccent: 'bg-evening',
    gradient: 'from-emerald-700 to-evening',
    shadow: 'shadow-evening/20',
    glow: 'rgba(52, 211, 153, 0.3)'
  },
  night: {
    name: 'Night',
    color: '#a855f7',
    accent: 'text-night',
    bgAccent: 'bg-night',
    gradient: 'from-violet-700 to-night',
    shadow: 'shadow-night/20',
    glow: 'rgba(168, 85, 247, 0.3)'
  }
};

const TOPICS = [
  { id: 1, title: 'Physics revision', duration: '30 min' },
  { id: 2, title: 'Physics line-by line', duration: null },
  { id: 3, title: 'Break', duration: '30 min' },
  { id: 4, title: 'Physics revision', duration: '30 min' },
  { id: 5, title: 'Break', duration: '30 min' },
  { id: 6, title: 'Physics revision', duration: '30 min' },
];

function TopicCard({ topic }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="group relative flex items-center justify-between p-4 mb-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15]"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-base font-semibold text-white/90">{topic.title}</h3>
        {topic.duration && (
          <span className="text-xs font-medium text-white/30">({topic.duration})</span>
        )}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-1.5 rounded-full bg-transparent border border-white/20 text-xs font-bold tracking-tight text-white hover:bg-white/10 transition-colors"
      >
        Start
      </motion.button>
    </motion.div>
  );
}

function App() {
  const [timeOfDay, setTimeOfDay] = useState('night');
  const theme = THEMES[timeOfDay];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-white/20 overflow-x-hidden font-sans pb-20">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Main Container */}
      <main className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col px-6 pt-12">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            <span className="text-lg font-medium tracking-tight">Today's plan</span>
          </div>

          <div className="flex flex-col items-start">
            <Cloud size={14} className={`${theme.accent} mb-1`} />
            <div className={`px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider ${theme.accent}`}>
              05 April 2026
            </div>
          </div>
        </header>

        {/* Temporary Theme Toggle */}
        <div className="fixed top-4 left-4 z-50 flex gap-2">
          {Object.keys(THEMES).map(t => (
            <button 
              key={t}
              onClick={() => setTimeOfDay(t)}
              className={`w-3 h-3 rounded-full ${THEMES[t].bgAccent} border border-white/20`}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center pt-20 pb-12 mb-8">
          <div className="absolute top-0 w-full h-[320px] flex justify-center overflow-hidden pointer-events-none">
            <motion.div 
              key={timeOfDay}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[120%] h-[400px]"
            >
              <div 
                className="absolute inset-0 rounded-[100%] border-t-[3px] transition-colors duration-1000"
                style={{ 
                  borderColor: theme.color,
                  boxShadow: `0 -2px 5px #fff, 0 -4px 15px ${theme.color}, 0 -10px 40px ${theme.glow}, 0 -20px 80px ${theme.glow}`,
                }}
              />
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] rounded-[100%] blur-[60px] opacity-30 transition-colors duration-1000"
                style={{ backgroundColor: theme.color }}
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-10 z-20"
          >
            <div className={`w-2 h-2 rounded-full ${theme.bgAccent}`} 
                 style={{ boxShadow: `0 0 12px ${theme.color}` }} />
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/50 uppercase">Organic Chemistry</span>
          </motion.div>

          <div className="relative z-20 flex items-baseline gap-4 font-medium tracking-tighter">
            <div className="flex items-baseline gap-1">
              <span className="text-6xl md:text-7xl font-semibold">05</span>
              <span className="text-xs text-white/40 font-medium">hr</span>
            </div>
            <div className="w-1 h-1 bg-white/20 rounded-full mb-6" />
            <div className="flex items-baseline gap-1">
              <span className="text-6xl md:text-7xl font-semibold">00</span>
              <span className="text-xs text-white/40 font-medium">min</span>
            </div>
            <div className="w-1 h-1 bg-white/20 rounded-full mb-6" />
            <div className="flex items-baseline gap-1">
              <span className="text-6xl md:text-7xl font-semibold">00</span>
              <span className="text-xs text-white/40 font-medium">sec</span>
            </div>
          </div>

          <div className="w-full max-w-[260px] h-1.5 bg-white/5 rounded-full mt-10 relative overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`absolute left-0 top-0 h-full bg-gradient-to-r ${theme.gradient} rounded-full`}
            />
          </div >
        </section>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-[10px] font-bold tracking-[0.1em] text-white/40 uppercase whitespace-nowrap">Todays topics to be covered</span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* Topics List */}
        <section className="flex-1 space-y-1 mb-12">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </section>

        {/* CTA Section (Now Inline) */}
        <section className="flex flex-col items-center gap-4 pb-12">
          {/* Social Proof */}
          <div className="flex items-center gap-2">
            <Users size={16} className="text-white/60" />
            <span className="text-sm font-medium text-white/90">
              28 students declared their plan today
            </span>
          </div>

          {/* Main Action Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-3xl font-bold text-xl tracking-tight relative overflow-hidden group shadow-2xl transition-colors duration-500`}
            style={{ 
              background: `linear-gradient(to bottom, ${theme.color}CC, ${theme.color})`,
              boxShadow: `0 10px 30px -10px ${theme.glow}`
            }}
          >
            {/* Top Glossy Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40 z-10" />
            
            <span className="relative z-10 text-white drop-shadow-sm">
              Start plan
            </span>
            
            {/* Ambient Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white" />
          </motion.button>
        </section>

      </main>
    </div>
  );
}

export default App;
