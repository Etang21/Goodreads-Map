const Login = ({user_id, handleSubmit, handleChange}) => (
  <div className="jumbotron">
    <h1 className="display-4">Welcome to the Goodreads Map</h1>
    <form  onSubmit={handleSubmit} onChange={handleChange}>
      <div className="form-group">
        <label>Goodreads ID</label>
        <input type="text" className="form-control" value={user_id} />
      </div>
      <p className="lead">
        <input className="btn btn-primary btn-lg" type="submit" value="Go!" />
      </p>
    </form>
  </div>
);
