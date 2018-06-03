import React, { Component } from "react";
import { connect } from 'react-redux';
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { getTableData } from './../../modules/tables/ducks';

class TableList extends Component {
  componentDidMount() {
    this.props.dispatch(getTableData());
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Освітленість"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                      <th>ІД</th>
                      <th>Показник</th>
                      <th>Величина</th>
                      <th>Одиниці</th>
                      <th>Дата | Час</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.tables.sensors.map((sensor) => (
                        <tr>
                          <td>{sensor.id}</td>
                          <td>{sensor.sensorName}</td>
                          <td>{sensor.value}</td>
                          <td>{sensor.unit}</td>
                          <td>{sensor.createdAt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

/**
 * Decorator for mapping state to pros
 * @param {{}} state - redux state
 */
function mapStateToProps(state) {
  return { tables: state.tables };
}

export default connect(mapStateToProps)(TableList);
