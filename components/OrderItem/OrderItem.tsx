import Button from '../Button';

import styles from './OrderItem.module.css';

export default function OrderItem({ name, user, price, event, buttonText }: OrderItemProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>{name}</div>
      <div className={styles.item}>{user}</div>
      <div className={styles.item}>{price}</div>
      <div className={styles.item}>
        <Button name="Done" onClick={event}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
