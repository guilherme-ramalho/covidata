import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  LegendColor,
  LegendText,
  LegendContainer,
  Wraper,
} from './styles';

export default function PieChartLegends({ regions }) {
  return regions ? (
    <LegendContainer>
      <Row>
        <Wraper>
          <LegendText>Cor</LegendText>
        </Wraper>
        <Wraper>
          <LegendText>Região</LegendText>
        </Wraper>
        <Wraper>
          <LegendText>Casos</LegendText>
        </Wraper>
        <Wraper>
          <LegendText>Porcentagem</LegendText>
        </Wraper>
      </Row>
      {regions.map((region) => (
        <Row key={region.objectId}>
          <Wraper>
            <LegendColor color={region.color} />
          </Wraper>
          <Wraper>
            <LegendText>{region.nome}</LegendText>
          </Wraper>
          <Wraper>
            <LegendText>{region.qtd}</LegendText>
          </Wraper>
          <Wraper>
            <LegendText color="#5d78ff">{region.percent}</LegendText>
          </Wraper>
        </Row>
      ))}
    </LegendContainer>
  ) : (
    <></>
  );
}

PieChartLegends.propTypes = {
  regions: PropTypes.arrayOf(
    PropTypes.shape({
      objectId: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      percent: PropTypes.string.isRequired,
      qtd: PropTypes.number.isRequired,
    })
  ).isRequired,
};
