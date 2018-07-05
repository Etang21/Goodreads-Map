const Login = ({userID, handleSubmit, handleChange}) => (
  <form onSubmit={handleSubmit} onChange={handleChange}>
    <label>
      Goodreads ID:
      <input type="text" value={userID} />
    </label>
    <input type="submit" value="Go!" />
  </form>
);
