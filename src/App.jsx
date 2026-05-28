import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, MoveLeft, CloudSun } from 'lucide-react';

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
        className="px-5.5 py-1 rounded-lg bg-transparent border border-white/20 text-[11px] font-bold tracking-tight text-white hover:bg-white/10 transition-colors"
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

      {/* Top White Ambient Glow */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none z-0">
        <div 
          className="absolute top-[-100px] left-0 right-0 h-[200px] blur-[120px] opacity-30 bg-white"
        />
      </div>

      {/* Bottom Theme Ambient Glow - Refined for seamless bloom */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0">
        <div 
          className="absolute bottom-[-150px] left-[-2%] w-[70%] h-[300px] blur-[120px] opacity-60 transition-colors duration-1000 rounded-full"
          style={{ backgroundColor: theme.color }}
        />
      </div>

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
        <header className="relative flex items-center justify-center mb-4 lg:mb-12 h-12 flex-shrink-0">
          <motion.button 
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <MoveLeft size={30} strokeWidth={2} />
          </motion.button>

          <div className="relative group">
            <div className="relative px-7 py-0 rounded-full bg-[#202020] border border-white/0 flex items-center justify-center"
                 style={{
                   boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.9), inset 0 -1px 0.5px rgba(255, 255, 255, 0.23)'
                 }}>
              <span className="text-[26px] font-bold tracking-tight whitespace-nowrap bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent font-jakarta">
               Today's plan
              </span>
            </div>
          </div>

          <div className="absolute right-0 xl:right-14 flex flex-col items-end">
            <CloudSun size={18} className={`${theme.accent} mb-1`} />
            <div className={`px-2 py-1 rounded-sm bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider uppercase ${theme.accent}`}>
              05 April 2026
            </div>
          </div>
        </header>
       
        {/* topics tab */}
        {/* Dashboard Split View */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start gap-6 lg:gap-44 flex-1 lg:min-h-0 lg:overflow-visible custom-scrollbar pt-2 lg:pt-0">
          {/* clock tab */}
          {/* Left Column: Hero & Timer - Scaled Down */}
          <div className="w-full lg:max-w-[420px] flex flex-col items-center lg:pl-20 lg:pt-25 flex-shrink-0 relative" >
            
            {/* Subject Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-2"
            >
              <div className={`w-2 h-2 rounded-full ${timeOfDay === 'morning' ? 'bg-red-500' : 'bg-green-500'}`} 
                   style={{ boxShadow: `0 0 10px ${timeOfDay === 'morning' ? '#ef4444' : '#22c55e'}` }} />
              <span className="text-[14px] font-normal tracking-[0.2em] text-white/50 uppercase font-sans">Organic Chemistry</span>
            </motion.div>

            {/* Fixed-Size Semicircle Arc Hero - Extra Large Scale (Slightly Increased) */}
            <div className="relative w-[512px] h-[256px] sm:w-[640px] sm:h-[320px] flex items-end justify-center mb-2 flex-shrink-0">
              <svg 
                viewBox="0 0 640 320" 
                className="absolute top-0 w-full h-full overflow-visible pointer-events-none"
              >
                <defs>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={theme.color} stopOpacity="0" />
                    <stop offset="20%" stopColor={theme.color} stopOpacity="1" />
                    <stop offset="80%" stopColor={theme.color} stopOpacity="1" />
                    <stop offset="100%" stopColor={theme.color} stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="5%" stopColor="white" stopOpacity="0" />
                    <stop offset="30%" stopColor="white" stopOpacity="0.5" />
                    <stop offset="70%" stopColor="white" stopOpacity="0.5" />
                    <stop offset="95%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Outer Glow Path - 5 Layer Ultra Bloom */}
                <motion.path
                  key={`${timeOfDay}-glow`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 50,320 A 270,270 0 0 1 590,320"
                  fill="none"
                  stroke="url(#arcGradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  style={{
                    filter: `
                      drop-shadow(0 0 5px ${theme.color})
                      drop-shadow(0 0 10px ${theme.color})
                      drop-shadow(0 0 20px ${theme.glow})
                      drop-shadow(0 0 30px ${theme.glow})  
                    `
                  }}
                />

                {/* Inner White Core Path */}
                <motion.path
                  key={`${timeOfDay}-core`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 50,320 A 270,270 0 0 1 590,320"
                  fill="none"
                  stroke="url(#whiteGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  style={{
                    filter: `blur(50px) drop-shadow(0 0 100px #fff)`
                  }}
                />
{/* Thick White Blurred Line Inside the color line */}
<motion.path
  key={`${timeOfDay}-thick-white`}
  initial={{ pathLength: 0, opacity: 0 }}
  animate={{ pathLength: 1, opacity: 0.6 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
  d="M 50,320 A 270,270 0 0 1 590,320"
  fill="none"
  stroke="url(#whiteGradient)"
  strokeWidth="15"
  strokeLinecap="round"
  style={{
    filter: "blur(8px)",
  }}
/>
              </svg>

                  {/* Timer Display - Balanced Scale */}
                  <div className="relative z-20 flex items-baseline gap-1.5 font-medium tracking-tighter pb-11">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl sm:text-6xl font-semibold font-jakarta">05</span>
                  <span className="text-[10px] sm:text-[12px] text-white/40 font-medium uppercase">hr</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full mb-5 sm:mb-6" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl  sm:text-6xl font-semibold font-jakarta">00</span>
                  <span className="text-[10px] sm:text-[12px] text-white/40 font-medium uppercase">min</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full mb-5 sm:mb-6" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl sm:text-6xl font-semibold font-jakarta">00</span>
                  <span className="text-[10px] sm:text-[12px] text-white/40 font-medium uppercase">sec</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-[270px] sm:max-w-[330px] h-1.5 bg-white/5 rounded-full relative overflow-hidden border border-white/5 z-20 mb-6 flex-shrink-0 -mt-8">
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
            <div className="flex items-center gap-8 mb-5 flex-shrink-0">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/70" />
              <span className="text-[14px] sm:text-[16px] font-medium text-white/60 whitespace-nowrap tracking-wider">
                Todays topics to be covered
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/70" />
            </div>

            <div className="">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/[0.02] rounded-full blur-[60px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col min-h-0 h-full">
                {/* Scrollable Topics Area */}
                <div className="relative flex-1 min-h-0 overflow-hidden group/list">
                  <div className="space-y-1.5 h-full overflow-y-auto pl-2 pr-2 custom-scrollbar relative z-10 pt-4 pb-2">
                    {TOPICS.map((topic) => (
                      <TopicCard key={topic.id} topic={topic} />
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Area - Compact */}
                <div className="mt-auto flex flex-col items-center gap-4 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-white/90" />
                    <span className="text-[9px] sm:text-[10px] font-medium text-white/90 tracking-widest">
                      28 students declared their plan today
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-55 py-2.5 rounded-[1rem] border-2 border-white/100 relative overflow-hidden transition-all duration-300 shadow-xl"
                    style={{ 
                      background: `linear-gradient(to top right, rgba(0,0,0,0.6) 0%, transparent 60%), linear-gradient(to bottom, ${theme.color}, ${theme.color}CC)`,
                      boxShadow: `
                        inset 0 1px 0 rgba(255, 255, 255, 0.3),
                        0 12px 24px -8px ${theme.glow}
                      `
                    }}
                  >
                    <span className="relative z-10 bg-gradient-to-b from-white via-white/100 to-white/100 bg-clip-text text-transparent text-xl font-bold tracking-tight">
                      Start plan
                    </span>
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
