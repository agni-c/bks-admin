import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "./theme-provider";
import { store } from "./redux/store";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
