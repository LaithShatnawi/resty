import "./result.scss";
function Results(props) {
  return (
    <section className="resultCont">
      {props.data ? (
        <>
          <div className="counter">Count {props.data.count}</div>
          {props.data.results.map((item, idx) => {
            return (
              <div className="text" key={idx}>
                <div className="name">Name: {item.name}</div>
                <div className="url">URL: {item.url}</div>
              </div>
            );
          })}
        </>
      ) : null}
    </section>
  );
}

export default Results;
