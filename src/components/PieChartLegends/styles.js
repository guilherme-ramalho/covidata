import styled from 'styled-components/native';

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
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
  background-color: ${({ color }) => color};
  border-radius: 35px;
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

export const LegendText = styled.Text`
  flex: 1;
  font-weight: bold;
  align-items: center;
  color: ${({ color }) => color || '#4b5b65'};
`;

export const Wraper = styled.View`
  flex: 1;
  height: 25px;
  align-items: center;
`;
