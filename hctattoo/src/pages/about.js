import React from 'react';
import tattooMan from '../img/man.jpg';

export default function About() {
  return (
    <div>
    <div className="about-container">
      <div className="about-image-container">
        <div className="background-about"></div>
        <div className="about-title-container">
          <div className="about-title">Sobre</div>
        </div>
      </div>
    </div>
    <div className="about-text-container">
      <div className="about-text">
        <p>
        Olá, sou o <b>Alex Garcia</b>, um tatuador apaixonado pela arte da tatuagem. 
        Tenho o meu próprio estúdio, onde crio tatuagens únicas e expressivas. 
        O meu estilo é incomparável e a minha habilidade é excecional. 
        Dedico-me a criar verdadeiras obras de arte que contam histórias e transmitem a identidade de cada pessoa que passa pela minha cadeira. 
        Levo a minha ética profissional a sério e estou sempre em busca de aperfeiçoamento. 
        É incrível poder deixar uma marca duradoura na vida das pessoas, eternizando momentos especiais nas suas peles. 
        Sou grato por fazer parte desta jornada e ajudar os meus clientes a expressarem a sua verdadeira essência através da tatuagem.
        </p>
    </div>
          <img className="about-image" src={tattooMan} alt="Image" />
        </div>
    </div>
  );
};