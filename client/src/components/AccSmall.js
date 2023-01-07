import styles from "./AccSmall.module.css";

const AccSmall = (props) => {
  return (
    <div className={styles.acc} id="account-small">
      <div className={styles.frameParent}>
        <div className={styles.creditCardLightWrapper}>
          <img
            className={styles.creditCardLightIcon}
            alt=""
            src="../credit-card-light.svg"
          />
        </div>
        <div className={styles.account1}>{props.data.name}</div>
      </div>
      <div className={styles.rs000}>Rs. {props.data.bal}</div>
    </div>
  );
};

export default AccSmall;
