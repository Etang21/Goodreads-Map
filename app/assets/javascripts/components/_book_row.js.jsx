const BookRow = ({book}) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.gender}</td>
      <td>{book.hometown}</td>
      <td>{book.goodid}</td>
      <td>{book.author_id}</td>
    </tr>
  )
}
