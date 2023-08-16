import React from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Form from "./components/form/index";
import Results from "./components/results/index";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    data: null,
    requestParams: {},
  });
  const [showLoading, setShowLoading] = useState(false);

  const callApi = (requestParams, textArea) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {
          name: "fake thing 1",
          url: "http://fakethings.com/1",
          textArea: textArea,
        },
        {
          name: "fake thing 2",
          url: "http://fakethings.com/2",
          textArea: textArea,
        },
      ],
    };
    if (requestParams) setShowLoading(true);
    setTimeout(() => {
      setData({ data, requestParams });
      setShowLoading(false);
    }, 2000);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="request">
        <div>Request Method: {data.requestParams.method}</div>
        <div>URL: {data.requestParams.url}</div>
      </div>
      <Form handleApiCall={callApi} />
      <Results data={data} showLoading={showLoading} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
