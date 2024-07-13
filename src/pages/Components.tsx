import { Alert } from "@components/shared/Alert";
import { Button } from "@elements/Button";
import { Container } from "react-bootstrap";

export const Components = () => {
  return (
    <Container fluid style={{ padding: '1rem' }}>

      <Alert>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum!</Alert>
      <Alert dismissible variant="danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum!</Alert>
      <Alert dismissible variant="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum!</Alert>
      <Alert dismissible variant="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum!</Alert>
      <Alert dismissible variant="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum!</Alert>
      <Alert dismissible variant="dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum!</Alert>

      <br />
      <br />

      <div className="d-flex gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>

    </Container>
  );
}