import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 60px 10px 10px 10px;
`;

export const FlexContainer = styled.div<{ align?: string; justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  align-items: ${({ align }) => (align ? align : 'stretched')};
`;
