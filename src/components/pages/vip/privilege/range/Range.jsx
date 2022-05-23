import "./index.css";

const Range = ({
  value = 0,
  onChange = () => {},
  min = 0,
  max = 100,
  className = "",
}) => {
  return (
    <input
      style={{
        background: `linear-gradient(to right, #ee3939 0%, #ee3939 ${value}%, white ${value}%, white 100%`,
      }}
      type="range"
      name=""
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`range-slider w-full ${className}`.trim()}
      id="mySlider"
    />
  );
};

export default Range;
