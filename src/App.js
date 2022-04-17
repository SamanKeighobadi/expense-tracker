import ExpenseTrackerProvider from "./context/ExpenseTrackerContext";
// custom components
import Balance from "./components/Balance";
import Header from "./components/common/Header";
// React bootstrap components
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <ExpenseTrackerProvider>
      <Container className='text-center mt-5'>
        <Header />
        <Balance />
      </Container>
    </ExpenseTrackerProvider>
  );
};

export default App;
