import React, { useState, useEffect } from 'react';

import Spinner from '../Spinner';
import NumberTile from '../NumberTile';
import { TitleText, Row } from './styles';
import { Container } from '../../styles/global';

import request from '../../services';

export default function CasesNumbers() {
  const [casesNumbers, setCasesNumbers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCasesNumbers = () => {
    setIsLoading(true);

    request({ endpoint: 'PortalGeral' })
      .then(({ data: response }) => {
        setCasesNumbers(...response.results);
      })
      .catch(() => {
        alert('Ocorreu um erro ao carregar os dados');
      })
      .then(() => setIsLoading(false));
  };

  const formatDate = (date) => {
    const splitted = date.split(' ');

    return `${splitted[1]} ${splitted[0]}`;
  };

  useEffect(() => getCasesNumbers(), []);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TitleText>{`Atualizado em ${formatDate(
            casesNumbers.dt_atualizacao
          )}`}</TitleText>
          <Row>
            <NumberTile
              number={casesNumbers.total_confirmado}
              title="Confirmados"
              color="#5d78ff"
            />
            <NumberTile
              number={casesNumbers.total_obitos}
              title="Óbitos"
              color="#fab822"
            />
            <NumberTile
              number={casesNumbers.total_letalidade}
              title="Letalidade"
              color="#fb397a"
            />
          </Row>
        </>
      )}
    </Container>
  );
}
