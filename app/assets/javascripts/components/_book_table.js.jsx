class BookTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shelf: props.shelf
    }
  }

  render() {
    console.log("Shelf is: ", this.state.shelf)
    var shelf_rows = this.state.shelf.map ((book) => {
      console.log(book);
      return (
        <div key={book.goodid}>
          <BookRow book={book} />
        </div>
      );
    })

    return (
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Gender</th>
            <th>Hometown</th>
            <th>Goodreads ID</th>
            <th>Author ID</th>
          </tr>
          {shelf_rows}
        </tbody>
      </table>
    )
  }

}
