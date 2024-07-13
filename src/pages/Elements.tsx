import { Input } from "@elements/Input";
import { Col, Container, Row } from "react-bootstrap";

export const Elements = () => {
  return (
    <Container fluid className="my-4">
      <Row class="d-flex gap-2">
        <Col md={3}>
          <Input placeholder="Enter your name" />
        </Col>
        <Col md={3}>
          <Input type="password" placeholder="Choose username" />
        </Col>
        <Col md={3}>
          <Input type="number" placeholder="Age" />
        </Col>
        <Col md={3}>
          <Input type="email" placeholder="email@gmail.com" />
        </Col>
      </Row>
    </Container>
  );
}