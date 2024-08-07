import { useEffect, useState } from "react"
import styles from "./summary.module.css"
import { useSelector } from "react-redux"
import { transactionSelector } from "../Redux/reducers/transactionReducer"
function Summary(){

  const {transactions} = useSelector(transactionSelector);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [balance, setBalance] = useState(0)

  useEffect(()=>{
     let expenses = 0
     let Income = 0
     transactions.map((data, key) =>{
      if(data.type === "expense"){
            expenses += parseInt(data.amount)
      }else{
        Income += parseInt(data.amount)
      }
     })

     setIncome(Income)
     setExpense(expenses)
     setBalance(Income-expenses)
  })
  
    return(
        <div className={styles.main}>
           <h1>Summary</h1>
           <div className={styles.allTransaction}>
              <div className={styles.totalDiv} style={{ boxShadow: "0px 10px 10px 0px green"}}>
                   <h2 style={{color:"green"}}>Total Income</h2>
                   <h3>{income}</h3>
              </div>
              <div className={styles.totalDiv} style={{ boxShadow: "0px 10px 10px 0px red"}}>
                   <h2 style={{color:"red"}}>Total Expense</h2>
                   <h3>{expense}</h3>
              </div>
           </div>
           <div className={styles.adjustBalance}>
              <div className={styles.balanceDiv}>
                    <h2>Balance</h2>
                    <h3>{balance}</h3>
              </div>
           </div>

        </div>
    )
}

export default Summary