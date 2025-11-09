import React from "react";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <div className="font-[lausBold] flex items-center justify-center gap-2">
      <Link to="/projects" className="text-[5.5vw] leading-[6vw] border-3 border-white rounded-full uppercase px-10 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-200">
        Projects
      </Link>
      <Link to="/agence" className="text-[5.5vw] leading-[6vw] border-3 border-white rounded-full uppercase px-10 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-200">
        Agence
      </Link>
    </div>
  );
};

export default HomeBtn;
