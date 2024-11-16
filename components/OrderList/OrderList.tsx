'use client';

import { fetcher } from '@/lib/fetcher';
import useSWR from 'swr';
import { OrderItem } from '@/components';
import { Order } from '@/types';

import styles from './OrderList.module.css';
import { ReactNode} from 'react';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function OrderList() {
  const { data, error, isLoading, mutate } = useSWR<any, Error>(
    '/api/orders',
    fetcher,
    {
      refreshInterval: 1000 * 60,
    },
  );
  const orders: Order[] = data?.orders;

  async function eventDelete(index: number) {
    mutate(
      fetcher('/api/orders/delete', {
        method: 'DELETE',
        body: JSON.stringify({ index: index }),
      }),
    );
  }

  async function eventDone(index: number) {
    mutate(
      fetcher('/api/orders/done', {
        method: 'POST',
        body: JSON.stringify({ index: index }),
      }),
    );
  }

  if (error) return <div className="container">Failed to load</div>;
  if (isLoading) return <div className="container">Loading...</div>;

  const listDone: ReactNode[] = [];
  const listInProgress: ReactNode[] = [];
  orders?.forEach((order: Order, index: number) => {
    if (order.done) {
      listDone.push(
        <OrderItem
          key={order.id}
          name={order.name}
          user={order.user}
          price={order.price}
          timestamp={order.timestamp}
          minutes={order.minutes}
          event={() => eventDelete(index)}
          buttonText="Оплачено"
          index={index}
        />,
      );
    } else {
      listInProgress.push(
        <OrderItem
          key={order.id}
          name={order.name}
          user={order.user}
          price={order.price}
          timestamp={order.timestamp}
          minutes={order.minutes}
          event={() => eventDone(index)}
          buttonText="Готово"
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
