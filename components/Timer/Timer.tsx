'use client';

import styles from "./Timer.module.css";
import { useTimer } from '@/hooks';
import { OrderStatus } from "@/types";

export default function Timer({stopTime, status}: {stopTime:number, status: (props: OrderStatus) => void}) {
  const time = useTimer(stopTime);

  if (stopTime === 0) {
    status('spot');

    return (
      <div className={styles.timer}>
        В магазине
      </div>
    );
  } else {
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
        {expired ? 'Истек' : `${minutes}:${seconds}`}
      </div>
    );
  }
}
