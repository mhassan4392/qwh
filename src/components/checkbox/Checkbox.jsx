import { useRef } from "react";

const Checkbox = ({ value = false, onChange = () => {} }) => {
  // referenct for hidden input
  const input = useRef(null);

  return (
    <>
      {/* hidden input */}
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={(e) => onChange(!value)}
        ref={input}
      />

      {/* designed input */}
      <div
        onClick={() => input.current?.click()}
        className={`w-7 h-4 rounded-full relative flex items-center transition-all duration-500 cursor-pointer ${
          value ? "bg-[#4080ff]" : "bg-light"
        }`}
      >
        <div
          className={`rounded-full w-3 h-3 absolute transition-all duration-500 ${
            value ? "bg-white right-0.5" : "bg-white left-0.5"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Checkbox;
