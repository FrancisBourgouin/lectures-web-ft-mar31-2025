import Question from "./Question";
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

export default function ForumPost(props) {
  const { forumPostData, userData, handleLike, handleSubmit } = props;

  return (
    <div className="ForumPost">
      <Question
        question={forumPostData.question}
        user={userData[forumPostData.authorId]}
      />
      <ReplyList
        replies={forumPostData.replies}
        users={userData}
        handleLike={handleLike}
      />
      <ReplyForm onSubmit={handleSubmit} />
    </div>
  );
}
