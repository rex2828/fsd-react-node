import React from 'react';
import styles from "../css/Page404.module.css";

const Page404 = () => {
  return (
    <div className={styles.mainBox}>
      <h1 className={styles.errorLine}>Error 404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default Page404;