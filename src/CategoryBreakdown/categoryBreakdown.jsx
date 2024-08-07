import { useSelector } from "react-redux";
import styles from "./categoryBreakdown.module.css"
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { transactionSelector } from "../Redux/reducers/transactionReducer";

function CategoryBreakdown(){
  const {transactions} = useSelector(transactionSelector)
  let backgroundColor = [
    '#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B'
   ]

   let hoverBackgroundColor= [
    '#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B'
  ]

  const expenseTransactions = transactions.filter(transaction => transaction.type === 'expense');

  const categoryBreakdownData = expenseTransactions.reduce((data, item) => {
    if (data[item.category]) {
      data[item.category] += item.amount;
    } else {
      data[item.category] = item.amount;
    }
    return data;
  }, {});


  const pieChartData = {
    labels: Object.keys(categoryBreakdownData),
    datasets: [
      {
        data: Object.values(categoryBreakdownData),
        backgroundColor,
        hoverBackgroundColor
      }
    ]
  };


  return (
    <div className={styles.main}>
      <h1>Category Breakdown</h1>
      {Object.keys(categoryBreakdownData).length > 0 ? (
        <div className={styles.pie}>
          <Pie  data={pieChartData} />
        </div>
      ) : (
        <span>No data available</span>
      )}
    </div>
  );
}

export default CategoryBreakdown