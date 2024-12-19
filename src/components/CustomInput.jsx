import React from 'react';

const CustomInput = ({ 
  placeholder, 
  value, 
  onChange, 
  type = "text",
  icon: Icon = null,  // Optional icon component
  className = "" 
}) => {
  return (
    <div className="relative w-full">
      <div
        className={`
          w-full px-6 py-4 flex items-center
          rounded-full text-left border border-indigo-600 border-opacity-50
          text-white ${className}
        `}
        style={{
          background: 'linear-gradient(165deg, rgba(26,27,61,0.7) 0%, rgba(26,27,61,0.4) 100%)',
        }}
      >
        {/* Input field */}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none placeholder:text-white/70"
        />
        
        {/* Optional icon */}
        {Icon && (
          <div className="flex items-center ml-2 text-gray-400">
            <Icon size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;