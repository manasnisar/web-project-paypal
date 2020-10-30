import styled from 'styled-components';

export const Container = styled.div`
  .navbar-wrapper-enter-active {
    transform: translateX(0px);
  }

  .navbar-wrapper-enter-done {
    transform: translateX(0px);
  }

  .navbar-wrapper-exit {
    transform: translateX(0px);
  }

  .navbar-wrapper-exit-active {
    transform: translateX(-240px);
  }
`;

export const NavBar = styled.nav`
  width: 240px;
  height: 100%;
  padding: 20px 16px;
  position: fixed;
  display: flex;
  flex-direction: column;
  transform: translateX(-240px);
  background: radial-gradient(
    circle farthest-side at center bottom,
    var(--blue-4),
    var(--blue-3) 125%
  );
  z-index: 2;
  transition: transform 300ms;
`;
