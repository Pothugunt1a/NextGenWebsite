interface AnimatedBackgroundProps {
  variant?: 'default' | 'hero' | 'section';
  className?: string;
}

export default function AnimatedBackground({ 
  variant = 'default',
  className = '' 
}: AnimatedBackgroundProps) {
  const isHero = variant === 'hero';
  
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1419]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-slower"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      
      {isHero && (
        <>
          {/* Additional orbs for hero sections */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-particle-1"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-particle-2"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-particle-3"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-particle-4"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-particle-1"></div>
          <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-purple-300 rounded-full animate-particle-2"></div>
        </>
      )}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
    </div>
  );
}
