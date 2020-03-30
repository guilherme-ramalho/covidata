import React from 'react';
import PropTypes from 'prop-types';

import { Row, LegendColor, LegendText } from './styles';

export default function PieChartLegendRow({ regions }) {
  console.tron.log(regions);

  return regions ? (
    <PieChartLegendRow>
      {regions.map((region) => (
        <Row key={region.objectId}>
          <LegendColor color={region.color} />
          <LegendText>{region.nome}</LegendText>
          <LegendText>{region.qtd}</LegendText>
          <LegendText color="#5d78ff">{region.percent}</LegendText>
        </Row>
      ))}
    </PieChartLegendRow>
  ) : (
    <></>
  );
}

PieChartLegendRow.propTypes = {
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
