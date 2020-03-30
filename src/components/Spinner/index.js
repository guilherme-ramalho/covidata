import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export default function Spinner() {
  return (
    <Container>
      <ActivityIndicator color="#0066ff" size="large" />
    </Container>
  );
}
