const BookTable = ({shelf}) => {
  var shelf_rows = shelf.map ((book) => {
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
