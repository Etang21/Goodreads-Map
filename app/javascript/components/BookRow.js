import React from 'react'

const BookRow = ({book}) => {
  return (
    <tr>
      <th scope="row">{book.title}</th>
      <td>{book.author}</td>
      <td>{book.gender}</td>
      <td>{book.nationality}</td>
    </tr>
  )
}

export default BookRow;
