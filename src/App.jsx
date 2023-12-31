import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import GlobalProvider from "./context/GlobalState";
import Balance from "./components/Balance";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
