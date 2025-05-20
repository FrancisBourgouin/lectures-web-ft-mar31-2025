import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import RepoList from "./components/RepoList";
import { useEffect } from "react";

function App() {
  const [repoData, setRepoData] = useState(null);
  const [repoInfo, setRepoInfo] = useState(null);
  const [count, setCount] = useState(0)

  const fetchCommits = (repoInfo) => {
    const { repo, owner } = repoInfo;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setRepoData(data);
        setRepoInfo(repoInfo);
      })
      .catch((err) => {
        console.log(err);
        setRepoData(null);
        setRepoInfo(null);
      });
  };

  useEffect(() => {
    fetchCommits()

  }, [])

  return (
    <>
      <Header count={count}/>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <RepoForm onSubmit={fetchCommits} />
      {repoData && <RepoList commits={repoData} />}
    </>
  );
}

export default App;
