import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || title === '' || message === '') {
      alert('Preencha todos as caixas');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      title: title,
      message: message,
    };

    emailjs
      .send('service_iv4a5cp', 'template_4g7ra91', templateParams, 't0LxtgPsdg8hKwM4i')
      .then(
        (response) => {
          console.log('Email Enviado com sucesso!', response.status, response.text);
          alert('Email Enviado com sucesso!');
          setName('');
          setEmail('');
          setTitle('');
          setMessage('');
        },
        (err) => {
          console.log('ERRO: ', err);
        }
      );
  }

  const contactInfo = [
    {
      id: 1,
      title: 'Morada:',
      text: 'Centro Comercial Dom Pedro lll, Av. José Elias Garcia 119 Loja 204, 2745-149 Queluz',
    },
    {
      id: 2,
      title: 'Numero de Telefone:',
      text: '+123456789',
    },
    {
      id: 3,
      title: 'Email:',
      text: 'exemplo@exemplo.com',
    },
  ];

  return (
    <div>
      <div className="contact-container">
        <div className="contact-image-container">
          <div className="contact-background"></div>
          <div className="contact-text-container">
            <div className="contact-title">Contactos</div>
          </div>
        </div>
        <form className="form" onSubmit={sendEmail}>
          <div className="contact-text">"Mande as suas mensagens"</div>
          <input
            className="input"
            type="text"
            placeholder="Nome *"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="input"
            type="Email"
            placeholder="Email *"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="input"
            type="text"
            placeholder="Titulo da Mensagem *"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            className="textarea"
            placeholder="Mensagem *"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input className="button" type="submit" value="Enviar Mensagem" />
        </form>
        <div className="container">
          <div className="contact-info">
            {contactInfo.map((info) => (
              <div key={info.id} className="info-container">
                <div className="info-title">{info.title}</div>
                <div className="info-text">{info.text}</div>
              </div>
            ))}
          </div>
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.328706612732!2d-9.257853325055914!3d38.75616415502688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd14d03ce369%3A0x18392a6b51e4871d!2sHardcore%20tattoos!5e0!3m2!1spt-PT!2spt!4v1684319248845!5m2!1spt-PT!2spt"
              width="1200"
              height="450"
              style={{ border: '2px solid black' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
