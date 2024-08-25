import React from 'react';
import { motion } from 'framer-motion';

export default function MotionWrap({ children, ...props }){
    return (
        <motion.div
            {...props}
        >
            {children}
        </motion.div>
    );
};