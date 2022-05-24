import { useState, useEffect, useRef } from "react";

const FourDigitInput = ({ onChange = () => {} }) => {
  const [value, setValue] = useState("");

  const onKeyDown = (e) => {
    if (isFinite(e.key) && value.length < 4) {
      setValue(value.toString().concat(e.key.toString()));
      onChange(value.toString().concat(e.key.toString()));
    } else if (e.key == "Backspace" && value.length > 0 && value.length < 5) {
      setValue(value.toString().slice(0, -1));
      onChange(value.toString().slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [value]);

  return (
    <div className="flex items-center justify-between">
      {[...Array(4)].map((btn, i) => (
        <div
          className="w-10 h-10 border border-light flex items-center justify-center rounded-md"
          key={i}
        >
          {value[i]}
        </div>
      ))}
    </div>
  );
};

export default FourDigitInput;
