export default function CommentsList({ comments }) {
  return (
    <>
      <h3>Comments</h3>
      {comments.map((item, key) => (
        <div className="comment" key={key}>
          <h4>{item.username}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </>
  );
}
