import Link from 'next/link';
import { SiVk, SiTelegram } from '@icons-pack/react-simple-icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={`${styles.copyright}`}>© Vintage Stock 2024</div>
      <div className={`${styles.navigation}`}>
        <Link href="https://t.me/vintage_stock">
          <SiTelegram />
        </Link>
        <Link href="https://vk.com">
          <SiVk />
        </Link>
      </div>
    </footer>
  );
}
