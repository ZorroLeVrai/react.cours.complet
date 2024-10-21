import { useEffect, useState } from "react";
// import the custom hook
import useFetch from "./useFetch";  

export default function DemoApiCallV2() {
  const [commentId, setCommentId] = useState(1);

  const { fetchData, data, error } = useFetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);

  useEffect(() => {fetchData()}, [fetchData]);

  const handlePreviousComment = () => setCommentId(id => id-1);
  const handleNextComment = () => setCommentId(id => id+1);

  const previousButtonDisabled = commentId < 2;
  let previousButtonStyle = "m-1 btn btn-primary";
  if (previousButtonDisabled) {
    previousButtonStyle += " disabled";
  }

  const { id, name } = data ?? {};

  return (
    <div>
      {data && <div className="m-2">
        <div>Id: {id}</div>
        <div>Name: {name}</div>
      </div>}
      <div>
        <button className={previousButtonStyle} onClick={handlePreviousComment}>Précédent</button>
        <button className="m-1 btn btn-primary" onClick={handleNextComment}>Suivant</button>
      </div>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
