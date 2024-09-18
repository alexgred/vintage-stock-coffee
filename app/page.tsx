// import getOrders from '@/actions/getOrders';

import styles from "./page.module.css";
import { Orders } from '@/components';

export const revalidate = 15;

export default async function Home() {
  // const data = await getOrders();

  const data = await fetch(`http://localhost:3001/api`).then((res) => res.json());

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Orders data={data?.orders} />
      </main>
    </div>
  );
}
