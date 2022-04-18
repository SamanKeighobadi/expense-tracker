import ExpenseTrackerProvider from "./context/ExpenseTrackerContext";
// custom components
import Balance from "./components/Balance";
import Header from "./components/common/Header";
import TransactionList from "./components/Transactions/TransactionList";
import NewTransaction from "./components/Transactions/NewTransaction";
import IncomeExpenceBox from "./components/IncomeExpenseBox";
// React bootstrap components
import { Container, Card } from "react-bootstrap";
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <ExpenseTrackerProvider>
      <Container className="text-center mt-5" style={{maxWidth:"400px"}}>
        <Card className='py-4 '>
          <Header />
          <Balance />
          <IncomeExpenceBox />
          <TransactionList />
          <NewTransaction />
        </Card>
      </Container>
      <ToastContainer />
    </ExpenseTrackerProvider>
  );
};

export default App;
