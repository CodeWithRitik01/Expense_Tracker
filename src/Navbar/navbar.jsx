import { NavLink, Outlet } from "react-router-dom"
import styles from "./navbar.module.css"
import Sidebar from "../Sidebar/sidebar";
import { useState } from "react";

function Navbar(){
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    return(
        <div>
            <div className={styles.main}>
                <NavLink className={`${styles.logoDiv} ${styles.otherNav}`}>
                    <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/15665/15665002.png" alt="Not found"/>
                    <h2>Expense Tracker</h2>
                </NavLink>


                <div className={`${styles.otherLinksDiv} ${styles.otherNav}`}>
                    <NavLink to="addtrans">
                       <h2>Add Transaction</h2>
                    </NavLink>

                    <NavLink to="category">
                        <h2>Category</h2>
                    </NavLink>

                    <NavLink to="summary">
                        <h2>Summary</h2>
                    </NavLink>

                </div>
                <div className={styles.menuBars}>
                    <img onClick={() => setIsOverlayOpen(true)} src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="Not found"/>
                </div>
                <Sidebar isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
            </div>
            <Outlet />
        </div>

    )
}

export default Navbar