import React from "react";
import Video from "./Video";

const HomeMainText = () => {
  return (
    <div className="font-[lausLight] pt-5 text-center">
      <div className="text-[10vw] uppercase leading-[9vw] flex items-center justify-center">L'étincelle</div>
      <div className="text-[10vw] uppercase leading-[9vw] flex items-center justify-center">
        qui{" "}
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-5">
          <Video />
        </div>{" "}
        génère
      </div>
      <div className="text-[10vw] uppercase leading-[9vw] flex items-center justify-center">la créativité</div>
    </div>
  );
};

export default HomeMainText;
