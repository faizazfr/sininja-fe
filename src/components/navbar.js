import '../App.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbartitle navbar-brand" href={`/dashboard`}>
            <img className="logo" src="https://icon-library.com/images/icon-ninja/icon-ninja-11.jpg" alt="sininja"></img>
            <b className="sininja">S i N i n j a</b>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={`/dashboard`}>
                  Beranda
                </a>
              </li>
              <li className="nav-item regis">
                <a className="nav-link" href={`dashboard/profil`}>
                  Profil
                </a>
              </li>

              <li className="nav-item regis">
                <a className="nav-link" href={`dashboard/register`}>
                  Register
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Layanan
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Tracking
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tarif Kiriman
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ongkos Kirim
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hubungi Kami
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Cari" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">
                Cari
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
