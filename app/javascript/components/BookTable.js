import React from 'react'
import BookRow from './BookRow'
import LoadingIcon from './LoadingIcon'

const BookTable = ({shelf, shelfLoading}) => {
  //Try removing the return from this
  var shelf_rows = shelf.map ((book) => {
    return (
      <BookRow book={book} key={book.goodid}/>
    );
  })
  var loadingIcon = shelfLoading ? <LoadingIcon /> : null

  return (
    <div className="table-panel">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Gender</th>
            <th scope="col">Nationality</th>
            <th scope="col">Goodreads ID</th>
            <th scope="col">Author ID</th>
          </tr>
        </thead>
        <tbody>
          {shelf_rows}
        </tbody>
      </table>
      {loadingIcon}
    </div>
  )
}

export default BookTable;
