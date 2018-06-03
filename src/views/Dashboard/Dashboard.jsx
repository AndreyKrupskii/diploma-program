import React, { Component } from "react";
import { connect } from 'react-redux';
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { dataPie, legendPie } from "variables/Variables.jsx";
import { getLightGraphData, getPowerGraphData } from './../../modules/graphs/ducks';
import diff from './../../libs/diff';

let renderIterator = 0;

class Dashboard extends Component {
  componentDidMount() {
    // set render interval
    this.renderInterval = setInterval(() => (
      this.setState({ renderInterval: renderIterator++ })
    ), 5000);

    // request data
    this.props.dispatch(getLightGraphData());
    this.props.dispatch(getPowerGraphData());
  }

  componentWillUnmount() {
    clearInterval(this.renderInterval);
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-cloud text-info" />}
                statsText="Освітленість"
                statsValue={`${this.props.sensors.light.value || 0}ЛК`}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText={`Оновлено ${diff(Date.now(), this.props.sensors.light.timestamp)} назад`}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-settings text-warning" />}
                statsText="Температура"
                statsValue={`${this.props.sensors.temperature.value || 0}°C`}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText={`Оновлено ${diff(Date.now(), this.props.sensors.temperature.timestamp)} назад`}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-plug text-danger" />}
                statsText="Напруга"
                statsValue={`${this.props.sensors.voltage.value || 0}B`}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText={`Оновлено ${diff(Date.now(), this.props.sensors.voltage.timestamp)} назад`}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-gleam text-info" />}
                statsText="Сила струму"
                statsValue={`${this.props.sensors.current.value || 0}A`}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText={`Оновлено ${diff(Date.now(), this.props.sensors.current.timestamp)} назад`}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                id="chartHours"
                title="Освітленність"
                category="Протьогом доби"
                stats={`Оновлено ${diff(Date.now(), this.props.sensors.light.timestamp)} назад`}
                statsIcon="fa fa-history"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={{ series: this.props.graphs.light.series, labels: this.props.graphs.light.labels }}
                      type="Line"
                      options={this.props.graphs.light.options}
                      responsiveOptions={this.props.graphs.light.responsive}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(this.props.graphs.light.legend)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Генерація"
                category="Протьогом доби"
                stats="Оновлено 24 год назад"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="Діаграма потужності"
                category="Активна та реактивна потужності"
                stats={`Оновлено ${diff(Date.now(), this.props.sensors.voltage.timestamp)} назад`}
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={{ series: this.props.graphs.power.series, labels: this.props.graphs.power.labels }}
                      type="Bar"
                      options={this.props.graphs.power.options}
                      responsiveOptions={this.props.graphs.power.responsive}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(this.props.graphs.power.legend)}</div>
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
  return {
    sensors: state.sensors,
    graphs: state.graphs
  };
}

export default connect(mapStateToProps)(Dashboard);
