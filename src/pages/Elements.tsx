import { Input } from "@elements/Input";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { Button } from "@elements/Button";

export const Elements = () => {

  return (
    <Container fluid className="my-4">
      <Row className="">
        <Col md={3}>
          <Input label="Full Name" type="switch" placeholder="Enter your name" iconPosition="left" icon={<Icon icon="mdi:user" />} />
        </Col>
        <Col md={3}>
          <Input label="Password" type="password" placeholder="Create password" icon={<Icon icon="mdi:password" />} />
        </Col>
        <Col md={3}>
          <Input label="Age" type="number" placeholder="Enter your age" />
        </Col>
        <Col md={3}>
          <Input label="Email" type="email" placeholder="email@gmail.com" icon={<Icon icon="mdi:email" />} />
        </Col>
      </Row>

      <div className="d-flex gap-2 my-4">
        <Button variant="primary" icon={<Icon icon="mdi:home" />} iconPosition="right" >Primary</Button>
        <Button variant="secondary" icon={<Icon icon="mdi:user" />}>Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button loading variant="secondary">Loading</Button>
        <Button variant="link">Link</Button>
      </div>

    </Container>
  );
}