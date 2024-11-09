import Link from 'next/link';
import Button from '../Button';
import { OrderItemProps } from '@/types';

import styles from './OrderItem.module.css';


export default function OrderItem({ name, user, price, event, buttonText }: OrderItemProps) {
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
      <div className={styles.item}>{price}</div>
      <div className={styles.item}>
        <Button name="Done" onClick={event}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
