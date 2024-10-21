import React from "react";
import styles from "./Statistics.module.scss";

interface StatisticItem {
  label: string;
  value: number | string;
}

interface StatisticsProps {
  title: string;
  stats: StatisticItem[];
}

const Statistics: React.FC<StatisticsProps> = ({ title, stats }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
