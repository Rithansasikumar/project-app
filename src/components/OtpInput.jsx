import React, { useRef, useState } from 'react';

const OtpInput = ({ length = 4, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Only take the last character if multiple characters are pasted
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Check if OTP is complete
    if (newOtp.join("").length === length) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length).split("");
    const newOtp = [...otp];

    pastedData.forEach((value, index) => {
      if (index < length && !isNaN(value)) {
        newOtp[index] = value;
        inputRefs.current[index].value = value;
      }
    });

    setOtp(newOtp);
    if (pastedData.length === length) {
      onComplete?.(newOtp.join(""));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
      <div className="w-full px-6 py-4 flex items-center justify-between
        rounded-full text-left bg-[#F800C0]/10 backdrop-blur-sm      
        border border-rose-500 border-opacity-50 text-white">
        <p>
          Check Your Email Get Verification Code If Not
        </p>
        <button className="ml-2 text-[#F800C0] hover:opacity-80">
          Resend
        </button>
      </div>

      <div className="flex gap-3 mt-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-14 h-14 text-center text-[#F800C0] text-xl font-semibold 
                     bg-[#F800C0]/10 border border-[#F800C0]/30 rounded-full
                     focus:outline-none focus:border-[#F800C0]
                     transition-colors duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;