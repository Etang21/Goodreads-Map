const Main = (props) => {

  console.log(props)

  return (
    <div>
      <h1>Welcome, user {props.user_id}!</h1>
      <BookTable shelf={props.shelf}/>
      <table><BookRow /></table>
    </div>
  )

}
