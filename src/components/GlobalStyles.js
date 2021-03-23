import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url("https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
    color: #f4a15d;
    font-family: 'Lato', sans-serif;
}


`;

export default GlobalStyle;
