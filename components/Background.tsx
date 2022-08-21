import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    "use strict";
    const z1 = document.getElementById("parallax-1")!;
    const z2 = document.getElementById("parallax-2")!;
    const z3 = document.getElementById("parallax-3")!;

    const ratio = 0.025;
    let x: number;
    let y: number;

    const setXY = (e: MouseEvent) => {
      x = e.pageX;
      y = e.pageY;
    };

    document.removeEventListener("mousemove", setXY);
    document.addEventListener("mousemove", setXY);

    requestAnimationFrame(function animation() {
      z1.style.transform = "translate(" + x * ratio + "px," + y * ratio + "px)";

      z2.style.transform =
        "translate(" +
        (x * ratio) / 2 +
        "px," +
        (y * ratio) / 2 +
        "px) rotate(217deg)";

      z3.style.transform =
        "translate(" +
        (x * ratio) / 3 +
        "px," +
        (y * ratio) / 3 +
        "px) rotate(71deg)";

      requestAnimationFrame(animation);
    });
  }, []);

  return (
    <div className="bg">
      <div id="parallax-1">
        <div className="tile top-left animate-opacity freq-5"></div>
        <div className="tile top-right animate-opacity freq-9"></div>
        <div className="tile bottom-left animate-opacity freq-7"></div>
        <div className="tile bottom-right animate-opacity freq-10"></div>
      </div>
      <div id="parallax-2">
        <div className="tile top-left animate-opacity freq-9 delay-2"></div>
        <div className="tile top-right animate-opacity freq-5 delay-2"></div>
        <div className="tile bottom-left animate-opacity freq-6 delay-4"></div>
        <div className="tile bottom-right animate-opacity freq-10 delay-4"></div>
      </div>
      <div id="parallax-3">
        <div className="tile top-left animate-opacity freq-7 delay-2"></div>
        <div className="tile top-right animate-opacity freq-5 delay-4"></div>
        <div className="tile bottom-left animate-opacity freq-9 delay-2"></div>
        <div className="tile bottom-right animate-opacity freq-5 delay"></div>
      </div>
    </div>
  );
}
