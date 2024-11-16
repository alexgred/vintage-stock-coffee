'use client';

import styles from "./Timer.module.css";
import { useRenderCounter, useTimer } from '@/app/hooks';
import { OrderStatus } from "@/types";

export default function Timer({stop, status}: {stop:number, status: (props: OrderStatus) => void}) {
  const stopTime = stop - Date.now();
  const time = useTimer(stopTime);

  const render = useRenderCounter();

  const expired = time < 0;
  if (expired) {
    status('expired');
  } else if (time < 5 * 60 * 1000) {
    status('burning');
  }

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
      -{render}
    </div>
  );
}
