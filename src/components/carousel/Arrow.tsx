import styled from 'styled-components';
import { LeftArrowIcon, RightArrowIcon } from '../../icons';
import colors from '../../styles/colors';

export enum ArrowType {
  previous = 'previous',
  next = 'next',
}

interface ArrowProps {
  type: ArrowType;
  onClick: () => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 110px;
`;

const Arrow = styled.button`
  width: 63px;
  height: 63px;
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  background: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  box-sizing: border-box;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Component = ({ type, onClick }: ArrowProps): React.ReactElement => (
  <Container>
    {type === ArrowType.previous ? (
      <Arrow onClick={onClick}>
        <LeftArrowIcon />
      </Arrow>
    ) : (
      <Arrow onClick={onClick}>
        <RightArrowIcon />
      </Arrow>
    )}
  </Container>
);

export default Component;
