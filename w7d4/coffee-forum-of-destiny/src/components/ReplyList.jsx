import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies, users, handleLike } = props;

  const parsedReplies = replies.map((reply) => (
    <ReplyListItem
      {...reply}
      key={reply.id}
      user={users[reply.authorId]}
      upvote={() => handleLike(reply.id, true)}
      downvote={() => handleLike(reply.id, false)}
    />
  ));
  return <section className="ReplyList">{parsedReplies}</section>;
}
