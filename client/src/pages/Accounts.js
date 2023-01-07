import { useState, useCallback } from "react";
import NewAcc from "../components/NewAcc";
import PortalPopup from "../components/PortalPopup";
import AccountBig from "../components/AccountBig";
import styles from "./Accounts.module.css";
import { propNames } from "@chakra-ui/react";

const Accounts = (props) => {
  const [isNewAccPopupOpen, setNewAccPopupOpen] = useState(false);

  const openNewAccPopup = useCallback(() => {
    setNewAccPopupOpen(true);
  }, []);

  const closeNewAccPopup = useCallback(() => {
    setNewAccPopupOpen(false);
  }, []);

  var totalBal = 0;
  props.accounts.map( a => {
    totalBal = totalBal + parseFloat(a.bal);
  })

  return (
    <>
      <div className={styles.accounts}>
        <div className={styles.accounts1}>
          <div className={styles.accountsParent}>
            <div className={styles.accounts2}>Accounts</div>
            <div className={styles.totalParent}>
              <div className={styles.total}>Total :</div>
              <b className={styles.rs123321}>Rs. {totalBal}</b>
            </div>
          </div>
          {props.accounts.map( a => (
            <AccountBig data={a} />
          ))}
        </div>
        <button className={styles.new} onClick={openNewAccPopup}>
          <img
            className={styles.addRingLightIcon}
            alt=""
            src="../add-ring-light.svg"
          />
          <b className={styles.new1}>New</b>
        </button>
      </div>
      {isNewAccPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNewAccPopup}
        >
          <NewAcc setNA={props.setNA} nA={props.nA} accounts={props.accounts} onClose={closeNewAccPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Accounts;
