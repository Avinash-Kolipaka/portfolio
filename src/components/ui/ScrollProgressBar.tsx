"use client";

import { useScroll, motion } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent z-[60]"
            style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />
    );
}
