// Sobremi.jsx

import React from 'react';
import { BiCaretRight, BiCaretDown, BiFolderFill, BiFileRichtextFill, BiLinkedin, BiInstagram, BiGithub } from 'react-icons/bi';

const Sobremi = () => {
  return (
    <section className="background">
      <header className="ini">
        <section className="inicio">
          <img src="imagen1.jpg" alt="imagen1" className="imgu" />
          <span className="miliro">milagros_robles</span>
        </section>

        <section>
          <nav className="nav">
            <div className="estiloarch">
              <a href="index.html" className="bordehola">_hola</a>
              <a href="sobremi.html" className="sobremi">_sobre-mi</a>
              <a href="proyectos.html" className="sobremi">_proyectos</a>
              <a href="#" className="explorar">EXPLORAR</a>
            </div>
          </nav>
        </section>
      </header>

      <main className="disposicion">
        <section className="dispoli">
          <ul>
            {/* Contenido de la lista */}
            {[35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="lorem">
          <p>
            {/**
             * Sobre mi
             * Soy Milagros, tengo 31 años y soy estudiante avanzada en
             * Abogacía. Desde 2017, trabajo en el Centro de Monitoreo
             * en la Municipalidad de la Ciudad de Santa Fe.
             * Tengo además un gran interés por el arte
             * por lo que paralelamente realicé parte de la carrera
             * del Prof. en Artes Visuales, dándome herramientas
             * en diseño y comunicación visual.
             * Actualmente, me he volcado al conocimiento en
             * diseño y programación de páginas web realizando distintos proyectos
             * a partir del curso de Programación Web Inicial
             * dado por la UTN BA.
             * Inglés intermedio y Alemán Básico.
             */}
          </p>
        </div>

        <section>
          <div className="listados">
            <div className="hobbies">
              <p>MIS INTERESES</p>
              <ul>
                <li><BiCaretRight /><BiFolderFill /> HTML&CSS</li>
                <li><BiCaretRight /><BiFolderFill /> JavaScript</li>
                <li><BiCaretRight /><BiFolderFill /> React</li>
                <li><BiCaretRight /><BiFolderFill /> Adobe Ilustrator</li>
                <li><BiCaretDown /><BiFolderFill /> Tiempo Libre</li>
              </ul>
            </div>

            <div className="hobbdos">
              <ul>
                <li><BiFileRichtextFill /> Practicar Karate</li>
                <li><BiFileRichtextFill /> Dibujar y Pintar</li>
                <li><BiFileRichtextFill /> Compartir con amigos</li>
                <li><BiFileRichtextFill /> Leer</li>
                <li><BiFileRichtextFill /> Gaming</li>
                <li><BiFileRichtextFill /> Aprender Idiomas</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="ddd">
        <div className="footer">
          <h5 className="encontrame">encontrame en:</h5>
          <div><a href="https://www.linkedin.com/in/roblesmar/"><BiLinkedin className="iconos" /></a></div>
          <div><a href="https://www.instagram.com/mili.robles/"><BiInstagram className="iconos" /></a></div>
          <div><a href="https://github.com/milir23"><BiGithub className="iconos" /></a></div>
          <div className="diahora"><input type="datetime-local" className="estilodiahora" /></div>
        </div>
      </footer>
    </section>
  );
};

export default Sobremi;
