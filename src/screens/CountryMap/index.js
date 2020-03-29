import React, { useState, useEffect } from 'react';

import Spinner from '../../components/Spinner';
import CustomMarker from '../../components/CustomMarker';
import { Container } from '../../styles/global';
import { Map } from './styles';

import request from '../../services';

export default function CountryMap() {
  const [stateStats, setStateStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // This default coords will show Brazil's map
  const [coordinates, setCoordinates] = useState({
    latitude: -10.341705300513116,
    longitude: -53.603127747774124,
    latitudeDelta: 64.09047852181376,
    longitudeDelta: 46.85033831745386,
  });

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

  const handleRegionChange = (region) => {
    console.tron.log(`${region.latitude} - ${region.longitude}`);
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
          region={coordinates}
          showsUserLocation
          loadingEnabled
          onRegionChange={handleRegionChange}
        >
          {stateStats.map((state) => (
            <CustomMarker key={state.objectId} state={state} />
          ))}
        </Map>
      )}
    </Container>
  );
}
