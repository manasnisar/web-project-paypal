import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  .navbar-wrapper-enter-active {
    left: 0;
  }

  .navbar-wrapper-enter-done {
    left: 0;
  }

  .navbar-wrapper-exit {
    left: 0;
  }

  .navbar-wrapper-exit-active {
    left: -240px;
  }
`;

export const NavBar = styled.nav`
  width: 240px;
  height: 100%;
  padding: 20px 16px;
  position: fixed;
  top: 0;
  left: -240px;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    circle farthest-side at center bottom,
    var(--blue-4),
    var(--blue-3) 125%
  );
  z-index: 2;
  transition: left 300ms;
`;
