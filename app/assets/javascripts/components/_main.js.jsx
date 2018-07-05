const Main = (props) => {

  console.log("Props to Main:", props)

  return (
    <div>
      <h1>Welcome, user {props.user_id}!</h1>
      <BookTable shelf={props.shelf}/>
    </div>
  )

}
