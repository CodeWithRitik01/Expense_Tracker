import Navbar from "./Navbar/navbar";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import TransactionList from "./TransactionList/transactionList";
import AddTransactions from "./AddTransaction/addTrans";
import CategoryBreakdown from "./CategoryBreakdown/categoryBreakdown";
import Summary from "./Summary/summary";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children:[
        {path: '/', element: <TransactionList />},
        {path: "addtrans", element: <AddTransactions />},
        {path: "category", element: <CategoryBreakdown />},
        {path: "summary", element: <Summary />}
      ]
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}/>
       
    </div>
  );
}

export default App;
