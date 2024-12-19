import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const CustomDropdown = ({
  placeholder,
  options,
  value,
  onChange,
  type = "default",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  console.log(value);

  const handleRemove = (option) => {
    // Remove selected value when '-' is clicked
    const newValue = value?.filter((item) => item !== option);
    onChange(newValue);
  };

  const handleSelect = (option) => {
    if (type === "default") {
      onChange(option);
      setIsOpen(false);
    } else if (type === "category") {
      onChange((prev) =>
        prev.map((item) => item.value).includes(option.value)
          ? prev.filter((item) => item !== option.value)
          : [...prev, option]
      );
    }
  };

  console.log(value);

  return (
    <div className="relative w-full">
      {/* Main Button */}
      <div
        onClick={toggleDropdown}
        className={`
          w-full px-6 py-4 flex sm:flex-row flex-col items-center justify-between
          rounded-full text-left border border-indigo-600 border-opacity-50
          text-white
        `}
        style={{
          background:
            "linear-gradient(165deg, rgba(26,27,61,0.7) 0%, rgba(26,27,61,0.4) 100%)",
        }}
      >
        <div>{placeholder}</div>
        <div className="flex items-center gap-2 text-[#FF3B9D] justify-between">
          <div>
            {type === "default"
              ? ` ${value?.label ? value?.label : ""}  ${
                  value?.label && "(-)"
                } `
              : value.length > 0
              ? `(${value
                  .map((item) => ` ${item?.label}   ${item?.label && "(-)"} `)
                  .join(", ")})  `
              : ""}
          </div>
          <ChevronDown
            size={20}
            className={`text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute w-full mt-2 py-2 bg-[#F800C0]/10 backdrop-blur-sm rounded-xl shadow-lg z-50 border border-rose-500 border-opacity-30">
          {type === "default" ? (
            // Default dropdown options
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={`
                    w-full px-6 py-3 text-left hover:text-[#FF3B9D] transition-colors font-semibold
                    ${
                      value?.value === option.value
                        ? "text-[#FF3B9D]"
                        : "text-white"
                    }
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : (
            // Category grid layout
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 p-4">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={`
                    flex items-center gap-1 px-3 py-2 rounded-full text-sm
                    ${
                      value.map((item) => item.value).includes(option.value)
                        ? "text-[#FF3B9D]"
                        : "text-white"
                    }
                  `}
                >
                  {option.label}
                  <Plus size={14} />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
