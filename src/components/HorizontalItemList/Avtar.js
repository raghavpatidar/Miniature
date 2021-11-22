import React from "react";
import styled, { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
// import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { StylesProvider, useTheme } from "@material-ui/core/styles";

const Content = styled.div`
  margin: auto;
  max-width: 500px;
`;
const AvatarContainer = styled.div`
  display: flex;
  margin-bottom: 14px;
  & > * {
    margin: 4px;
  }
`;

const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
    background: #000000;
    border: 7px solid pink;
  `};
`;
function SizedAvatars(props) {
  return (
    <AvatarContainer>
      <SizedAvatar size={10} alt="Evelyn Carnahan">
        {props.data}
      </SizedAvatar>
    </AvatarContainer>
  );
}

function Avtar(props) {
  const theme = useTheme();
  console.log(props.data);
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Content>
          {/* <Typography variant="h5"> Sized Avatars </Typography> */}
          <SizedAvatars data={props.data} />
        </Content>
      </ThemeProvider>
    </StylesProvider>
  );
}

// ReactDOM.render(<Avtar />, document.querySelector("#app"));
export default Avtar;
