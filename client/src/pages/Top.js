import { useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Top.module.css";
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Top = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);
  return (
    <>
      <div className={styles.top} id="topbar">
        <div className={styles.titlelogo}>
          <img
            className={styles.walliteSemiFil1}
            alt=""
            src="../wallite-semi-fil-1@2x.png"
          />
          <div className={styles.wallite}>Wallite</div>
        </div>
        <button className={styles.user}>
          <div className={styles.sarangS}>Hi, User</div>
          <IconButton border='1px solid #dca4ff' bg='transparent' color='#dca4ff' _hover={{bg: '#dca4ff', color: '#141326'}} icon={<HamburgerIcon />} onClick={openSidebar} />
        </button>
      </div>
      {isSidebarOpen && (
        <PortalDrawer placement="Left" onOutsideClick={closeSidebar}>
          <Sidebar setTab={props.setTab} onClose={closeSidebar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Top;
