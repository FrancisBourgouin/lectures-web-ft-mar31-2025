import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = { owner: "", repo: "" };
    this.state = this.initialState;

    // this.handleChange = this.handleChange.bind(this)
  }

  // handleChange = function (event) {
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="Enter the owner"
          value={this.state.owner}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="repo"
          placeholder="Enter the repo"
          value={this.state.repo}
          onChange={this.handleChange}
        />
        <button>Fetch the commits!</button>
      </form>
    );
  }
}
