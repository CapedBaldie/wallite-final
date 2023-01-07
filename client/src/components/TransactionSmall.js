import { Text } from "@chakra-ui/react";
import styles from "./TransactionSmall.module.css";

const TransactionSmall = (props) => {
  return (
    <div className={styles.transaction} id="transaction-small">
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent} id="category-logo">
          <div className={styles.frameChild} />
          <img
            className={styles.bagAltLightIcon}
            alt=""
            src="../bag-alt-light.svg"
          />
        </div>
        <div className={styles.transactionNameParent}>
          <div className={styles.transactionName}>{props.data.name}</div>
          <div className={styles.account1}>{props.data.account}</div>
        </div>
      </div>
      <div className={styles.rs123321Parent}>
        <div className={styles.rs123321}><Text color={props.data.type == "Income" ? "#30BA00" : "#E91717"}>
              Rs. {props.data.amount}
            </Text></div>
        <div className={styles.thNov2022}>{props.data.date}</div>
      </div>
    </div>
  );
};

export default TransactionSmall;
