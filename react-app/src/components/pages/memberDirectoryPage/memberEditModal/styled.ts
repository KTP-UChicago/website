import { TextField, Select } from "@mui/material";
import styled from "styled-components";


import { Button as MuiButton, withStyles } from "@mui/material";

const buttonStyles = {
  padding: "8px 12px",
  fontWeight: 900,
  border: 0,
  borderRadius: "10px",
};


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px; 
  gap: 16px;
`;

export const NewGameButton = styled(MuiButton)({
  ...buttonStyles,
  backgroundColor: "#00ccde",
  color: "white",
  "&:hover": {
    opacity: "50%",
    backgroundColor: "#00ccde",
  },
});

export const CloseButton = styled(MuiButton)({
  ...buttonStyles,
  backgroundColor: "white",
  color: "grey",
  "&:hover": {
    opacity: "50%",
    backgroundColor: "#cdcdcd",
  },
});

export const StyledSelect = styled(Select)`
    width: 100%;
    margin: 10px 0;
`

export const StyledTextField = styled(TextField)`
    width: 100%;
    margin: 10px 0;
`