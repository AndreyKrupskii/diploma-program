import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Нотифікації системи</h4>
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Апаратні нотифікації</h5>
                  <Alert bsStyle="warning" className="alert-with-icon">
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span>Відсутні показники напруги. Можливі причини: нема зв'язку з вимірювальним
                      органом, відсутність зв'язку вимірювальних органів з блоком обробки інформації,
                      можливе коротке замикання.
                    </span>
                  </Alert>
                  <Alert bsStyle="danger" className="alert-with-icon">
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span>Відсутні показники струму. Можливі причини: нема зв'язку з вимірювальним
                      органом, відсутність зв'язку вимірювальних органів з блоком обробки інформації,
                      можлива робота інвертора у холостому ході.
                    </span>
                  </Alert>

                </Col>
                <Col md={6}>
                  <h5>Програмні нотифікації</h5>
                  <Alert bsStyle="info">
                    <span>
                      Виконане оновлення програмного забезпечення.
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <span>
                      Міграція бази даних успішно виконана.
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <span>
                      У сховище бази даних майже не залишилось вільної пам'яті.
                    </span>
                  </Alert>
                  <Alert bsStyle="danger">
                    <span>
                      Помилка запису струмів та напруги.
                    </span>
                  </Alert>
                </Col>
              </Row>
              <br/>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Notifications;
