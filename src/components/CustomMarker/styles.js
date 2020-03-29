import styled from 'styled-components/native';
import { Marker } from 'react-native-maps';

export const MapMarker = styled(Marker)``;

export const MarkerView = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  background-color: rgba(212, 44, 32, 0.5);
  justify-content: center;
  align-items: center;
`;

export const MarkerText = styled.Text`
  color: white;
  font-size: 15px;
`;
