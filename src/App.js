import ExpenseTrackerProvider from "./context/ExpenseTrackerContext";
// custom components
import Balance from "./components/Balance";
import Header from "./components/common/Header";
import TransactionList from "./components/Transactions/TransactionList";
import NewTransaction from "./components/Transactions/NewTransaction";
import IncomeExpenceBox from "./components/IncomeExpenseBox";
// React bootstrap components
import { Container, Card } from "react-bootstrap";

const App = () => {
  return (
    <ExpenseTrackerProvider>
      <Container className="text-center mt-5 w-25 ">
        <Card className='py-4 '>
          <Header />
          <Balance />
          <IncomeExpenceBox />
          <TransactionList />
          <NewTransaction />
        </Card>
      </Container>
    </ExpenseTrackerProvider>
  );
};

export default App;
