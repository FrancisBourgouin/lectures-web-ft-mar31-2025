export default function RepoListItem(props){
  const {commit} = props
  
  return(
    <li>
      <p>{commit.message}</p>
      <p>{commit.author.name} on {commit.author.date}</p>
    </li>
  )
}