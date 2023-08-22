import "./result.scss";
import loading from "./loading.gif";

function Results(props) {
  if (props.showLoading) {
    const loadingImg = document.getElementById("img");
    loadingImg?.classList.add("active");
  }
  console.log(props.data.data);

  return (
    <section className="resultCont">
      {props.data.data ? (
        <>
          <div className="counter">Count {props.data.data.data.count}</div>
          {props.data.data.data.results.map((item, idx) => {
            console.log(item);
            return (
              <div className="text" key={idx}>
                <p className="headers">
                  <b> Headers: </b>
                  {JSON.stringify(props.data.data.headers)}
                </p>
                <div className="name">
                  <b>Next: </b>
                  {props.data.data.data.next}
                </div>
                <div className="name">
                  <b> Prev: </b>
                  {props.data.data.data.previous}
                </div>
                <div className="name">
                  <b>Name: </b>
                  {item.name}
                </div>
                <div className="url">
                  <b>URL: </b>
                  {item.url}
                </div>
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
