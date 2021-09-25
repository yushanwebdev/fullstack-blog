import { useRef } from "react";

export default function UpvotesSection({
  articleName,
  upvotes,
  setArticleInfo,
}) {
  let upVoteBtn = useRef(null);

  const onUpvote = async () => {
    upVoteBtn.current.disabled = true;

    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "POST",
    });

    const body = await result.json();

    setArticleInfo(body);

    upVoteBtn.current.disabled = false;
  };

  return (
    <div id="upvotes-section">
      <button onClick={() => onUpvote()} ref={upVoteBtn}>
        Upvote
      </button>
      <p>This post has been upvoted {upvotes} times.</p>
    </div>
  );
}
