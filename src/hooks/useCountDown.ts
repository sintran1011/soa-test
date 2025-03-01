"use client";
import { useRef, useState } from "react";

interface IProps {
  duration?: number;
  autoStart?: boolean;
}

export const useCountDown = (props: IProps) => {
  const { duration = 60 } = props;
  const [time, setTime] = useState<number>(duration);
  const timing = useRef<number>(0);
  const handleResend = () => {
    const downloadTimer = setInterval(function () {
      if (timing.current == duration) {
        clearInterval(downloadTimer);
        setTime(0);
        timing.current = 0;
        return;
      }
      const count = duration - timing.current;
      timing.current += 1;
      setTime(count);
    }, 1000);
  };

  return { time, handleResend };
};
