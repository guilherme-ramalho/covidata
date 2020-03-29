import React from 'react';
import PropTypes from 'prop-types';

import { MapMarker, MarkerView, MarkerText } from './styles';

export default function CustomMarker({ state }) {
  const { latitude, longitude, nome } = state;

  return (
    <MapMarker
      coordinate={{
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      }}
      title={nome}
      description={`${state.qtd_confirmado} casos confirmados`}
    >
      <MarkerView>
        <MarkerText>{state.qtd_confirmado}</MarkerText>
      </MarkerView>
    </MapMarker>
  );
}

CustomMarker.propTypes = {
  state: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    objectId: PropTypes.string.isRequired,
    qtd_confirmado: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
  }).isRequired,
};
