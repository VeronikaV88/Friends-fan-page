import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

const Button = styled.button`
  font-weight: bold;
  font-family: Verdana, Tahoma, sans-serif;
  text-decoration: none;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  border: black 1px solid;
  color: black;
  background-color: white;
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: black;
    color: white;
    transition-duration: 0.4s;
  }
`;

export default LogoutButton;
