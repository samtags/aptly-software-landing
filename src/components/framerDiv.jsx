"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FramerDiv({
  children,
  animate,
  transition,
  initial,
  exit,
  matchMedia,
  ...rest
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(matchMedia);

    const update = (event) => setIsMobile(event.matches);
    setIsMobile(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, []);

  const motionProps = isMobile ? { animate, transition, initial, exit } : {};

  return (
    <motion.div {...rest} {...motionProps}>
      {children}
    </motion.div>
  );
}
