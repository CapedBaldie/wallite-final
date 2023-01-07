import styles from "./AccountBig.module.css";

const AccountBig = (props) => {
  return (
    <div className={styles.accountBig} id="account-big">
      <div className={styles.frameParent}>
        <div className={styles.creditCardLightWrapper}>
          <img
            className={styles.creditCardLightIcon}
            alt=""
            src="../credit-card-light3.svg"
          />
        </div>
        <div className={styles.accountNameParent}>
          <div className={styles.accountName}>{props.data.name}</div>
          <div className={styles.type}>{props.data.tType}</div>
        </div>
      </div>
      <div className={styles.rs123321Wrapper}>
        <div className={styles.rs123321}>Rs. {props.data.bal}</div>
      </div>
    </div>
  );
};

export default AccountBig;
