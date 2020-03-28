import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import { Container } from '../../styles/global';
import { Map, MapMarker } from './styles';

import request from '../../services';

export default function CountryMap() {
  const [stateStats, setStateStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCountryStats = () => {
    setIsLoading(true);

    request({ endpoint: 'PortalMapa' })
      .then(({ data: response }) => {
        setStateStats(response.results);
      })
      .catch(() => {
        alert('Ocorreu um erro ao carregar os dados');
      })
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    getCountryStats();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <Map
          region={{
            latitude: -9.66599,
            longitude: -35.735,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          loadingEnabled
        >
          {stateStats.map((state) => {
            const { latitude, longitude } = state;

            return (
              <MapMarker
                key={state.objectId}
                coordinate={{
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
                }}
                title={state.nome}
                description={`${state.qtd_confirmado} casos confirmados`}
              />
            );
          })}
        </Map>
      )}
    </Container>
  );
}
