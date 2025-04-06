import React from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Willkommen auf deinem Dashboard</h1>
      <p className={styles.text}>Hier kannst du Rückgaben, Zahlungen und Deadlines sehen.</p>
    </div>
  );
}

export default Dashboard;
