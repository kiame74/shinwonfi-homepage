"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};
