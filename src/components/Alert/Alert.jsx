import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ error, type = "error", open, className, ...rest }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`py-2 px-3 text-center rounded text-white bg-opacity-80 ${(type =
            "error" ? "bg-primary" : "bg-secondary")} ${
            className ? className : ""
          }`}
          {...rest}
        >
          {typeof error == "string" ? error : ""}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
