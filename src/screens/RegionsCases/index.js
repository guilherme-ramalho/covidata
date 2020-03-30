import React, { useState, useEffect } from 'react';
import { Text } from 'react-native-svg';

import Spinner from '../../components/Spinner';
import PieChartLegends from '../../components/PieChartLegends';
import { Container } from '../../styles/global';
import { Pie } from './styles';

import request from '../../services';

export default function RegionsCases() {
  const [regions, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRegionsStats = () => {
    setIsLoading(true);

    request({ endpoint: 'PortalRegiao' })
      .then(({ data: response }) => {
        setRegions(response.results);
      })
      .catch(() => {
        alert('Ocorreu um erro ao carregar os dados.');
      })
      .then(() => setIsLoading(false));
  };

  const getChartData = () =>
    regions.map((region) => ({
      key: region.objectId,
      amount: region.qtd,
      name: region.nome,
      percent: region.percent,
      svg: { fill: region.color },
    }));

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;

      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={18}
          stroke="black"
          strokeWidth={0.3}
        >
          {data.amount}
        </Text>
      );
    });
  };

  useEffect(() => getRegionsStats(), []);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Pie
            valueAccessor={({ item }) => item.amount}
            data={getChartData()}
            spacing={0}
            outerRadius="90%"
          >
            <Labels />
          </Pie>
          <PieChartLegends regions={regions} />
        </>
      )}
    </Container>
  );
}
