import React from "react";
import styled from "styled-components";
import bill from "../../../Assets/bill.jpg";
import card from "../../../Assets/eWasteCard.png";

const UserDashboardSidebar = () => {
  return (
    <div>
      <Top2>
        <Title>Make Payment</Title>
        <Balance>
          <h2>Total Uncleared Balance:</h2>
          <p style={{ fontSize: "18px", fontWeight: "600" }}>₦10000</p>
        </Balance>
        <img src={card} alt="" />
        <DueAmount>
          <p>Current Amount Due:</p>
          <h2>₦5000</h2>
        </DueAmount>
        <ButtonHold>
          <PayOnline>Pay Online</PayOnline>
          <Transfer>Transfer</Transfer>
        </ButtonHold>
      </Top2>
      <Bottom2>
        <Title>View your Bill</Title>
        <Image>
          <img src={bill} alt="" />
        </Image>
        <p>view bills</p>
      </Bottom2>
    </div>
  );
};

export default UserDashboardSidebar;

const PayOnline = styled.button`
  padding: 10px 25px;
  background-color: #ff4500;
  color: #fff;
  border: 0;
  font-weight: 600;
  border-radius: 10px;
  transition: all 350ms ease;

  :hover {
    cursor: pointer;
    background-color: #ff4400e6;
  }
`;
const Transfer = styled.button`
  padding: 10px 25px;
  border: 2px solid #1d1d41;
  color: #1d1d41;
  font-weight: 600;
  border-radius: 10px;
  background-color: transparent;

  :hover {
    cursor: pointer;
  }
`;

const ButtonHold = styled.div`
  width: 90%;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const DueAmount = styled.div`
  position: absolute;
  top: 140px;
  left: 30px;
  color: #f8f2f2f8;

  p {
    margin: 0;
  }
  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
  }
`;

const Balance = styled.div`
  width: 90%;

  h2 {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
  }
`;

const Bottom2 = styled.div`
  width: 90%;
  height: 50vh;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.027) 1.95px 1.95px 2.6px;
  display: flex;
  align-items: center;
  flex-direction: column;

  :hover {
    cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    width: 92vw;
  }
`;

const Top2 = styled.div`
  width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.027) 1.95px 1.95px 2.6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;

  :hover {
    cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 300;
  }

  img {
    margin-top: 10px;
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 92vw;
  }
`;

const Image = styled.div`
  height: 70%;
  width: 100%;
  margin: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Title = styled.div`
  height: 10%;
  width: 90%;
  display: flex;
  align-items: center;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: 10px;
`;
