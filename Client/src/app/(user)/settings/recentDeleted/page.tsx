import React from "react";
import styles from "@/styles/dasboard/DeletedRecent.module.scss";
import { RecycleIcon } from "@/assets/images/icon";

function DeletedRecentPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentBox}>
        <div className={styles.header}>
          <RecycleIcon className={styles.icon} />
          <h2 className={styles.title}>Các thiết bị đã xoá</h2>
          <p className={styles.description}>
            Đây là danh sách các thiết bị mà bạn đã xoá, bấm vào thiết bị để
            khôi phục
          </p>
        </div>
        <div className={styles.deletedListBox}>
          <div className={styles.deletedListTitle}>THIẾT BỊ ĐÃ XOÁ</div>
          <div className={styles.emptyText}>Bạn chưa xoá thiết bị nào cả.</div>
        </div>
      </div>
      <div className={styles.bottomBar}></div>
    </div>
  );
}

export default DeletedRecentPage;
