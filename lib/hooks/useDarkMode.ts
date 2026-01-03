"use client";

import { useEffect, useState } from "react";

export type DarkMode = true | false;

export function useDarkMode(): DarkMode {
  const getIsAfter6PM = () => new Date().getHours() >= 18;
  const [isDarkMode, setDarkMode] = useState(getIsAfter6PM());

  useEffect(() => {
    const interval = setInterval(() => {
      setDarkMode(getIsAfter6PM());
    }, 60_000); // check every minute

    return () => clearInterval(interval);
  }, [isDarkMode]);

  return isDarkMode;
}
