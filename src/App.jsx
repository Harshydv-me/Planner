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
      className="group relative flex items-center justify-between p-3.5 mb-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15]"
    >
      <div className="flex items-center gap-3">
        <h3 className="text-[15px] font-semibold text-white/90">{topic.title}</h3>
        {topic.duration && (
          <span className="text-[11px] font-medium text-white/30">({topic.duration})</span>
        )}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-1 rounded-full bg-transparent border border-white/20 text-[11px] font-bold tracking-tight text-white hover:bg-white/10 transition-colors"
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
    <div className="min-h-screen lg:h-screen bg-background text-white selection:bg-white/20 overflow-x-hidden lg:overflow-hidden font-sans">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Floating Theme Toggle */}
      <div className="fixed bottom-6 right-6 hidden lg:flex flex-col gap-3 p-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 z-50">
        {Object.keys(THEMES).map(t => (
          <button 
            key={t}
            onClick={() => setTimeOfDay(t)}
            className={`w-3.5 h-3.5 rounded-full ${THEMES[t].bgAccent} border border-white/20 hover:border-white/60 transition-colors`}
            title={t}
          />
        ))}
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6 pb-12 flex flex-col h-full">
        
        {/* Universal Header - Scaled Down */}
        <header className="relative flex items-center justify-center mb-4 lg:mb-10 h-12 flex-shrink-0">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            <span className="text-base font-medium tracking-tight whitespace-nowrap">Today's plan</span>
          </div>

          <div className="absolute right-0 flex flex-col items-end">
            <Cloud size={14} className={`${theme.accent} mb-0.5`} />
            <div className={`px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[9px] font-bold tracking-wider uppercase ${theme.accent}`}>
              05 April 2026
            </div>
          </div>
        </header>
       
        {/* topics tab */}
        {/* Dashboard Split View */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start gap-6 lg:gap-44 flex-1 min-h-0 overflow-y-auto lg:overflow-visible custom-scrollbar ">
          {/* clock tab */}
          {/* Left Column: Hero & Timer - Scaled Down */}
          <div className="w-full lg:max-w-[420px] flex flex-col items-center lg:pl-26 lg:pt-32 flex-shrink-0" >
            
            {/* Subject Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className={`w-2 h-2 rounded-full ${theme.bgAccent}`} 
                   style={{ boxShadow: `0 0 10px ${theme.color}` }} />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Organic Chemistry</span>
            </motion.div>

            {/* Fixed-Size Semicircle Arc Hero - Scaled down slightly */}
            <div className="relative w-[300px] h-[150px] sm:w-[360px] sm:h-[180px] flex items-end justify-center mb-8 flex-shrink-0">
              <svg 
                viewBox="0 0 360 180" 
                className="absolute top-0 w-full h-full overflow-visible pointer-events-none"
              >
                <motion.path
                  key={timeOfDay}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 30,180 A 150,150 0 0 1 330,180"
                  fill="none"
                  stroke={theme.color}
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{
                    filter: `
                      drop-shadow(0 0 3px #fff)
                      drop-shadow(0 0 8px ${theme.color})
                      drop-shadow(0 0 25px ${theme.glow})
                    `
                  }}
                />
              </svg>
              
              {/* Central Ambient Glow */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-full rounded-full blur-[60px] opacity-15 transition-colors duration-1000"
                style={{ backgroundColor: theme.color }}
              />

              {/* Timer Display - Scaled down */}
              <div className="relative z-20 flex items-baseline gap-3 font-medium tracking-tighter pb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-semibold">05</span>
                  <span className="text-[9px] sm:text-[10px] text-white/40 font-medium uppercase">hr</span>
                </div>
                <div className="w-0.5 h-0.5 bg-white/20 rounded-full mb-4 sm:mb-5" />
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-semibold">00</span>
                  <span className="text-[9px] sm:text-[10px] text-white/40 font-medium uppercase">min</span>
                </div>
                <div className="w-0.5 h-0.5 bg-white/20 rounded-full mb-4 sm:mb-5" />
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-semibold">00</span>
                  <span className="text-[9px] sm:text-[10px] text-white/40 font-medium uppercase">sec</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-[240px] sm:max-w-[280px] h-1 bg-white/5 rounded-full relative overflow-hidden border border-white/5 z-20 mb-6 flex-shrink-0">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`absolute left-0 top-0 h-full bg-gradient-to-r ${theme.gradient} rounded-full`}
              />
            </div >
          </div>

          {/* Right Column: Topics List - Scaled Down and Capped */}
          <div className="w-full flex-1 max-w-[540px] flex flex-col lg:mt-0 min-h-0">
            
            {/* Section Divider Header */}
            <div className="flex items-center gap-3 mb-5 flex-shrink-0">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
              <span className="text-[9px] sm:text-[10px] font-medium text-white/40 whitespace-nowrap uppercase tracking-wider">
                Todays topics to be covered
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-5 sm:p-7 backdrop-blur-xl relative overflow-hidden group flex flex-col min-h-0">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/[0.02] rounded-full blur-[60px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col min-h-0 h-full">
                {/* Scrollable Topics Area */}
                <div className="relative flex-1 min-h-0 overflow-hidden group/list">
                  <div className="space-y-1.5 h-full overflow-y-auto pr-2 custom-scrollbar relative z-10 pt-4">
                    {TOPICS.map((topic) => (
                      <TopicCard key={topic.id} topic={topic} />
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Area - Compact */}
                <div className="mt-auto flex flex-col items-center gap-4 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-white/40" />
                    <span className="text-[9px] sm:text-[10px] font-medium text-white/40 uppercase tracking-widest">
                      28 students active
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3.5 rounded-2xl font-bold text-base sm:text-lg tracking-tight relative overflow-hidden shadow-2xl transition-colors duration-500`}
                    style={{ 
                      background: `linear-gradient(to bottom, ${theme.color}CC, ${theme.color})`,
                      boxShadow: `0 8px 30px -10px ${theme.glow}`
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40 z-10" />
                    <span className="relative z-10 text-white drop-shadow-sm uppercase">Start plan</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Mobile Theme Toggle */}
        <div className="flex lg:hidden justify-center gap-3 mt-8 flex-shrink-0">
           {Object.keys(THEMES).map(t => (
            <button 
              key={t}
              onClick={() => setTimeOfDay(t)}
              className={`w-3 h-3 rounded-full ${THEMES[t].bgAccent} border border-white/20`}
              aria-label={`Switch to ${t}`}
            />
          ))}
        </div>

      </main>
    </div>
  );
}

export default App;
