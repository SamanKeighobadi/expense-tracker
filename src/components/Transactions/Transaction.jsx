// React Bootstrap components
import { Card, Row, Col } from "react-bootstrap";
// Context API
import { useContext } from "react";
import { ExpenseTracker } from "../../context/ExpenseTrackerContext";
// Prop Types
import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(ExpenseTracker);

  return (
    <div>
      <Card className='py-2 my-1'  onClick={() => deleteTransaction(transaction.id)}>
        <Row>
          <Col>{transaction.text} </Col>
          <Col>
            ({sign}
            {Math.abs(transaction.amount)}){" "}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

Transaction.propTypes = {
    transaction:PropTypes.object,
}

export default Transaction;
