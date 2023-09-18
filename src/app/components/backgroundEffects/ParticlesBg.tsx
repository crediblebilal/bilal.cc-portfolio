import Particles from "react-tsparticles";

import particlesConfig from "./config/particles-config";

import { loadFull } from "tsparticles";
interface ParticlesBgProps {
  type: string;
}

export default function ParticlesBg() {

  const particlesInit = async (main: any) => {

    await loadFull(main);
  };

  const particlesLoaded: any = (container: any) => {
  };

  return (
    <Particles
      params={particlesConfig}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}

      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150, // for links
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "star",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );

}