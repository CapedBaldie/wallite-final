import styles from "./WeekMonthDropdown.module.css";

const WeekMonthDropdown = () => {
  return (
    <div className={styles.weekMonthDropdown}>
      <div className={styles.thisWeek}>This Week</div>
      <div className={styles.thisMonth}>This Month</div>
      <div className={styles.thisWeek}>Today</div>
    </div>
  );
};

export default WeekMonthDropdown;
