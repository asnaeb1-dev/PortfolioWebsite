import { useEffect, useRef } from "react";
import MyPhoto from "../../../assets/mypic.png";
import Typed from "typed.js";
import { WelcomeMessages } from "../../../data/strings";
const MyImage = () => {
  const talkingElementRef = useRef();
  useEffect(() => {
    if (!talkingElementRef.current) return;
    const typed = new Typed(talkingElementRef.current, {
      strings: WelcomeMessages,
      typeSpeed: 50,
      backSpeed: 30,
      smartBackspace: false,
      backDelay: 1000,
      loop: true,
      startDelay: 20,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <img
        alt={"my picture"}
        src={MyPhoto}
        className="w-full sm:w-3/4 lg:w-3/4 xl:w-full 2xl:w-4/5 absolute transition-[width] object-contain"
      />
      <span className="top-10 left-[65%] md:left-[62%] lg:top-[20%] xl:top-[10%] xl:left-[65%] 2xl:top-[15%] 3xl:top-[10%] 3xl:left-[62%] sm:text-sm absolute text-[12px] lg:font-bold text-white p-2 bg-indigo-400 rounded-bl-none rounded-xl max-w-96 min-w-7">
        <h1 ref={talkingElementRef}>Hello</h1>
      </span>
    </>
  );
};

export default MyImage;
