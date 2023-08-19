import "./result.scss";
import loading from "./loading.gif";

function Results(props) {
  if (props.showLoading) {
    const loadingImg = document.getElementById("img");
    loadingImg?.classList.add("active");
  }
  console.log(props.data.response);

  return (
    <section className="resultCont">
      {props.data.response ? (
        <>
          <div className="counter">Count {props.data.response.data.count}</div>
          {props.data.response?.data.results.map((item, idx) => {
            console.log(item);
            return (
              <div className="text" key={idx}>
                <div className="name">Name: {item.name}</div>
                <div className="url">URL: {item.url}</div>
                {item.textArea && (
                  <div className="url">Body: {item.textArea}</div>
                )}
              </div>
            );
          })}
        </>
      ) : props.showLoading ? (
        <img id="img" className="loading " src={loading} alt="" />
      ) : null}
    </section>
  );
}

export default Results;
