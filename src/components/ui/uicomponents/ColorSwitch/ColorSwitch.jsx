import { useState } from "react";

const ColorSwitch = () => {
  const [isHovering, setHovering] = useState();
  const [currentColor, setCurrentColor] = useState(0);

  return (
    <div
      onPointerUp={() => setHovering(!isHovering)}
      className={`rounded-full ${
        isHovering && " rounded-br-none"
      } w-6 h-6 bg-red-500 relative  cursor-pointer hover:scale-105 transition-transform`}
    >
      <div
        onPointerUp={(e) => e.stopPropagation()}
        className={`absolute w-0 opacity-0 ${
          isHovering && "w-44 opacity-100"
        } transition-all h-10 flex bg-white shadow-lg top-7 right-0 rounded-3xl rounded-tr-none  flex-row gap-2 items-center p-2 overflow-hidden`}
      >
        <span
          className={`w-6 h-6 bg-indigo-500 border-2 ${
            isHovering && "border-2 border-black"
          } rounded-full`}
        ></span>
        <span className={`w-6 h-6 bg-red-500 rounded-full`}></span>
        <span className={`w-6 h-6 bg-emerald-500 rounded-full`}></span>
        <span className={`w-6 h-6 bg-yellow-500 rounded-full`}></span>
        <span className={`w-6 h-6 bg-blue-500 rounded-full`}></span>
      </div>
    </div>
  );
};

export default ColorSwitch;
