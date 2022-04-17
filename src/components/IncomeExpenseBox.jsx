import { Row, Col } from "react-bootstrap";
// Context API 
import {useContext} from 'react'
import { ExpenseTracker } from "../context/ExpenseTrackerContext";

const IncomeExpenceBox = () => {

  const {transactions} = useContext(ExpenseTracker)

  const amounts = transactions.map(tr => tr.amount)
  const income = amounts.filter(item => item>0)
  .reduce((acc,item) =>(acc +=item),0)

  const expense = amounts.filter(item => item <0)
  .reduce((acc,item) => (acc +=item),0) * -1;

  return (
    <>
      <Row className=" mx-auto">
        <Col>
          <p>income</p>
          <p>${income}</p>
        </Col>
        <Col>
          <p> Expense</p>
          <p>${expense}</p>
        </Col>
      </Row>
    </>
  );
};

export default IncomeExpenceBox;
