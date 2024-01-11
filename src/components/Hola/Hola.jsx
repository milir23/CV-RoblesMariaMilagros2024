import React from 'react';
import './Hola.css';



const Hola = () => {
  return (
    <section className="background">
      <header className="linea">
        
        {/* MENU */}
        <span>
          <p>milagros_robles</p>
        </span>
      </header>

      <section className="estiloa">
        <div className="botones"><a href="" className="hola">_hola</a></div>
        <div className="botones"><a href="" className="sobremi">_sobre-mi</a></div>
        <div className="botones"><a href="" className="sobremi">_proyectos</a></div>
      </section>

      {/* PARTE MEDIA */}
      <section className="estilob">
        <section className="individual1">
          <div className="diva">
            <p className="soy">Hola! soy</p>
            <h1>Milagros Robles</h1>
            <h2>Desarrolladora Front-end Junior</h2>
          </div>

          <section>
            <div>
              <p className="codigo">//escribí el código a continuación para seguir:</p>
              <br />
              <p className="quienes">
                quienEs
              </p>
            </div>
          </section>
        </section>

        {/* Recuadro */}
        <section>
          <div className="recuadro1">
            <div className="proyecto1">Proyecto 1</div>
            <div className="recuadro2">
              <div className="espacio">
                <p>/**</p>
                <p>* Lenguaje HTML CSS y JavaScript</p>
                <p>* Manejo de ReactJS</p>
                <p>* Vite</p>
                <p>* Bootstrap <br />*/</p>
              </div>
              <div className='espaciobtn'>
                <p>
                  <a href="#" className="btn1">Ver más</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
          <footer>
            <div className="footer">
              <div className="lista">
                <a className="parrafo">Encontrame en:</a>
                <a className="parrafo"><i class="bi bi-github"></i></a>
                <a className="parrafo"><i class="bi bi-linkedin"></i></a>
                <a className="parrafo"> <i class="bi bi-envelope-at-fill"></i></a>
                
              </div>
            </div>
          </footer>
        </section>
    </section>
  );
};

export default Hola;
