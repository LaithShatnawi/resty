import "./form.scss";

function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon",
    };
    props.handleApiCall(formData);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span className="urlLabel">URL: </span>
          <input name="url" type="text" />
          <button className="bounce" type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
