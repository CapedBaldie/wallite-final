import { useEffect } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.sidebar} data-animate-on-scroll>
      <button className={styles.darhboardParent} onClick={() => props.setTab("Dashboard")} >
        <img className={styles.darhboardIcon} alt="" src="../darhboard.svg" />
        <div className={styles.dashboard}>Dashboard</div>
      </button>
      <button className={styles.transactionParent} onClick={() => props.setTab("transactions")} >
        <img
          className={styles.transactionIcon}
          alt=""
          src="../transaction.svg"
        />
        <div className={styles.transactions}>Transactions</div>
      </button>
      <button className={styles.ecommercebalanceParent} onClick={() => props.setTab("accounts")} >
        <img
          className={styles.ecommercebalanceIcon}
          alt=""
          src="../ecommercebalance.svg"
        />
        <div className={styles.transactions}>Accounts</div>
      </button>
      <button className={styles.ecommercepriceTagRotateParent} onClick={() => props.setTab("tags")}>
        <img
          className={styles.ecommercepriceTagRotateIcon}
          alt=""
          src="../ecommercepricetagrotate.svg"
        />
        <div className={styles.transactions}>Tags</div>
      </button>
      <button className={styles.lineUpParent} onClick={() => props.setTab("reports")} >
        <img className={styles.lineUpIcon} alt="" src="../line-up.svg" />
        <div className={styles.transactions}>Reports</div>
      </button>
      <button className={styles.interfaceaddCircleParent} onClick={() => props.setTab("budget")} >
        <img
          className={styles.interfaceaddCircleIcon}
          alt=""
          src="../interfaceaddcircle.svg"
        />
        <div className={styles.transactions}>Set Budget</div>
      </button>
      <button className={styles.vectorParent} onClick={() => props.setTab("settings")} >
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        <div className={styles.transactions}>Settings</div>
      </button>
    </div>
  );
};

export default Sidebar;
