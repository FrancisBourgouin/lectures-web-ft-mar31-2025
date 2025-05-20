import useFormData from "../hooks/useFormData";

export default function RepoForm(props) {
  const initialFormData = { owner: "", repo: "" };
  
  const [formData, handleChange, handleSubmit] = useFormData(
    initialFormData,
    props.onSubmit
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        placeholder="Enter the owner"
        value={formData.owner}
        onChange={handleChange}
      />
      <input
        type="text"
        name="repo"
        placeholder="Enter the repo"
        value={formData.repo}
        onChange={handleChange}
      />
      <button>Fetch the commits!</button>
    </form>
  );
}
