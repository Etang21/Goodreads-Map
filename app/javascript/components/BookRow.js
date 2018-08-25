import React from 'react'

const BookRow = ({book}) => {
  return (
    <tr>
      <th scope="row">{book.title}</th>
      <td>{book.author}</td>
      <td>{book.gender}</td>
      <td>{book.hometown}</td>
      <td>{book.goodid}</td>
      <td>{book.author_id}</td>
    </tr>
  )
}

export default BookRow;
