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
          Oi, sou o <b>Alex Garcia</b>, um tatuador apaixonado pela arte da tatuagem. 
          Tenho meu próprio estúdio, onde crio tatuagens únicas e expressivas. 
          Meu estilo é incomparável e minha habilidade é excepcional. 
          Minha dedicação é criar verdadeiras obras de arte que contem histórias e transmitam a identidade de cada pessoa que passa pela minha cadeira. 
          Levo minha ética profissional a sério e estou sempre em busca de aperfeiçoamento. 
          É incrível poder deixar uma marca duradoura na vida das pessoas, eternizando momentos especiais em suas peles. 
          Sou grato por fazer parte dessa jornada e ajudar meus clientes a expressarem sua verdadeira essência através da tatuagem.
        </p>
    </div>
          <img className="about-image" src={tattooMan} alt="Image" />
        </div>
    </div>
  );
};