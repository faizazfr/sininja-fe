import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const Navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth', {
        nama: nama,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      Navigate('/registersukses');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <nav className="navbarlogin navbar-expand-lg">
        <div className="container">
          <a className="navbartitlelogin navbar-brand" href={`/register`}>
            <img className="deliverylogo d-flex justify-content-center mx-auto" src="https://www.svgrepo.com/show/73643/delivery.svg"></img>
          </a>
        </div>
      </nav>
      <section className="hero has-background-rey-light is-fullwidth is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form onSubmit={Register} className="box">
                  <p className="has-text-centerd">{msg}</p>
                  <div className="field mt-5">
                    <label className="label">Nama</label>
                    <div className="controls">
                      <input className="input" type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Email</label>
                    <div className="controls">
                      <input className="input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Password</label>
                    <div className="controls">
                      <input className="input" type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Confirm Password</label>
                    <div className="controls">
                      <input className="input" type="password" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="field mt-5">
                    <button className="button is-success is-fullwidth">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>{' '}
    </div>
  );
};

export default Register;
