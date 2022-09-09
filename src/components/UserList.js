import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('');
  const [nama, setNama] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const Navigate = useNavigate();
  // const [items, itemsPerPage] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const [order, setOrder] = useState('ASC');

  // const sorting = (col) => {
  //   if (order === 'ASC') {
  //     const sorted = [...query].sort((a, b) => (a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1));
  //     setQuery(sorted);
  //     setOrder('DSC');
  //   }
  //   if (order === 'DSC') {
  //     const sorted = [...query].sort((a, b) => (a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1));
  //     setQuery(sorted);
  //     setOrder('ASC');
  //   }
  // };

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setNama(decoded.nama);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        Navigate('/');
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setNama(decoded.nama);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getReset = async () => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  };

  useEffect(() => {
    getUsers();
  }, [page, keyword]);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5000/users?search_query=${keyword}&page=${page}&limit=${limit}`);
    setUsers(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  // const changePage = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(`2 ${event.selected}, 10 ${newOffset}`);
  //   setItemOffset(newOffset);
  // };

  // SEARCH
  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };

  // DELETE
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // LOGOUT
  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      Navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* NAVBAR */}
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
                  <a className="nav-link" href={`profil`}>
                    Profil
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Layanan
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href={getReset}>
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
                <li className="nav-item regis">
                  <a className="nav-link justify-content-end" href={`/profil`}>
                    Welcome, {nama}!
                  </a>
                </li>
                <li className="nav-item regis">
                  <button className="d-flex nav-link justify-content-end" onClick={Logout}>
                    Logout
                  </button>
                  ;
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

      {/* ISI */}
      <div className="container mt-5">
        <h1 className="daftar">
          <b>Daftar Customer Layanan Jasa Pengiriman Barang :</b>
        </h1>
        <hr></hr>
        <div className="columns is-centered">
          <div className="column is-half">
            <form onSubmit={searchData}>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input type="text" className="input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari disini..." />
                </div>
                <div className="control">
                  <button type="submit" className="button is-info">
                    Search
                  </button>
                </div>
              </div>
              <Link to={`add`} className="button is-success">
                Tambah Customer
              </Link>
              <hr></hr>
            </form>
            <table className="table is-striped is-bordered is-fulwidth" id="sortTable">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Produk</th>
                  <th>Tujuan</th>
                  <th>Tarif</th>
                  <th>Aksi</th>
                  <button onClick="sortingTable()">Sort</button>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.nama}</td>
                    <td>{user.produk}</td>
                    <td>{user.tujuan}</td>
                    <td>{user.tarif}</td>
                    <td>
                      <Link to={`edit/${user.id}`} className="button is-small is-info">
                        Edit
                      </Link>
                      <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINATION */}
            <p>
              Total Rows: {rows} | Page: {rows ? page + 1 : 0} of {pages}
            </p>
            <nav className="pagination is-centered" key={rows} role="navigation" aria-label="pagination">
              <ReactPaginate
                pageCount={pages}
                onPageChange={changePage}
                previousLabel={'< Prev'}
                nextLabel={'Next >'}
                containerClassName={'pagination-list'}
                pageLinkClassName={'pagination-previous'}
                previousLinkClassName={'pagination-previous'}
                nextLinkClassName={'pagination-next'}
                activeLinkClassName={'pagination-link is-current'}
                disabledLinkClassName={'pagination-link is-disabled'}
              />
            </nav>
          </div>
        </div>
      </div>
      <br></br>

      {/* ABOUT */}
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

export default Dashboard;
