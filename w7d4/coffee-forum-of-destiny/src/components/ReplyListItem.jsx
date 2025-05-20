export default function ReplyListItem(props) {
  const { content, likes, user, upvote, downvote } = props;

  return (
    <div className="ReplyListItem">
      <img src={user.profile_url} alt="" />
      <span>{user.username}</span>
      <p>{content}</p>
      <div>
        <button onClick={downvote}>-</button>
        <span>{likes}</span>
        <button onClick={upvote}>+</button>
      </div>
    </div>
  );
}
