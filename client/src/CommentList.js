import React from "react";

function CommentList({ comments }) {
  const renderedComments = Object.values(comments).map((comment) => {
    let content = comment.content;

    switch (comment.status) {
      case "approved":
        break;
      case "pending":
        content = "This comment is awaiting moderation";
        break;
      case "rejected":
        content = "This comment has been rejected";
        break;
      default:
        break;
    }
      
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
}

export default CommentList;
