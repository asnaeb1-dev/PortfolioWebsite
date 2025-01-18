import React, { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { useTheme } from "../../../data/Context/ThemeContext";
const BackgroundParticles = () => {
  const [init, setInit] = useState(false);
  const { isDarkModeEnabled } = useTheme();
  const [styles, setStyles] = useState({
    blobColor: "rgb(99, 102, 241)",
    lineColor: "rgb(99, 102, 241)",
    bgColor: "rgb(255, 255, 255)",
  });
  useEffect(() => {
    if (isDarkModeEnabled) {
      setStyles({
        blobColor: "rgb(150, 120, 255)",
        lineColor: "rgb(150, 120, 255)",
        bgColor: "#1a1a1a",
      });
    } else {
      setStyles({
        blobColor: "rgb(99, 102, 241)",
        lineColor: "rgb(99, 102, 241)",
        bgColor: "rgb(255, 255, 255)",
      });
    }
  }, [isDarkModeEnabled]);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, [isDarkModeEnabled]);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: `${styles.bgColor}`,
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10000,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: `${styles.blobColor}`,
        },
        links: {
          color: `${styles.lineColor}`,
          distance: 150,
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
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 180,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className=" absolute z-[-1] h-[calc(100%_-_80px)] ">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};

export default BackgroundParticles;
