import { motion } from "framer-motion";

// Defining animation variants for the page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

// Defining the transition properties for the animations
const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

// PageWrapper component to wrap child components with animations
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
