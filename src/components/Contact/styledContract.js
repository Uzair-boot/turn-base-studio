import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";

export const ContactDrawerBox = styled(Box)`
  font-weight: 300;
  font-size: ${({ largeScreen }) => (largeScreen ? "52px" : "40px")};
  line-height: ${({ largeScreen }) => (largeScreen ? "74px " : "60px")};
  texttransform: capitalize;
  color: white;
  margin-top: ${({ largeScreen }) => (largeScreen ? "200px " : "80px")};
  margin-left: 32px;
`;

export const InputBox = styled(Box)`
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 64px;
  width: 70%;
  min-height: 4%;
`;

export const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  max-width: ${({ largeScreen }) => (largeScreen ? "370px" : "320px")};
  max-height: ${({ largeScreen }) => (largeScreen ? "80px" : "50px")};
  border: 2px solid white;
  border-radius: 40px;
`;

export const ContainerBox = styled(Box)`
  color: #ffffff;
  padding-top: 4%;
  padding-bottom: 4%;
  position: fixed;
  width: 250px;
  margin-top: ${({ largeScreen }) => (largeScreen ? "80px" : "32px")};
`;

export const SmallBox1 = styled(Box)`
  display: ${({ showColor }) => (showColor ? "flex" : "none")};
  flex-direction: row;
  text-align: center;
  margin-top: 20px;
  margin-left: 200px;
`;

export const SmallBox2 = styled(Box)`
  width: 14px;
  height: 16px;
  background: #518df8;
  border-radius: 80px;
`;

export const SmallBox3 = styled(Box)`
  width: 8px;
  height: 8px;
  margin-left: 8px;
  margin-top: 4px;
  background: #ffff;
  border-radius: 80px;
`;

export const SmallInnerBox = styled(Box)`
  display: ${({ showColor }) => (showColor ? "none" : "flex")};
  flex-direction: row;
  text-align: center;
  margin-top: 20px;
  margin-left: 200px;
`;

export const SmallInner2 = styled(Box)`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  margin-top: 4px;
  background: #ffff;
  border-radius: 80px;
`;
