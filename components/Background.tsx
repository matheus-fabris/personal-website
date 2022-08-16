export default function Background() {
  return (
    <div className="bg">
      <div className="">
        <div className="tile top-left animate-opacity freq-5"></div>
        <div className="tile top-right animate-opacity freq-9"></div>
        <div className="tile bottom-left animate-opacity freq-7"></div>
        <div className="tile bottom-right animate-opacity freq-10"></div>
      </div>
      <div className="rotate-1">
        <div className="tile top-left animate-opacity freq-9 delay-2"></div>
        <div className="tile top-right animate-opacity freq-5 delay-2"></div>
        <div className="tile bottom-left animate-opacity freq-6 delay-4"></div>
        <div className="tile bottom-right animate-opacity freq-10 delay-4"></div>
      </div>
      <div className="rotate-2">
        <div className="tile top-left animate-opacity freq-7 delay-2"></div>
        <div className="tile top-right animate-opacity freq-5 delay-4"></div>
        <div className="tile bottom-left animate-opacity freq-9 delay-2"></div>
        <div className="tile bottom-right animate-opacity freq-5 delay"></div>
      </div>
    </div>
  );
}
