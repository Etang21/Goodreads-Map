const BookTable = ({shelf}) => {
  var shelf_rows = shelf.map ((book) => {
    return (
      <BookRow book={book} key={book.goodid}/>
    );
  })

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Gender</th>
          <th scope="col">Hometown</th>
          <th scope="col">Goodreads ID</th>
          <th scope="col">Author ID</th>
        </tr>
      </thead>
      <tbody>
        {shelf_rows}
      </tbody>
    </table>
  )
}
