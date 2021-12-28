import { Navbar } from "./shared";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
// import Particles from "react-tsparticles";
// import { options } from './optons';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  // const particlesInit = (main) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    <div className="lg:h-screen h-full scrollbar-hide">
      {/* <Particles
        {...{
          id: "tsparticles",
          init: particlesInit,
          loaded: particlesLoaded,
          options
        }}
      /> */}
      {children}
      <div className={`fixed right-5 lg:-top-8 ${ showMenu ? '-top-48' : 'top-2' } z-50 translate-y-1/2`}>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="h-12 w-12 rounded-full cursor-pointer flex items-center justify-center bg-gray-700 text-white mb-3 lg:hidden"
        >
          {showMenu ? (
            <XIcon className="text-white h-5 w-5" />
          ) : (
            <MenuIcon className="text-white h-5 w-5" />
          )}
        </div>
        <div
          className={`flex item-center justify-center ${
            showMenu ? "" : "hidden lg:block"
          }`}
        >
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
