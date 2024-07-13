import { Input } from "@elements/Input";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';

export const Elements = () => {

  return (
    <Container fluid className="my-4">
      <Row className="">
        <Col md={3}>
          <Input placeholder="Enter your name" icon={<Icon icon="mdi:user" />} />
        </Col>
        <Col md={3}>
          <Input type="password" placeholder="Create password" icon={<Icon icon="mdi:password" />} />
        </Col>
        <Col md={3}>
          <Input type="number" placeholder="Age" />
        </Col>
        <Col md={3}>
          <Input type="email" placeholder="email@gmail.com" icon={<Icon icon="mdi:email" />} />
        </Col>
      </Row>
    </Container>
  );
}