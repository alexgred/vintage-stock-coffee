'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Timer, Button, SendForm } from '@/components';
import { OrderItemProps, OrderStatus } from '@/types';

import styles from './OrderItem.module.css';

export default function OrderItem({
  order: { name, userId, user, price, timestamp, minutes, spot, done },
  event,
  remove,
  index,
}: OrderItemProps) {
  const [status, setStatus] = useState<OrderStatus>('active');
  const [showForm, setShowForm] = useState<boolean>(false);

  let stopTime = 0;
  if (minutes !== 0) {
    stopTime = minutes * 60 * 1000 + timestamp - Date.now();
  }

  const classStatus =
    status === 'expired'
      ? styles.expired
      : status === 'burning'
      ? styles.burning
      : status === 'spot'
      ? styles.spot
      : '';
  const classParity = ++index % 2 === 0 ? styles.even : styles.odd;

  return (
    <div
      className={`${styles.wrapper} ${classParity} ${
        !done ? classStatus : ''
      }`}>
      <div className={styles.item}>{name}</div>
      <div className={styles.item}>{spot ? 'На месте' : 'С собой'}</div>
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
      {showForm && (
        <div className={styles.form}>
          <SendForm userId={userId} closeForm={() => setShowForm(false)} />
        </div>
      )}
      <div className={styles.item}>
        <Button onClick={remove}>Удалить</Button>
      </div>
    </div>
  );
}
