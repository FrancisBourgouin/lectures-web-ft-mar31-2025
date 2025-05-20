export default function Question(props) {
  const { question, user } = props;

  return (
    <div className="Question">
      <h1>{question}</h1>
      <h2>
        <img src={user.profile_url} alt="" />
        <span>{user.username}</span>
      </h2>
    </div>
  );
}
