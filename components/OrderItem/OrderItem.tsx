'use client';

import Link from 'next/link';
import Button from '../Button';
import { OrderItemProps } from '@/types';
import { useState, useEffect } from 'react';

import styles from './OrderItem.module.css';

export default function OrderItem({
  name,
  user,
  price,
  timestamp,
  minutes,
  event,
  buttonText,
}: OrderItemProps) {
  const stopTime = minutes * 60 * 1000 + timestamp;
  const [time, setTime] = useState<number>(stopTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = time - Date.now();

      setTime((newTime) => newTime - 1000);

      if (timeLeft < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const countDown = new Date(time);

  const minutesLeft =
    countDown.getMinutes() < 10
      ? `0${countDown.getMinutes()}`
      : `${countDown.getMinutes()}`;
  const secondsLeft =
    countDown.getSeconds() < 10
      ? `0${countDown.getSeconds()}`
      : `${countDown.getSeconds()}`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>{name}</div>
      <div className={styles.item}>
        {user ? (
          <Link href={`https://t.me/${user}`}>@{user}</Link>
        ) : (
          'name is empty'
        )}
      </div>
      <div className={styles.item}>{price}</div>
      <div className={styles.item}>{`${minutesLeft}:${secondsLeft}`}</div>
      <div className={styles.item}>{minutes}</div>
      <div className={styles.item}>
        <Button name="Done" onClick={event}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
