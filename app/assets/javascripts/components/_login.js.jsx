const Login = ({user_id, handleSubmit, handleChange}) => (
  <form onSubmit={handleSubmit} onChange={handleChange}>
    <label>
      Goodreads ID:
      <input type="text" value={user_id} />
    </label>
    <input type="submit" value="Go!" />
  </form>
);
