import React from 'react';

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
          <b>Alex Garcia</b> é um apaixonado tatuador que encontrou sua verdadeira vocação na arte da tatuagem. 
          Com um estilo único e uma habilidade excepcional, ele abriu seu próprio estúdio, proporcionando um ambiente acolhedor e profissional para seus clientes. 
          Sua dedicação à criação de obras de arte personalizadas, que contam histórias e expressam a identidade de cada indivíduo, fez com que Alex se destacasse no mundo da tatuagem. 
          Sua ética profissional exemplar e busca constante por aperfeiçoamento garantem que ele deixe uma marca duradoura na vida daqueles que confiam em sua arte para eternizar momentos significativos em suas peles.
        </p>
      </div>
        <img className="about-image" src="https://via.placeholder.com/1" alt="Image" />
    </div>
    </div>
  );
};