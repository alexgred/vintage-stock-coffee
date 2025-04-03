'use client';

import { ReactNode } from 'react';
import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';
import { OrderItem } from '@/components';
import { Order, OrderData } from '@/types';

import styles from './OrderList.module.css';


export default function OrderList() {
  const { data, error, isLoading, mutate } = useSWR<OrderData, Error>(
    '/api/orders',
    fetcher,
    {
      refreshInterval: 1000 * 60,
    },
  );
  const orders = data?.orders;

  async function eventDelete(index: number) {
    mutate(
      fetcher('/api/orders/delete', {
        method: 'DELETE',
        body: JSON.stringify({ index: index }),
      }),
    );
  }

  async function eventDone(index: number, userId: number) {
    mutate(
      fetcher('/api/orders/done', {
        method: 'POST',
        body: JSON.stringify({ index: index, userId: userId }),
      }),
    );
  }

  if (error) return <div className="container">Failed to load<br />{error.message}</div>;
  if (isLoading) return <div className="container">Loading...</div>;

  const listDone: ReactNode[] = [];
  const listInProgress: ReactNode[] = [];
  orders?.forEach((order: Order, index: number) => {
    if (order.done) {
      listDone.push(
        <OrderItem
          key={order.id}
          order={order}
          event={() => eventDelete(index)}
          remove={() => eventDelete(index)}
          index={index}
        />,
      );
    } else {
      listInProgress.push(
        <OrderItem
          key={order.id}
          order={order}
          event={() => eventDone(index, order.userId)}
          remove={() => eventDelete(index)}
          index={index}
        />,
      );
    }
  });

  return (
    <div className="container">
      <h2 className={styles.title}>В процессе</h2>
      <div className={styles.wrapper}>{listInProgress}</div>
      <h2 className={styles.title}>Выполнено</h2>
      <div className={styles.wrapper}>{listDone}</div>
    </div>
  );
}
