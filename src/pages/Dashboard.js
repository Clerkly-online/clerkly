import React from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Willkommen bei Clerkly!</h1>

      <section className={styles.section}>
        <label className={styles.label}>🧠 Nächste Deadline:</label>
        <p>10. April 2025 – Umsatzsteuervoranmeldung</p>
      </section>

      <section className={styles.section}>
        <label className={styles.label}>📅 Deine To-Dos:</label>
        <ul>
          <li>Belege hochladen</li>
          <li>Steuerberater anrufen</li>
          <li>Kaffee trinken (sehr wichtig)</li>
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
