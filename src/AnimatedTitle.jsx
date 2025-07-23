import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function AnimatedTitle({ text, className }) {
  return (
    <motion.h1
      className={className}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}