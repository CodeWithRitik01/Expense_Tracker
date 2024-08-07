import { useState } from "react"
import styles from "./addTrans.module.css"
import { useDispatch } from "react-redux";
import { addTransactionAsync } from "../Redux/reducers/transactionReducer";

function AddTransactions(){
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("")
  const dispatch = useDispatch();
  

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(type, category, amount);
    dispatch(addTransactionAsync({type, category, amount}))

    setAmount('');
    setCategory('')
    setType('')
  }

    return(
        <div className={styles.main}>
          <h1>Add Transaction</h1>
          <div className={styles.formOutterDiv}>
            <form onSubmit={submitHandler} className={styles.formDiv}>

              <label>Type</label>
              <select value={type} onChange={(e)=>setType(e.target.value)}>
                <option value="" disabled>Select an option</option>
                <option value="income">income</option>
                <option value="expense">expense</option>
              </select>
              <label>Category</label>
              <input value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="category of transactios"/>
              <label>Amount</label>
              <input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Amount"/>
              <button type="submit">Submit</button>

            </form>
          </div>
        </div>
    )
}

export default AddTransactions