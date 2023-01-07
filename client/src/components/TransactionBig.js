import { Box, Text, Tooltip } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styles from "./TransactionBig.module.css";

const TransactionBig = (props) => {
  const [disp, setDisp] = useState("none");
  const [label, setLabel] = useState('');
  useEffect(() => {
    if (props.category == "All") {
      if (props.type == "All") setDisp("block");
      else {
        if (props.data.tType == props.type) setDisp("block");
        else setDisp("none");
      }
    } else if (props.category != props.data.category) setDisp('none');

    if (props.category == props.data.category) {
      if (props.type == "All") setDisp("block");
      else {
        if (props.data.tType == props.type) setDisp("block");
        else setDisp("none");
      }
    }
    setLabel(`Category: ${props.data.category} | Time: ${props.data.time} | To: ${props.data.to}`);
  }, [props.category, props.type]);

  return (
    <Box display={disp} w="100%">
      <Tooltip hasArrow bg='#141326' label={label}>
      <div className={styles.transaction} id="transaction-big">
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.bagAltLightIcon}
              alt=""
              src="../bag-alt-light3.svg"
            />
          </div>
          <div className={styles.transactionNameParent}>
            <div className={styles.transactionName}>{props.data.name}</div>
            <div className={styles.account1}>{props.data.account}</div>
          </div>
        </div>
        <div className={styles.rs123321Parent}>
          <div className={styles.rs123321}>
            <Text color={props.data.tType == "Income" ? "#30BA00" : "#E91717"}>
              Rs. {props.data.amount}
            </Text>
          </div>
          <div className={styles.thNov2022}>{props.data.date}</div>
        </div>
      </div>
      </Tooltip>
    </Box>
  );
};

export default TransactionBig;
