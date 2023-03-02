import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 940px;
  height: 735px;
  min-width: 300px;
  gap: 1%;

  button {
    height: 40px;
    padding: 0px 20px;
    background: #c253ba;
    border: 2px solid #27ae60;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
    :hover {
      background-color: #229955;
      transition: all 500ms;
    }
  }
  @media only screen and (max-width: 992px) {
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    overflow-x: scroll;
    align-items: center;
    justify-content: center;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-flex-wrap: nowrap;
    justify-content: start;
    align-items: start;
    height: auto;
    width: 100%;
  }

  @media only screen and (max-width: 500px) {
    justify-content: start;
  }

  @media only screen and (max-width: 500px) {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-flex-wrap: nowrap;
    justify-content: start;
    align-items: start;
    height: auto;
  }
`;

export const DivContainerImg = styled.div`
  width: 100%;
  min-width: 270px;
  height: 150px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 23.67px;

  img {
    width: 177px;
    height: 177px;
  }
`;

export const DivInfo = styled.div`
  margin-left: 8%;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 14px;
    color:#f58c0c
  }

  span {
    font-weight: bold;
    font-size: 19px;
    line-height: 17px;
    color: #453f3f;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #3f2dcc;
    margin-bottom: 14px;
    margin-top: 14px;
  }
`;

export const DivCard = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  height: 380px;
  width: auto;
  :hover {
    border: 4px solid black;
    box-shadow:0px 20px 15px 0px black;
    transition: all 0.5s;
  }
`;