import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import back from "assets/img/bg.jpg";
import avatar from "assets/img/solar-energy.jpg";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Технічні параметри фотостанції"
                content={
                  <form>
                    <h4>Фотомодулі</h4>
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      proprieties={[
                        {
                          label: "Тип фотомодуля",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: "Полікристал",
                          disabled: true
                        },
                        {
                          label: "Серія фотомодуля",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: "AS-6P30",
                          disabled: true
                        },
                        {
                          label: "Кількість",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: "120",
                          disabled: true
                        },
                        {
                          label: "Виробник",
                          type: "text",
                          bsClass: "form-control",
                          defaultValue: "Китай",
                          disabled: true
                        },
                      ]}
                    />
                    <h4>Інвертори</h4>
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      proprieties={[{
                        label: "Тип інвертора",
                        type: "text",
                        bsClass: "form-control",
                        defaultValue: "Гібридний",
                        disabled: true
                      },
                      {
                        label: "Серія фотомодуля",
                        type: "text",
                        bsClass: "form-control",
                        defaultValue: "Fronius ECO",
                        disabled: true
                      },
                      {
                        label: "Кількість",
                        type: "text",
                        bsClass: "form-control",
                        defaultValue: "2",
                        disabled: true
                      },
                      {
                        label: "Виробник",
                        type: "text",
                        bsClass: "form-control",
                        defaultValue: "Австрія",
                        disabled: true
                      }]}
                    />
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      proprieties={[{
                        label: "Тип інвертора",
                        type: "text",
                        bsClass: "form-control",
                        defaultValue: "Гібридний",
                        disabled: true
                      },
                      {
                        label: "Серія фотомодуля",
                        type: "text",
                        bsClass: "form-control",
                        defaultValue: "Fronius Galvo",
                        disabled: true
                      },
                      {
                        label: "Кількість",
                        type: "text",
                        bsClass: "form-control",
                        defaultValue: "1",
                        disabled: true
                      },
                      {
                        label: "Виробник",
                        type: "text",
                        bsClass: "form-control",
                        defaultValue: "Австрія",
                        disabled: true
                      }]}
                    />


                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage={back}
                avatar={avatar}
                name="Київська ФЕС"
                description={
                  <span>
                    "Україна, Київська область,
                    <br />
                    Обухівський район,
                    <br />
                    смт. Козин"
                  </span>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
