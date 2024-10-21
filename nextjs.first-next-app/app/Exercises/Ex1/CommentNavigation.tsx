'use client';
import React from 'react';
import { useRouter } from 'next/navigation';;

interface Props {
  commentId: number
}

const CommentNavigation = ({ commentId }: Props) => {
  const router = useRouter();

  const handlePreviousComment = () => {
    router.push(`Ex1?commentId=${commentId - 1}`);
  };

  const handleNextComment = () => {
    router.push(`Ex1?commentId=${commentId + 1}`);
  };

  const previousButtonDisabled = commentId < 2;
  const buttonStyle = "m-1 btn btn-primary";

  return (
    <div>
      <button className={buttonStyle} disabled={previousButtonDisabled} onClick={handlePreviousComment}>Précédent</button>
      <button className={buttonStyle} onClick={handleNextComment}>Suivant</button>
    </div>
  )
}

export default CommentNavigation;