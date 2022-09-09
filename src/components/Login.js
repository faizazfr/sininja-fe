import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import delivery from '../components/delivery.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const Navigate = useNavigate();

  const Masuk = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      Navigate('/dashboard');
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
          <a className="navbartitlelogin navbar-brand" href={`/`}>
            <img className="deliverylogo d-flex justify-content-center mx-auto" src="https://www.svgrepo.com/show/73643/delivery.svg"></img>
          </a>
        </div>
      </nav>

      <section className="hero has-background-rey-light is-fullwidth is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form onSubmit={Masuk} className="box">
                  <p className="has-text-centerd">{msg}</p>
                  <div className="field mt-5">
                    <label className="label">Email or Username</label>
                    <div className="controls">
                      <input className="input" type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Password</label>
                    <div className="controls">
                      <input className="input" type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="field mt-5">
                    <button className="button is-success is-fullwidth">Login</button>
                  </div>
                </form>
                <div>
                  <a href={`/register`}>Belum punya akun? Klik di sini</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
