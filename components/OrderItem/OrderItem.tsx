'use client';

import Link from 'next/link';
import { Timer, Button } from '@/components';
import { OrderItemProps, OrderStatus } from '@/types';

import styles from './OrderItem.module.css';
import { useRenderCounter } from '@/app/hooks';
import { useState } from 'react';

export default function OrderItem({
  name,
  user,
  price,
  timestamp,
  minutes,
  event,
  buttonText,
  index,
}: OrderItemProps) {
  const [status, setStatus] = useState<OrderStatus>('active');
  const stopTime = minutes * 60 * 1000 + timestamp;

  const classStatus = status === 'expired' ? styles.expired : status === 'burning' ? styles.burning : '';
  const classParity = ++index % 2 === 0 ? styles.even : styles.odd;

  const render = useRenderCounter();

  return (
    <div className={`${styles.wrapper} ${classParity} ${classStatus}`}>
      <div className={styles.item}>{render}</div>
      <div className={styles.item}>{name}</div>
      <div className={styles.item}>
        {user ? (
          <Link href={`https://t.me/${user}`}>@{user}</Link>
        ) : (
          'name is empty'
        )}
      </div>
      <div className={styles.item}>{price}</div>
      <div className={styles.item}>
        <Timer stop={stopTime} status={(props) => setStatus(props)} />
      </div>
      <div className={styles.item}>{minutes}</div>
      <div className={styles.item}>
        <Button name="Done" onClick={event}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
