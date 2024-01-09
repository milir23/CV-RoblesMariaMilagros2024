import React from 'react';
import './Hola.css';

const Hola = () => {
  return (
    <section className="background">
      <header className="linea">
        <span><img src="/src/assets/imagen1.jpg" alt="img" className="imagen" /></span>
        <span>
          <p>milagros_robles</p>
        </span>
      </header>

      <section className="estiloa">
        <div className="botones"><a href="" className="hola">_hola</a></div>
        <div className="botones"><a href="" className="sobremi">_sobre-mi</a></div>
        <div className="botones"><a href="" className="sobremi">_proyectos</a></div>
      </section>


      <section className="estilob">
        <section>
          <div className="diva">
            <p className="soy">Hola! soy</p>
            <h1>Milagros Robles</h1>
            <h2>Desarrolladora Front-end Junior</h2>
          </div>

          <div>
            <p className="codigo">//escribí el código a continuación para seguir:</p>
            <br />
            <p>{'>'}
              {/* <Link to="/quienEs">quienEs</Link> */}
            </p>
          </div>
        </section>
        <section>
          <div className="recuadro1">
            <div className="proyecto1">Proyecto1</div>
          <div className="recuadro2">
            <div className="espacio">
              <p>/**</p>
              <p>* Lenguaje HTML CSS y JavaScript</p>
              <p>* Manejo de React</p>
              <p>* Vite</p>
              <p>* Bootstrap <br/>*/</p>
              <button>Ver más</button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <footer>
          <div className="footer">
            <div className="lista">
              <p className="parrafo">Encontrame en:</p>
              <p></p>
              <p></p>
              <p></p>
            </div>

            
          </div>
        </footer>
    </section>
  );
};

export default Hola;

