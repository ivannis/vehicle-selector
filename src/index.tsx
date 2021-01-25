import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Containers/Home';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider, DebugEngine} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import './index.css';

const engine = new Styletron();
const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <StyletronProvider value={engine} debug={debug}>
              <BaseProvider theme={LightTheme}>
                  <Home />
              </BaseProvider>
          </StyletronProvider>
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
