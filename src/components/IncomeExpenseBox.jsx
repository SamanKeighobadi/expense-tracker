import { Row, Col } from "react-bootstrap";

const IncomeExpenceBox = () => {
  return (
    <>
      <Row className=" mx-auto">
        <Col>
          <p>income</p>
          <p>$00.00</p>
        </Col>
        <Col>
          <p> Expense</p>
          <p>$00.00</p>
        </Col>
      </Row>
    </>
  );
};

export default IncomeExpenceBox;
