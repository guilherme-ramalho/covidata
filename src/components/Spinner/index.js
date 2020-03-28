import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export default function Spinner() {
  return (
    <Container>
      <ActivityIndicator color="red" size="large" />
    </Container>
  );
}
