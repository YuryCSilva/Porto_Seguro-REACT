import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  span.textMenu: first-child {
    display: block;
    font: normal normal bold 15px/20px Open Sans, sans-serif;
    text-transform: uppercase;
  }

  span.textMenu: nth-child(2) {
    height: 34px;
    width: 100%;
    display: block;
    font: normal normal bold 25px/34px Open Sans, sans-serif;
  }

  span.finalText {
    height: 17px;
    width: 100%;
    display: block;
    font: normal normal normal 12px/17px Open Sans, sans-serif;
    text-transform: initial;
  }

  .buttonGroup {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
