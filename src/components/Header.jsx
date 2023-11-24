import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../scss/styles.css'
import imagemLogin from '../assets/logo.png'

function Header() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    
    if (usuarioLogado && usuarioLogado.nome && usuarioLogado.email) {
      setUserData( usuarioLogado );
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = async ()=>{
    sessionStorage.removeItem('usuarioLogado');
    setUserData(null);
    setIsLoggedIn(false);
    alert("SAINDO DA SESSÃO");
    navigate('/login');
  }

  return (
    <>
      <header>
        <div className="cabecalhoContainer">
          <div className='logoImage'>
            <Link to="/"><img src={imagemLogin}/></Link>
          </div>
          {isLoggedIn ? (
            <div className="usuarioInfo">
              <p>Bem vindo, {userData.nome} ({userData.email})</p>
              <button onClick={handleLogout}>LOGOUT</button>
            </div>
          ) : (
            <Link to="/login">Por favor, faça login</Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
