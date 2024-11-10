import Link from 'next/link';
import { Timer, Button } from '@/components';
import { OrderItemProps } from '@/types';

import styles from './OrderItem.module.css';


export default function OrderItem({
  name,
  user,
  price,
  timestamp,
  minutes,
  event,
  buttonText
}: OrderItemProps) {
  const stopTime = minutes * 60 * 1000 + timestamp;

  return (
    <div className={`${styles.wrapper} ${styles.odd}`}>
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
        <Timer stop={stopTime} />
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
