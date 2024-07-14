import { Alert } from "@components/shared/Alert";
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
    </Container>
  );
}