import '../App.css';

function RegisterSukses() {
  return (
    <div>
      <nav className="navbarlogin navbar-expand-lg">
        <div className="container">
          <a className="navbartitlelogin navbar-brand" href={`/dashboard`}>
            <img className="deliverylogo d-flex justify-content-center mx-auto" src="https://www.svgrepo.com/show/73643/delivery.svg"></img>
          </a>
        </div>
      </nav>
      <div>
        <h1 className="registersukses">
          Registrasi sukses, silahkan klik :<a href={`/`}>Login</a>
        </h1>
      </div>
    </div>
  );
}

export default RegisterSukses;
