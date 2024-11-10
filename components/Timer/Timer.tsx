'use client';

import { useState, useEffect } from 'react';

import styles from "./Timer.module.css";

export default function Timer({stop}: {stop:number}) {
  const stopTime = stop - Date.now();
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

  const expired = time < 0;
  const countDown = new Date(time);
  const minutes =
    countDown.getMinutes() < 10
      ? `0${countDown.getMinutes()}`
      : `${countDown.getMinutes()}`;
  const seconds =
    countDown.getSeconds() < 10
      ? `0${countDown.getSeconds()}`
      : `${countDown.getSeconds()}`;

  return (
    <div className={styles.timer}>
      {expired ? 'Expired' : `${minutes}:${seconds}`}
    </div>
  );
}
