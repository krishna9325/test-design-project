import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from '../styles/Home.module.css'

const Navbar = () => {

    return (
        <div>

            <AppBar className={styles.appbar}>
                <Toolbar variant="dense" className={styles.toolbar}>
                    <div className={styles.logo}>
                        <img src="/myelinlogo.png" alt="Logotype" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;