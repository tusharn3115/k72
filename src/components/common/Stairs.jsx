import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    // Prevent scroll by hiding body overflow during animation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = originalOverflow; // Restore scroll
      },
      onReverseComplete: () => {
        document.body.style.overflow = originalOverflow; // Restore scroll if needed
      }
    });

    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });

    return () => {
      // Always restore original overflow on cleanup
      document.body.style.overflow = originalOverflow;
    };
  }, [currentPath]);

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-20 top-0 left-0 overflow-hidden"
        style={{ overscrollBehavior: "none" }}
      >
        <div className="flex h-full w-full">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
