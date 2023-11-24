import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/styles.css';
import imagemLogin from '../assets/logowhite.png';

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/usuario");
      if (response.ok) {
        const users = await response.json();

        const user = users.find((use) => use.email === usuario.email && use.senha === usuario.senha);

        if (user) {
          sessionStorage.setItem('usuarioLogado', JSON.stringify(user));
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          setTimeout(() => {
            setUsuario({
              email: "",
              senha: "",
            });
            navigate("/login");
          }, 3000);
        }
      } else {
        setUsuario({
          email: "",
          senha: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <>
      <div className="corpoContainer">
        <div className="loginContainer">
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <legend>Login</legend>
              <div>
                <div className="inputContainer">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" value={usuario.email} name="email" placeholder="Digite seu e-mail" onChange={handleChange} required />
                </div>
                <div className="inputContainer">
                  <label htmlFor="password">Senha</label>
                  <input type="password" value={usuario.senha} name="senha" placeholder="Digite sua senha" onChange={handleChange} required />
                </div>
              </div>
              <div>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
