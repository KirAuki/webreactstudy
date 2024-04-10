import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    .screen-container {
        width: 100%;
        height: 100%;
        opacity: 1;
        align-items: center;
        color: var(--theme-first-color);
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        width: 100%;
        overflow-x: hidden;
        background-color: var(--theme-bg);
        color: var(--theme-text-color);
        transition:background-color .8s;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    button { 
        all: unset; 
    }
    .flex {
        display: flex;
    }

    html[data-theme=light] {
				--theme-bg: white;
                --theme-first-color: black;
                --theme-second-color: #292a2c;
                --theme-accent-color: #1ed540;
    }

    html[data-theme=dark] {
				--theme-bg: #292a2c;
                --theme-first-color: white;
                --theme-second-color: #c4d0e3;
                --theme-accent-color: #1ed540;
    }
`;

export default GlobalStyles;
