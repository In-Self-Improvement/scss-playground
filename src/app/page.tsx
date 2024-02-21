'use client';

import Button from '@/components/button/Button';
import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button apple>계속</Button>
      </div>
    </main>
  );
};
export default Home;
