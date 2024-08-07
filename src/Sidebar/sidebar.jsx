import React from 'react';
import styles from './sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;



  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        <div className={styles.heading}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h1 className={styles.logo}>Expense Tracker</h1>
        </div>
        
        <ul>
            <NavLink to="addtrans" onClick={onClose}>
                <li>
                    <h2>Add Transaction</h2>
                </li>
            </NavLink>

            <NavLink to="category" onClick={onClose}>
                <li>
                    <h2>Category</h2>
                </li>
            </NavLink>

            
            <NavLink to="summary" onClick={onClose}>
                <li>
                    <h2>Summary</h2>
                </li>
            </NavLink>

           
        </ul>


        
      </div>
    </div>
  );
};

export default Sidebar;
