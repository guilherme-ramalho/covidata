import React, { useState, useEffect } from 'react';

import Spinner from '../../components/Spinner';
import CustomMarker from '../../components/CustomMarker';
import CasesNumbers from '../../components/CasesNumbers';
import { Container } from '../../styles/global';
import { Map } from './styles';

import request from '../../services';

export default function CountryMap() {
  const [stateStats, setStateStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // This default coords will show Brazil's map
  const [coordinates, setCoordinates] = useState({
    latitude: -14.42995643627933,
    longitude: -51.63580471649766,
    latitudeDelta: 42.344046187304706,
    longitudeDelta: 36.84808652848006,
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
    console.tron.log(region);
  };

  useEffect(() => {
    getCountryStats();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <CasesNumbers />
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
        </>
      )}
    </Container>
  );
}
