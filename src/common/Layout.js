import { Navbar } from "./shared";
import Particles from "react-tsparticles";
import { options } from './optons';

const Layout = ({ children }) => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="h-screen">
      <Particles
        {...{
          id: "tsparticles",
          init: particlesInit,
          loaded: particlesLoaded,
          options
        }}
      />
      {children}
      <div className="fixed right-5 flex item-center -top-8 z-50 translate-y-1/2">
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
