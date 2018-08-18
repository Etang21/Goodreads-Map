const Login = ({handleSubmit}) => (
  <div className="jumbotron login-panel">
    <h1 className="display-4">Welcome to the Goodreads Map</h1>
    <form  onSubmit={handleSubmit}>
      <p className="lead">
        <input className="btn btn-primary btn-lg" type="submit" value="Go!" />
      </p>
    </form>
  </div>
);
