import React from "react";
import styles from "./AdminPage.module.scss";
import Statistics from "../../components";

const AdminPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Admin Dashboard</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.stats}>
          <h2>Statistics</h2>
          <Statistics />
        </section>
        <section className={styles.actions}>
          <h2>Actions</h2>
          <button className={styles.button}>Add User</button>
          <button className={styles.button}>Manage Content</button>
          <button className={styles.button}>View Reports</button>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
