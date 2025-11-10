const NeonLine = ({ className = "" }) => {
    return (
      <div className={`h-px bg-gradient-to-r from-transparent via-red-700 to-transparent ${className}`}
        style={{
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
        }}
      />
    );
};

export default NeonLine