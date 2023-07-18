import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {css, variant} from "@techstack/styled-system";
import {Interpolation, StyleFunction} from "styled-components/dist/types";

const StyledA = styled.a({
  fontWeight: 'bold'
}, variant({
  scale: 'StyledA',
  variants: {
    default: {
      backgroundColor: 'Red'
    }
  }
}))

const StyledDiv = styled.div(
  css({
    backgroundColor: '#fff'
  })
)

// StyledDiv.defaultProps = {
//   variant: 'default'
// }


function App() {
  return (
    <ThemeProvider theme={{
      colors: {
        garble: 'Pink'
      },
      StyledA: {
        default: {}
      }
    }}>
      <div className="App">
        <header className="App-header">
          <StyledDiv>
            This is a div and inside it is an <StyledA href='#'>anchor</StyledA>.
          </StyledDiv>

          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      );
    </ThemeProvider>)
}

export default App;
