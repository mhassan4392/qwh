import Picker from "react-mobile-picker";
import "./Pick.scss";
const Pick = ({
  open,
  toggle = () => {},
  onChange = () => {},
  options = {},
  values = {},
  text = "",
  buttonText = "OK",
}) => {
  const maskStyle = {
    display: open ? "block" : "none",
  };
  const pickerModalClass = `picker-modal${open ? " picker-modal-toggle" : ""}`;

  return (
    <div className="example-container">
      <div className="picker-modal-container">
        <div
          className="picker-modal-mask"
          style={maskStyle}
          onClick={toggle}
        ></div>
        <div className={pickerModalClass}>
          <header className="flex items-center justify-between">
            <div className="text-secondary" onClick={toggle}>
              {buttonText}
            </div>
            <div className="text-secondary">{text}</div>
          </header>
          <Picker
            optionGroups={options}
            valueGroups={values}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Pick;
