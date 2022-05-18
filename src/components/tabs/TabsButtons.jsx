const TabsButtons = ({ children, className, ...rest }) => {
  return (
    <div className={`${className ? className : ""}`} {...rest}>
      {children}
    </div>
  );
};

export default TabsButtons;
