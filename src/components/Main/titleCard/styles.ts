import styled from "styled-components";

export const Title = styled.h2`
  width: 251px;
  white-space: nowrap;
  font: normal normal bold 22px/ 30px Open Sans, sans-serif;
  letter-spacing: 0px;
  color: #171717;
  margin-bottom: 17px;

  @media (min-width: 1024px) {
    width: 330px;
    font: normal normal bold 29px/ 39px Open Sans, sans-serif;
    margin-bottom: 18px;
  }
`;

export const Line = styled.hr`
  border: 1px solid #f7b53d;
  width: 162px;
  height: 2px;

  @media (min-width: 1024px) {
    width: 202px;
  }
`;