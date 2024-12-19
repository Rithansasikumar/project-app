import { Facebook } from "@mui/icons-material";
import { Linkedin, SendHorizontal, Youtube } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <div className="relative min-h-fit overflow-hidden">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center w-full gap-8 pt-10">
          <div className="text-center text-white mb-48 space-y-4">
            <p className="text-5xl font-bold tracking-wide">
              FREDO HELPS YOU FIND,
            </p>
            <p className="text-5xl font-bold tracking-wide">
              ANYTHING TO EVERYTHING!
            </p>
          </div>

          <svg className="absolute w-0 h-0">
            <defs>
              <clipPath id="searchBarCurve" clipPathUnits="objectBoundingBox">
                <path
                  d="
        M0.5,0.65
        C0.452,0.65,0.405,-0.02,0.357,-0.02
        H0.062
        C0.028,-0.02,0,0.224,0,0.499
        C0,0.774,0.028,1.02,0.062,1.02
        H0.948
        C0.987,1.3,1,0.876,1.20,0.390
        C1,0.224,0.972,-0.02,0.938,-0.02
        H0.643
        C0.595,-0.02,0.548,0.65,0.5,0.65
        Z
      "
                />
              </clipPath>
            </defs>
          </svg>

          <div className="relative w-full max-w-5xl px-4">
            <div className="absolute left-1/2 -top-14 transform -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-r p-[2px] z-10">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <img
                  src="/Images/Artboard.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="flex items-center border-2 border-[#FE8A70] justify-between px-6 py-8 bg-white/10 rounded-full backdrop-blur-md shadow-lg mb-44"
              style={{
                clipPath: "url(#searchBarCurve)",
              }}
            >
              <div className="flex items-center">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-base font-normal text-white/90">
                    Category
                  </span>
                  <span
                    className="text-sm text-transparent bg-clip-text ml-2 mr-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(0, #F800C0 0%, #FE8A70 100%)",
                      transform: "scaleY(0.7)",
                    }}
                  >
                    ▼
                  </span>
                </div>

                <div
                  className="h-6 w-[1px] bg-[#6757FF]/40 mx-4"
                  style={{
                    background: "linear-gradient(0, #7670FF 0%, #5B42FF 100%)",
                  }}
                ></div>

                <input
                  type="text"
                  placeholder="Search here...."
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-base font-light tracking-wide"
                />
              </div>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: "linear-gradient(0deg, #F800C0 0%, #FE8A70 100%)",
                  boxShadow: "0 4px 15px rgba(248, 0, 192, 0.3)",
                }}
              >
                <SendHorizontal size={24} color="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
      <footer className="fixed bottom-0 w-full py-4 px-6 border-t border-[#FE8A70]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/60 text-sm">
            © 2024. Copyright myfinder.ai / All Rights Reserved.
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-4">
            <a href="#" className="text-white/60 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white">
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs">
                x
              </div>
            </a>
            <a href="#" className="text-white/60 hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="text-white/60 hover:text-white">
              {/* <Instagram /> */}
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              About MyFinder
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Help Center
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HeroSection;
