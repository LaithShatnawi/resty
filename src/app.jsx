import React from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Form from "./components/form/index";
import Results from "./components/results/index";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    data: null,
    requestParams: {},
  });
  const [showLoading, setShowLoading] = useState(false);

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
    console.log(response);                       //use this star wars api to fit the display: https://swapi.dev/api/people/?page=1
    if (requestParams) setShowLoading(true);
    setTimeout(() => {
      setData({ response, requestParams });
      setShowLoading(false);
    }, 4000);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="request">
        <div>Request Method: {data.requestParams.method?.toUpperCase()}</div>
        <div>URL: {data.requestParams.url}</div>
      </div>
      <Form handleApiCall={callApi} />
      <Results data={data} showLoading={showLoading} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
