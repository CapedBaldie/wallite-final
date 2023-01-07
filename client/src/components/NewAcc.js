import { useState, useCallback } from "react";
import { Input, useToast } from "@chakra-ui/react";
import styles from "./NewAcc.module.css";

const NewAcc = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const toast = useToast();
  const handleSave = () => {
    if (name != "" && amount != "" && type != "") {
      const newAccount = {
        user: 'Saarang',
        name: name,
        bal: amount,
        tType: type,
      };
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(newAccount);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      // fetch(
      //   'https://event-calendar.onrender.com/calendar/addEvent',
      //   requestOptions
      // )
      fetch("http://localhost:27017/wallite/addaccount", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          props.setNA(props.nA + 1);
        })
        .catch((error) => console.log("error", error));
      props.onClose();
      console.log(newAccount);
    } else {
      toast({
        title: "Error",
        description: "Please fill required fields",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  };

  return (
    <div className={styles.newAcc}>
      <div className={styles.div}>
        <div className={styles.account}>
          <img
            className={styles.creditCardDuotoneIcon}
            alt=""
            src="../credit-card-duotone.svg"
          />
          <div className={styles.input}>
            <div className={styles.accountName}>Account Name</div>
            <Input
              className={styles.inputChild}
              variant="outline"
              focusBorderColor="#141326"
              placeholder="Input"
              onChange={() => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.account}>
          <img
            className={styles.creditCardDuotoneIcon}
            alt=""
            src="../money-duotone-line.svg"
          />
          <div className={styles.input}>
            <div className={styles.accountName}>Amount</div>
            <Input
              className={styles.inputChild}
              variant="outline"
              focusBorderColor="#141326"
              placeholder="Input"
              onChange={() => setAmount(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.type}>
        <div className={styles.creditCardDuotoneIcon}>
          <img
            className={styles.bookmarkDuotoneChild}
            alt=""
            src="../rectangle-1.svg"
          />
        </div>
        <div className={styles.input2}>
          <div className={styles.accountName}>Type</div>
          <Input
            className={styles.inputChild}
            variant="outline"
            focusBorderColor="#141326"
            placeholder="Input"
            onChange={() => setType(event.target.value)}
          />
        </div>
      </div>
      <button
        className={styles.save}
        onClick={() => {
          handleSave();
        }}
      >
        <div className={styles.save1}>Save</div>
      </button>
    </div>
  );
};

export default NewAcc;
