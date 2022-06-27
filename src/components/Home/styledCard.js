import { styled } from "@mui/material/styles";
import { Card, Typography, Box } from "@mui/material";

export const StyledCard = styled(Card)`
  min-width: 150px;
  min-height: 175px;
  margin-left: 16px;
  color: black;
  padding: 0px;
  background: #263238;
  &:hover {
    background: linear-gradient(144.8deg, #2a1eb8 23.85%, #b50599 87.7%);
    border-radius: 20px;
  }
`;

export const StyledTypography = styled(Typography)`
  margin-top: 32px;
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const StyledCardBox = styled(Box)`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 32px;
`;

export const StyledTextBox = styled(Box)`
  font-size: 17px;
  margin-left: 32px;
  margin-right: 32px;
  padding-left: 2.5%;
  font-weight: 400;
  line-height: 32px;
  color: white;
  margin-top: 36px;
  border-left: ${(props) => props.largScreen && "2px solid white"};
`;

export const StyledSubTextBox = styled(Box)`
  font-weight: 300;
  padding-left: 2.5%;
  line-height: 32px;
  color: white;
  margin: 24px 32px;
  color: white;
  font-size: ${(props) => (props.largScreen ? "52px" : "30px")};
  line-height: ${(props) => (props.largScreen ? "74px" : "43px")};
`;
