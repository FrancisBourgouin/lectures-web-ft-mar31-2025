import { usersObj } from "./data/userData";
import { forumPost } from "./data/postData";
import "./App.css";
import ForumPost from "./components/ForumPost";
import Header from "./components/Header";
import Question from "./components/Question";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";
import ReplyListItem from "./components/ReplyListItem";
import { useState } from "react";
import { addReply, updateLike } from "./helpers/postHelpers";

function App() {
  const [forumPostData, setForumPostData] = useState(forumPost);
  const [userData, setUserData] = useState(usersObj);

  const handleSubmit = (reply) => {
    const updatedForumPostData = addReply(reply, forumPostData);
    setForumPostData(updatedForumPostData);
  };

  const handleLike = (replyId, isUpvote) => {
    const updatedForumPostData = updateLike(isUpvote, replyId, forumPostData);
    setForumPostData(updatedForumPostData);
  };

  return (
    <>
      {/* <div className="cda">
        <Header />
        <Question />
        <ReplyForm />
        <ReplyListItem />
        <ReplyList />
        <ForumPost />
      </div> */}
      <Header />
      <ForumPost
        forumPostData={forumPostData}
        userData={userData}
        handleSubmit={handleSubmit}
        handleLike={handleLike}
      />
    </>
  );
}

export default App;
