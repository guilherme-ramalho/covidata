import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { Container } from '../../styles';

import request from '../../services';

export default function CountryMap() {
  const [stateStats, setStateStats] = useState(null);

  const getCountryStats = () => {
    request({ endpoint: 'PortalMapa' })
      .then(({ data: response }) => {
        setStateStats(response.results);
      })
      .catch(() => {
        alert('Ocorreu um erro ao carregar os dados');
      });
  };

  useEffect(() => {
    getCountryStats();
  }, []);

  return (
    <Container>
      <Text>Mapa</Text>
    </Container>
  );
}
