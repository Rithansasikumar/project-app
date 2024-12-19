import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    {
      name: "List & Sell",
      path: "/",
    },
    {
      name: "My Community",
      path: "/",
    },
    {
      name: "Influencer",
      path: "/",
    },
    {
      name: "Attractions",
      path: "/attractions",
    },
    {
      name: "How It Works?",
      path: "/",
      icon: "/Images/Play_Button.svg",
    },
  ];

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 md:p-12">
        {/* Logo */}
        <div>
          <img src="/Images/Logo.svg" className="h-8 md:h-14" alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mt-2 z-50 border-4 border-black">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between px-6 py-2 gap-6 border-2 border-[#5B42FF] rounded-full">
          {routes.map((route) => (
            <div
              key={route.name}
              onClick={() => navigate(route.path)}
              className="text-white flex items-center cursor-pointer"
            >
              {route?.icon && (
                <img src={route.icon} alt={`${route.name} icon`} />
              )}
              <span>{route.name}</span>
            </div>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex rounded-full border-2 min-h-14 border-[#5B42FF]">
          <button
            className="px-6 py-2 rounded-full text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
            style={{
              background: "linear-gradient(90deg, #7670FF 0%, #5B42FF 100%)",
            }}
            onClick={() => navigate("/registation")}
          >
            Sign In
          </button>
          <button
            className="px-6 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300"
            onClick={() => navigate("/registation")}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-20"
            onClick={() => setIsMenuOpen(false)} // Close menu when clicking on the overlay
          ></div>
          <div className="absolute top-0 left-0 right-0 z-30 border-indigo-600 border-opacity-50 md:hidden">
            <div className="flex flex-col mt-14">
              {/* Mobile Navigation Links */}
              {routes.map((route) => (
                <div
                  key={route.name}
                  className="text-white flex items-center p-4 py-3"
                >
                  {route?.icon && (
                    <img
                      src={route.icon}
                      alt={`${route.name} icon`}
                      className="mr-2"
                    />
                  )}
                  <span>{route.name}</span>
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex mt-4">
                <CustomButton
                  icon={false}
                  className="w-full rounded-se-none rounded-es-3xl rounded-ee-none rounded-ss-sm font-normal"
                >
                  Sign In
                </CustomButton>
                <CustomButton
                  icon={false}
                  className="w-full rounded-se-sm rounded-es-none rounded-ss-none rounded-ee-3xl font-normal"
                >
                  Sign In
                </CustomButton>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
