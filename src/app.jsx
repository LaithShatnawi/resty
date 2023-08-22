import React from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Form from "./components/form/index";
import Results from "./components/results/index";
import { useEffect, useReducer } from "react";
import axios from "axios";
import History from "./components/history/History";

const initialState = {
  data: {},
  history: [],
  loading: false,
  showHistory: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "get":
      return {
        data: action.payload,
        history: [...state.history, action.payload],
        loading: false,
        showHistory: false,
      };
    case "history":
      return {
        data: state.data,
        history: state.history,
        loading: false,
        showHistory: !state.showHistory,
      };
    case "loading":
      return {
        data: state.data,
        history: state.history,
        loading: true,
        showHistory: false,
      };
    case "clear":
      return {
        data: state.data,
        history: [],
        loading: false,
        showHistory: false,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = async (requestParams, textArea) => {
    // mock output
    console.log(requestParams.url);

    const response =
      requestParams.method === "get"
        ? await axios.get(requestParams.url)
        : requestParams.method === "post"
        ? await axios.post(requestParams.url, textArea)
        : requestParams.method === "put"
        ? await axios.put(requestParams.url, textArea)
        : null;
    console.log(response); //use this star wars api to fit the display: https://swapi.dev/api/people/?page=1
    if (requestParams) dispatch({ type: "loading" });
    setTimeout(() => {
      dispatch({
        type: "get",
        payload: { data: response, requestParams: requestParams },
      });
    }, 2000);
  };

  useEffect(() => {
    console.log("my name is jeff");
  }, [state]);

  return (
    <React.Fragment>
      <Header />
      <div className="request">
        <div>Request Method: {state.data.method?.toUpperCase()}</div>
        <div>URL: {state.data.url}</div>
      </div>
      <Form handleApiCall={callApi} />
      <div className="buttonContain">
        <button className="clear" onClick={() => dispatch({ type: "clear" })}>
          Clear History
        </button>
        <button
          className="history"
          onClick={() => dispatch({ type: "history" })}
        >
          Show History
        </button>
      </div>
      {state.showHistory && <History history={state.history} />}
      <Results data={state.data} showLoading={state.loading} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
