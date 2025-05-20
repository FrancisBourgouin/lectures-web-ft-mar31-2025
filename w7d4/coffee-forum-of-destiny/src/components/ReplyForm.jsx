import { useState } from "react";

export default function ReplyForm(props) {
  const [reply, setReply] = useState("");

  const handleChange = (event) => {
    setReply(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(reply);

    setReply("");
  };
  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your reply"
        onChange={handleChange}
        value={reply}
      />
      <button>Add Reply</button>
    </form>
  );
}
