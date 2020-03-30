import styled from 'styled-components/native';

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const LegendContainer = styled.View`
  flex: 2;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #d4dadc;
  margin: 10px;
  padding: 10px;
`;

export const LegendColor = styled.View`
  flex: 1;
  background-color: ${({ color }) => color};
  border-radius: 15px;
`;

export const LegendText = styled.Text`
  flex: ${({ flex }) => flex || 1};
  font-weight: bold;
  color: ${({ color }) => color};
  /* color: #4b5b65; */
`;

export const PercentageText = styled.Text`
  flex: 1;
  font-weight: bold;
  color: #5d78ff;
`;
