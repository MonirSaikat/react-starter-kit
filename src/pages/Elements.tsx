import { Input } from "@elements/Input";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';

export const Elements = () => {
  const icon = <Icon icon="mdi:password" />;

  return (
    <Container fluid className="my-4">
      <Row className="d-flex gap-2">
        <Col md={3}>
          <Input placeholder="Enter your name" icon={icon} />
        </Col>
        <Col md={3}>
          <Input type="password" placeholder="Create password" />
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