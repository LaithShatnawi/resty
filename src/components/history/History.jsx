import "./History.scss";

const History = ({ history }) => {
  console.log(history);
  return (
    <div className="historyContainer">
      <h2>API Request History</h2>
      {history.map((item, idx) => {
        return (
          <div key={idx} className="historyData">
            <div>
              <b>RequestParams: </b>
              {JSON.stringify(item.requestParams)}
            </div>
            <div>
              <b>Data:</b>
              {item.data.data.results.map((el, idx) => {
                return <div key={idx}>{JSON.stringify(el.name)}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
