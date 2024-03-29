import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/users/register', {
        firstName: firstName,
        lastName: lastName,
        password: password,
        confPassword: confPassword,
        birthday: birthday,
        email: email,
        profilePhoto: profilePhoto,
      })
      .then((res) => {
        setUser(res.data);
      });
    navigate('/login');
  };

  return (
    <div class="container register">
      <div class="row justify-content-center">
        <div class="col-sm-6 login-form">
          <h2 class="title-register">Registrate</h2>
          <form class="form" onSubmit={handleSubmit}>
            <div class="form-group col-md-6 pb-3">
              <label for="FirstName" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="FirstName"
                placeholder="nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="LastName" class="form-label">
                Apellido
              </label>
              <input
                type="text"
                class="form-control"
                id="LastName"
                placeholder="apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="birthdayDate" class="form-label">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                class="form-control"
                id="birthdayDate"
                placeholder="fecha de nacimiento"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="Email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="Email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="urlPhoto" class="form-label">
                Url Foto de perfil
              </label>
              <input
                type="url"
                class="form-control"
                id="urlImg"
                placeholder="urlImg"
                value={profilePhoto}
                onChange={(e) => setProfilePhoto(e.target.value)}
              />
            </div>

            <div class="form-group col-md-6 pb-3">
              <label for="Password" class="form-label">
                Contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="Password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* <div class="form-group col-md-6 pb-3">
              <label for="confirmPassword" class="form-label">
                Confirmá tu contraseña
              </label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="contraseña"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                required
              />
            </div> */}

            <button type="submit" class="btn btn-dark">
              Registrate
            </button>
            <p class="mt-2">
              ¿Ya tenés una cuenta?&nbsp;
              <a href="/login">Ingresá acá</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
