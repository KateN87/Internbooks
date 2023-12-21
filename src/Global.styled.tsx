import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Gruppo;
  src: url('https://fonts.gstatic.com/s/gruppo/v21/WwkfxPmzE06v_ZW1XnrB.woff2') format('woff2');
}

@font-face {
  font-family: 'Open Sans';
  src: url('https://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2') format('woff2');
}
:root{
  --black: #383535;
  --background-blue: #EAEDF3;
  --light-grey: #D9D9D9;
  --medium-grey: #b9b8b8;
  --dark-grey: #6b6a6a;
  --off-white: #F2E9D7;
  --primary: #496A9E;
  --error-background: #efd5d3;
	--error-text: #793838;
  --error: #f00;
  --success-background: #c9e1c4;
	--success-text: #516f46;
  --body-text-small: 1.0rem;
  --body-text-medium: 1.2rem;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 12px;
  color: var(--black);
  letter-spacing: 0.5px;
}

a {
  text-decoration: none;
  color: inherit;

  &:hover{
    cursor: pointer;
  }

  &:active{
    color: inherit;
  }

  &:visited{
    color: inherit;
  }
}

h1{
  font-size: 38px;
}

h2{
  font-size: 24px;
}

textarea:focus, input:focus{
    outline: none;
}

.app{
  background-color: var(--background-blue);
  height: 100vh;
}

.side{
  margin-left: 150px;
}
`;
