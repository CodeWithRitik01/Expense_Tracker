import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getInitialStateAsync, transactionSelector } from "../Redux/reducers/transactionReducer"
import styles from "./transactionList.module.css"

function TransactionList(){
  const {transactions} = useSelector(transactionSelector);
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(getInitialStateAsync());

  },[])

  console.log(transactions)
    return(
        <div className={styles.main}>
          <h1>Transactions</h1>
          {transactions.map((data, key) =>(
            <div className={styles.transList}>
              <div className={styles.date}>
                 <h3>{data.date.slice(0, 10)}</h3>
              </div>
              <h3>{data.category}</h3>
              {data.type === "expense" ?
                <h3 className={styles.expenseAmt}>-{data.amount}</h3>
              :
                <h3 className={styles.incomeAmt}>+{data.amount}</h3>
              }
             
            </div>
          ))}

        </div>
    )
}

export default TransactionList