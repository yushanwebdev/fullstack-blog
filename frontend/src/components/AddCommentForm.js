import { useRef, useState } from "react";

export default function AddCommentForm({ articleName, setArticleInfo }) {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const submit = useRef(null);

  // This is the solution for "JSON body not posted" issue
  // https://gist.github.com/yushanwebdev/dcab9c3da5dd8894ac2efc7df8e71207
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const addComment = async () => {
    submit.current.disabled = true;

    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        username,
        text: commentText,
      }),
    });

    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
    submit.current.disabled = false;
  };

  return (
    <div id="add-comment-form">
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button onClick={() => addComment()} ref={submit}>
        Add Comment
      </button>
    </div>
  );
}
