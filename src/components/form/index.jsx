import "./form.scss";
import { useState } from "react";

function Form(props) {
  const [showTextArea, setShowTextArea] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [method, setMethod] = useState("get");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData, textArea);
  };

  const handleMethod = (e) => {
    e.preventDefault();
    if (e.target.id === "post" || e.target.id === "put") {
      setShowTextArea(true);
    }
    e.target.id === "get"
      ? setMethod("get")
      : e.target.id === "post"
      ? setMethod("post")
      : e.target.id === "put"
      ? setMethod("put")
      : setMethod("delete");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span className="urlLabel">URL: </span>
          <input
            name="url"
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="bounce" type="submit">
            GO!
          </button>
        </label>
        <div className="methods">
          <input
            onClick={handleMethod}
            className="restButton "
            id="get"
            type="button"
            value="GET"
          ></input>
          <input
            onClick={handleMethod}
            className="restButton "
            id="post"
            type="button"
            value="POST"
          ></input>
          <input
            onClick={handleMethod}
            className="restButton "
            id="put"
            type="button"
            value="PUT"
          ></input>
          <input
            onClick={handleMethod}
            className="restButton "
            id="delete"
            type="button"
            value="DELETE"
          ></input>
        </div>
        {showTextArea && (
          <div className="bodyCont">
            <span>Body: </span>
            <textarea
              onChange={(e) => setTextArea(e.target.value)}
              className="textArea"
            ></textarea>
          </div>
        )}
      </form>
    </>
  );
}

export default Form;
