import React from 'react';

import styles from './NotFoundStyle.module.scss';

function NotFoundBlog() {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <br />
      <h1 className={styles.textNotFound}>Ничего не найдено</h1>
      <p className={styles.discription}>Данная страница отсутсвует в нашем интернет-магазине</p>
    </div>
  );
}
export default NotFoundBlog;
