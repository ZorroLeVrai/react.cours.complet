import { useEffect, useState } from "react";

export default function DemoApiCall() {
  const [commentId, setCommentId] = useState(1);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
      const commentItem = await response.json();
      setComment(commentItem);
    };
    fetchData();
  }, [commentId]);

  const handlePreviousComment = () => setCommentId(id => id-1);
  const handleNextComment = () => setCommentId(id => id+1);

  const previousButtonDisabled = commentId < 2;
  let previousButtonStyle = "m-1 btn btn-primary";
  if (previousButtonDisabled) {
    previousButtonStyle += " disabled";
  }

  const { id, name } = comment ?? {};

  return (
    <div>
      {comment && <div className="m-2">
        <div>Id: {id}</div>
        <div>Name: {name}</div>
      </div>}
      <div>
        <button className={previousButtonStyle} onClick={handlePreviousComment}>Précédent</button>
        <button className="m-1 btn btn-primary" onClick={handleNextComment}>Suivant</button>
      </div>
    </div>
  );
}
