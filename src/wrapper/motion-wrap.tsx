import React from "react";
import { motion } from "framer-motion";

type MotionWrapProps = React.ComponentProps<typeof motion.div>;

export default function MotionWrap({ children, ...props }: MotionWrapProps) {
  return <motion.div {...props}>{children}</motion.div>;
}
