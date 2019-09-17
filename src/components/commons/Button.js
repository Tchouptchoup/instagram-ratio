import React from "react";
import styled from "styled-components";

const Button = props => {
  const { label, onClick } = props;
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  background: radial-gradient(
    circle at 33% 100%,
    #fed373 4%,
    #f15245 30%,
    #d92e7f 62%,
    #9b36b7 85%,
    #515ecf
  );
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px;
  border-image-source: radial-gradient(
    circle at 33% 100%,
    #fed373 4%,
    #f15245 30%,
    #d92e7f 62%,
    #9b36b7 85%,
    #515ecf
  );
  border-image-slice: 1;
  cursor: pointer;
}
`;

export default Button;
