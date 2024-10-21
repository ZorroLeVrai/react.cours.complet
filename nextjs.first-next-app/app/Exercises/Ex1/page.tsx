import CommentNavigation from './CommentNavigation';

interface Props {
  searchParams: { commentId?: string }
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const Exercise1 = async ({ searchParams: { commentId } }: Props) => {
  let fetchCommentId = 1;
  if (commentId) {
    const id = parseInt(commentId);
    if (!isNaN(id))
      fetchCommentId = id;
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${fetchCommentId}`);
  const comment: Comment = await response.json();

  return (
    <>
      <h1>Exercise 1</h1>
      <div>Comment Content</div>
      <div>id: {comment.id}</div>
      <div>name: {comment.name}</div>
      <div>
        <CommentNavigation commentId={fetchCommentId}/>
      </div>
    </>
  );
}

export default Exercise1;