import React from 'react';
import PropTypes from 'prop-types';

import { Container, TitleText, NumberText } from './styles';

export default function NumberTile({ number, title, color }) {
  return (
    <Container>
      <NumberText color={color}>{number}</NumberText>
      <TitleText>{title}</TitleText>
    </Container>
  );
}

NumberTile.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
