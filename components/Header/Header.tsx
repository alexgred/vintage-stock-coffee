import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>Vintage Stock</div>
    </header>
  );
}
