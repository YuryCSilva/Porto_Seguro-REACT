import styled from "styled-components";

export const Menu = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  padding: 14px 21px 16px 21px;
  max-height: 60px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 6px #00000024;
  background: #fefefe 0% 0% no-repeat padding-box;

  text-transform: uppercase;

  div.imageContainer picture:first-child {
    padding-right: 5.33vw;
  }

  div.imageContainer picture:nth-child(2) {
    padding-left: 5.33vw;
  }

  @media (min-width: 1024px) {
    position: fixed;
    max-height: 92px;
    padding: 24px 30px 25px 30px;
    div.imageContainer {
      display: flex;
      align-items: center;
    }

    div.imageContainer picture:first-child {
      padding-right: 22.5px;
      padding-left: 20px

    }

    div.imageContainer picture:nth-child(2) {
      padding-left: 22.5px;
    }
  }
`;

interface ToggleProps {
  active: boolean;
}

export const Toggle = styled.a<ToggleProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.active ? "center" : "space-between")};
  width: 35px;
  height: 22px;
  cursor: pointer;
  position: relative;
  span {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: #000;
    transition: 0.3s;
  }

  span:first-child {
    transform: rotate(${(props) => (props.active ? "135deg" : "0")});
    position: ${(props) => (props.active ? "absolute" : "static")};
    left: -0.5px;
  }
  span:nth-child(2) {
    display: ${(props) => (props.active ? "none" : "block")};
  }
  span:nth-child(3) {
    transform: rotate(${(props) => (props.active ? "-135deg" : "0")});
    position: ${(props) => (props.active ? "absolute" : "static")};
    left: 0.5px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

interface MenuNavProps {
  active: boolean;
}

export const MenuNav = styled.nav<MenuNavProps>`
  position: fixed;
  width: 100vw;
  height: calc(100% - 60px);
  background-color: #9a6d0c;
  top: 60px;
  left: 0;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  color: #fff;
  display: flex;
  opacity: ${(props) => (props.active ? "1" : "0")};
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;

  ul {
    li {
      font-size: 21px;
      letter-spacing: 4.2px;
      border-bottom: 1px solid #efc566;

      a {
        width: 100%;
        padding: 12px 20px;
        display: block;

        span {
          font: normal normal 600 21px/28px Open Sans, sans-serif;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    position: static;
    background-color: #fff;
    color: #d6a430;
    flex-direction: row-reverse;
    opacity: 1;
    visibility: visible;

    ul {
      display: flex;
      align-items: center;

      li {
        font-size: 20px;
        border-bottom: none;
        text-transform: none;

        a {
          width: 100%;
          padding: 12px 20px;
          display: block;

          span {
            font: normal normal 600 20px/27px Open Sans, sans-serif;
            display: inline-block;
            text-align: justify;
            text-align-last: justify;
            letter-spacing: 0em;
          }

          span:first-child() {
            width: 56px;
          }
        }
      }
    
    }
  }
`;