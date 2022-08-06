import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { useGetTodosQuery } from "../Api/ApiSlice";


const Styled = styled.div``;

function NavigationBar() {
  const { data } = useGetTodosQuery();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ marginBottom: "2rem" }}
    >
      <Container >
        <Navbar.Brand href="#">Taskmate</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2" style={{ position: "relative" , marginRight: "1rem" }}>
              Todolist{" "}
              <span
                style={{
                  position: "absolute",
                  fontSize: "12px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  top: "-2px",
                  
                }}

                className = "bg-warning text-light text-center span__length"
              >
                {data?.length}
              </span>
            </Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
