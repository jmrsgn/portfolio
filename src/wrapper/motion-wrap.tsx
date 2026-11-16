import React from "react";
import { motion } from "framer-motion";

type MotionWrapProps = React.ComponentProps<typeof motion.div>;

export default function MotionWrap({ children, ...motionProps }: MotionWrapProps) {
  return <motion.div {...motionProps}>{children}</motion.div>;
}
