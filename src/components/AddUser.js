import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {
  const [nama, setNama] = useState('');
  const [produk, setProduk] = useState('');
  const [tujuan, setTujuan] = useState('');
  const [tarif, setTarif] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/users/`, {
        nama,
        produk,
        tujuan,
        tarif,
      });
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbartitle navbar-brand" href={`/dashboard`}>
              <img className="logo" src="https://icon-library.com/images/icon-ninja/icon-ninja-11.jpg"></img>
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
                  <a className="nav-link" href={`/profil`}>
                    Profil
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
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <form onSubmit={saveUser}>
            <div className="field">
              <label className="label">Nama</label>
              <div className="control">
                <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
              </div>
            </div>
            <div className="field">
              <label className="label">Produk</label>
              <div className="control">
                <input type="text" className="input" value={produk} onChange={(e) => setProduk(e.target.value)} placeholder="Produk" />
              </div>
            </div>
            <div className="field">
              <label className="label">Tujuan</label>
              <div className="control">
                <input type="text" className="input" value={tujuan} onChange={(e) => setTujuan(e.target.value)} placeholder="Tujuan" />
              </div>
            </div>
            <div className="field">
              <label className="label">Tarif</label>
              <div className="control">
                <input type="text" className="input" value={tarif} onChange={(e) => setTarif(e.target.value)} placeholder="Tarif" />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <br></br>
      <div className="aboutperusahaan">
        <div className="container">
          <h4 className="hubungikami">
            <b>Hubungi Kami</b>
          </h4>
          <br></br>
          <div className="row">
            <div className="col l6 s12">
              <h5>
                <b>Maps</b>
              </h5>
              <br></br>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5277416488516!2d106.85884271476907!3d-6.1938787955160235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f45e43af57f9%3A0x36ce680336f32c30!2sLEMBAGA%20NATIONAL%20SINGLE%20WINDOW%20(LNSW)%20KEMENTERIAN%20KEUANGAN!5e0!3m2!1sen!2sid!4v1662046798968!5m2!1sen!2sid"
              ></iframe>
            </div>
            <div className="center col m6">
              <h5>
                <b>Alamat Perusahaan</b>
              </h5>
              <br></br>
              <p>Gedung Naya Pramuka Jalan Rawamangun No.59C, RT.9/RW.7, RT.9, RW.3, Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10570</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5>
                <b>Jam Layanan Perusahaan</b>
              </h5>
              <br></br>
              <div className="jamlayanan">
                <li>Senin : 8:00 - 16:00</li>
                <li>Selasa : 8:00 - 16:00</li>
                <li>Rabu : 8:00 - 16:00</li>
                <li>Kamis : 8:00 - 16:00</li>
                <li>Jumat : 8:00 - 16:00</li>
                <li>Sabtu : 8:00 - 16:00</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
