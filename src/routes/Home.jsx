import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../scss/styles.css'
import imagemApp from '../assets/img.svg'
import imagem1 from '../assets/feliz.svg'
import imagem2 from '../assets/relogio.svg'
import imagem3 from '../assets/mundo.svg'
import imagemGithub from '../assets/github.svg'

function Home() {

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

  return (
    <>
      <body>
        <div className='containerBody'>
          <div className='containerLeft'>
            <div className='leftImage'>
              <img src={imagemApp}/>
            </div>
            <div className='containerTextMain'>
              <div className='containerTitle'>
                <h1>Pulsewise</h1>
              </div>
              <div className='containerText'>
                <p>O Pulsewise representa um avanço revolucionário na aplicação da inteligência artificial na área da saúde por meio de um aplicativo inovador. Especializado em responder a dúvidas sobre sintomas, fornecer informações precisas sobre medicamentos e oferecer orientações de saúde personalizadas, o Pulsewise destaca-se ao integrar-se diretamente a dispositivos do dia a dia, como smartwatches.</p>
              </div>
            </div>
            <div className='containerTextMain'>
              <div className='containerTitle'>
                <h1>Vantagens:</h1>
              </div>
              <div className="textContainer">
                <div className='containerTitle'>
                  <h3>Respostas Rápidas</h3>
                </div>
                <div className='containerText'>
                  <img src={imagem2} className='icon'/>
                  <p>Respostas imediatas a perguntas de saúde, oferecendo suporte e orientação instantâneos.</p>
                </div>
              </div>
              <div className="textContainer">
                <div className='containerTitle'>
                  <h3>Monitoramento In-App</h3>
                </div>
                <div className='containerText'>
                  <img src={imagem1} className='icon'/>
                  <p>Acompanhamento contínuo da saúde dentro do aplicativo, permitindo aos usuários visualizar e compreender seus dados facilmente.</p>
                </div>
              </div>
              <div className="textContainer">
                <div className='containerTitle'>
                  <h3>AI Especializada</h3>
                </div>
                <div className="containerText">
                  <img src={imagem3} className='icon'/>
                  <p>Inteligência artificial especializada em saúde para fornecer informações precisas e orientações personalizadas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='containerRight'>
            <div className="textContainer">
              <div className='containerTitle'>
                <h1>O que é</h1>
              </div>
              <div className="containerText">
                <p>O aplicativo "Pulsewise" representa uma solução inovadora na área da saúde, oferecendo uma experiência abrangente e personalizada para os usuários. Integrando inteligência artificial especializada, o aplicativo responde a perguntas sobre sintomas, fornece informações precisas sobre medicamentos e oferece orientações de saúde personalizadas. Além disso, a integração com dispositivos externos, como smartwatches, permite o monitoramento em tempo real de diversos indicadores de saúde. Com um sistema de compra online in-app, os usuários podem adquirir produtos relacionados à saúde de forma conveniente. A marca sólida e a interface intuitiva contribuem para uma jornada de saúde informada, capacitando os usuários a tomar decisões conscientes sobre seu bem-estar. O "Pulsewise" representa não apenas um assistente virtual, mas um parceiro inteligente na promoção de uma vida saudável e informada.</p>
            </div>
            <div className='containerTitle'>
                <h1>O que faz</h1>
              </div>
              <div className="containerText">
                <p>Integrando inteligência artificial para fornecer informações, orientações personalizadas e respostas a perguntas sobre sintomas. Com conectividade a dispositivos externos como smartwatches, oferece monitoramento em tempo real de indicadores de saúde. Além disso, apresenta um sistema de compra online in-app, contribuindo para uma jornada informada e conveniente. O "Pulsewise" não apenas assiste, mas se torna um parceiro inteligente na promoção de uma vida saudável.</p>
            </div>
            <div className='containerTitle'>
                <h1>O que faz</h1>
              </div>
              <div className="containerText">
                <p>O funcionamento do aplicativo "Pulsewise" é intuitivo e abrangente. Ao acessar o app, os usuários podem obter respostas personalizadas sobre sintomas e informações precisas sobre medicamentos por meio da inteligência artificial integrada. A conectividade com dispositivos externos, como smartwatches, permite o monitoramento contínuo de indicadores de saúde em tempo real, fornecendo uma visão abrangente. Além disso, a facilidade de compra online in-app simplifica a aquisição de produtos relacionados à saúde. Com uma interface amigável e uma marca consolidada, o "Pulsewise" oferece uma experiência completa, capacitando os usuários a cuidar ativamente de sua saúde de maneira informada e conveniente.</p>
            </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="containerFooter">
            <div className="footerText">
              <p>Pulsewise© 2023-202x</p>
            </div>
            <div className="footerIcons">
            <a href="https://github.com/miy-o"><img src={imagemGithub}/></a>

            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Home;