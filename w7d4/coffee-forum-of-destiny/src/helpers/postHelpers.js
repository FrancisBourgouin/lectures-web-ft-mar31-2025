export const addReply = (replyData, forumPost) => {
  const updatedReplies = [...forumPost.replies];
  const updatedForumPost = { ...forumPost };

  const newReply = {
    id: updatedReplies.length + 1,
    authorId: String(Math.ceil(Math.random() * 6)),
    content: replyData,
    likes: 0,
  };

  updatedReplies.push(newReply);

  updatedForumPost.replies = updatedReplies;

  console.log(updatedForumPost)
  return updatedForumPost;
};

export const updateLike = (isUpvote, replyId, forumPost) => {
  const updatedReplies = [...forumPost.replies];
  const updatedForumPost = { ...forumPost };
  const replyToChangeIndex = forumPost.replies.findIndex((reply) => reply.id === replyId)
  const replyToChange = forumPost.replies[replyToChangeIndex]

  const updatedReply = { ...replyToChange };
  updatedReply.likes += isUpvote ? 1 : -1

  updatedReplies[replyToChangeIndex] = updatedReply

  updatedForumPost.replies = updatedReplies

  return updatedForumPost
};
