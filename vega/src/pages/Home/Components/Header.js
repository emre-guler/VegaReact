import React from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import "../../assets/Header.scss";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <Container>
        <Row>
          <Col xs={12} md={2} xl={4}>
            <Navbar
              className="navBar pt-3"
              style={{ justifyContent: "space-evenly" }}
            >
              <Navbar.Brand href="#" className="navbarBrand">
                VEGA
              </Navbar.Brand>
            </Navbar>
          </Col>
          <Col xs={0} md={6} xl={4}>
            <Navbar
              className="navBar pt-3"
              style={{ justifyContent: "space-evenly" }}
            >
              <Nav>
                <Nav.Link href="/home">{t("HomePage")}</Nav.Link>
                <Nav.Link href="/link">{t("ContactUs")}</Nav.Link>
                <Nav.Link href="/link">{t("AboutUs")}</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col xs={0} md={4} xl={4}>
            <Navbar
              className="navBar pt-3"
              style={{ justifyContent: "space-evenly" }}
            >
              <Nav>
                <Nav.Link href="/link" className="navbarLoginBtn">
                  {t("Login")}
                </Nav.Link>
                <button>{t("Register")}</button>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
