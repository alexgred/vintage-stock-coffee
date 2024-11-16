'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Timer, Button, SendForm } from '@/components';
import { OrderItemProps, OrderStatus } from '@/types';

import styles from './OrderItem.module.css';

export default function OrderItem({
  order: { name, user, price, timestamp, minutes, done },
  event,
  index,
}: OrderItemProps) {
  const [status, setStatus] = useState<OrderStatus>('active');
  const [showForm, setShowForm] = useState<boolean>(false);

  const stopTime = minutes * 60 * 1000 + timestamp - Date.now();

  const classStatus =
    status === 'expired'
      ? styles.expired
      : status === 'burning'
      ? styles.burning
      : '';
  const classParity = ++index % 2 === 0 ? styles.even : styles.odd;

  return (
    <div
      className={`${styles.wrapper} ${classParity} ${
        !done ? classStatus : ''
      }`}>
      <div className={styles.item}>{name}</div>
      <div className={styles.item}>
        {user ? (
          <Link href={`https://t.me/${user}`}>@{user}</Link>
        ) : (
          'name is empty'
        )}
      </div>
      <div className={styles.item}>{price}</div>
      {!done && (
        <div className={styles.item}>
          <Timer stopTime={stopTime} status={(props) => setStatus(props)} />
        </div>
      )}
      <div className={styles.item}>{minutes}</div>
      <div className={styles.item}>
        <Button name={done ? 'Delete' : 'Done'} onClick={event}>
          {done ? 'Оплачено' : 'Готово'}
        </Button>
      </div>
      <div className={styles.item}>
        <Button name="Show form" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Скрыть' : 'Написать'}
        </Button>
      </div>
      {showForm && <div className={styles.form}><SendForm /></div>}
    </div>
  );
}
