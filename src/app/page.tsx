'use client';

import { translate } from '@/utils/translate';
import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>{translate('test')}</div>
    </main>
  );
};
export default Home;
