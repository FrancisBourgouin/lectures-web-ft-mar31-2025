import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import axios from "axios";
import RepoList from "./components/RepoList";

class App extends Component {
  constructor() {
    super();

    this.state = { repoInfo: null, repoData: null };
  }

  componentDidMount() {
    console.log("App was mounted!");
  }
  componentWillUnmount() {
    console.log("App is about to be unmounted!");
  }
  componentDidUpdate() {
    console.log("Component was updated");
  }

  fetchCommits = (repoInfo) => {
    const { repo, owner } = repoInfo;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => this.setState({ repoInfo, repoData: data }))
      .catch(err => {
        console.log(err)
        this.setState({ repoInfo: null, repoData: null })
      })
  };

  render() {
    return (
      <>
        <Header />
        <RepoForm onSubmit={this.fetchCommits} />
        {this.state.repoData && <RepoList commits={this.state.repoData}/>}
      </>
    );
  }
}

export default App;
