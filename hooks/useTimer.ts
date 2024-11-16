import { useEffect, useState } from "react";

export function useTimer(stopTime: number): number {
  const [time, setTime] = useState<number>(stopTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((newTime) => {
        if (time < 0) {
          clearInterval(interval);
          return -1;
        } else {
          return newTime - 1000;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return time;
}
