class BookRow extends React.Component {

  constructor(props) {
    super(props);
    console.log("BookRow props:", props)
    this.state = {
      book: props.book
    }
  }

  render() {
    console.log("Book:", this.state.book)
    var bk = this.state.book
    return (
      <tr>
        <td>{bk.title}</td>
        <td>{bk.author}</td>
        <td>{bk.gender}</td>
        <td>{bk.hometown}</td>
        <td>{bk.goodid}</td>
        <td>{bk.author_id}</td>
      </tr>
    )
  }

}
