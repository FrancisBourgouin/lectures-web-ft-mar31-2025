import RepoListItem from "./RepoListItem";

export default function RepoList(props) {
  const { commits } = props;

  const parsedCommits = commits.map(commit => <RepoListItem key={commit.sha} commit={commit.commit}/>)

  return(
    <ul>
      {parsedCommits}
    </ul>
  )
}
