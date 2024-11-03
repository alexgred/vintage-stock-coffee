import styles from "./page.module.css";
import { OrderList } from '@/components';

export default async function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <OrderList />
      </main>
    </div>
  );
}
