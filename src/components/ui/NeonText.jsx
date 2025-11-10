const NeonText = ({ children, className = "", style = {} }) => {
    return (
      <div 
        className={`font-mono tracking-wider ${className}`}
        style={{
          color: '#fff',
          textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)',
        }}
      >
        {children}
      </div>
    );
};

export default NeonText

