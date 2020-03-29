import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border: 1px solid #d4dadc;
  border-radius: 8px;
  flex-direction: column;
  padding: 2px;
  margin: 0px 5px 5px 5px;
  justify-content: center;
`;

export const NumberText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

export const TitleText = styled.Text``;
