import React, { Component } from "react";
import { Table, Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card";

import Button from "components/CustomButton/CustomButton";

class Icons extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                hCenter
                title="Cистема моніторингу ФЕС - Solar Monitor"
                category="Дипломний проект студента 4 курсу групи ЕД-41 Крупського Андрія"
                ctTableResponsive
                ctTableFullWidth
                ctTableUpgrade
                content={
                  <div style={{padding: '10px 25px'}}>
                      <p className="text-muted">
                      На сьогоднішній день в Україні серед різних видів електростанції, що використовують ВДЕ, саме фотоелектростанції (надалі – ФЕС) одержали найбільшого поширення. Це не дивно, адже вони мають ряд переваг: доступність енергоресурсу, можливість приватного встановлення, простота в експлуатації, можливість продажі електроенергії у мережу по «зеленому тарифу». Та з іншого боку при мережевому використанні дискретність і мала прогнозованість енергетичних потоків може негативно вплинути на стан енергосистеми в цілому.
                      </p>
                      <p className="text-muted">
                        Тому у цьому дипломному проекті розглядається можливе вирішення такої проблеми завдяки використанню автоматизованої системи збору даних щодо роботи та виробітку ФЕС для подальшого аналізу отриманої інфрмації та можливого прогнозування режимів роботи конкретної станції.
                      </p>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;
