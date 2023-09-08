import React, { useState, useRef } from 'react';
import './Home.css'
import emailjs from '@emailjs/browser';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => setIsOpen(!isOpen);
    
    const [isEnviado, setIsEnviado] = useState(false);
    const toggleEnviado = () => setIsEnviado(!isEnviado);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7mr5h09', 'template_6m83kyl', form.current, 'H_mOvcyS7nF4y0zOk')
          .then((result) => {
              console.log("Enviado:",result.text);
              toggleEnviado();
              togglePopup();
          }, (error) => {
              console.log("Error:",error.text);
          });
      };

    return (
        <div className='container'>
            <h1>Página Home</h1>

            <button className='enviar-form' onClick={togglePopup}>Abrir formulario</button>
            {isOpen && (
                <div className="popup">
                    
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-container">
                                <label>Nombre:</label>
                                <input className='contacto-input' type="text" name="user_name" required />

                                <label>Email:</label>
                                <input className='contacto-input' type="email" name="user_email" required />

                                <label>Asunto:</label>
                                <input className='contacto-input' type="text" name="user_asunto" required />

                                <label>Mensaje:</label>
                                <textarea className='contacto-mensaje' name="message"></textarea>

                                <div className="enviar-container">
                                    <button className='enviar-form' type="submit">Enviar</button>
                                    <button className='enviar-form' onClick={togglePopup}>Cerrar</button>
                                </div>
                                <p className='mensaje-enviado'>{isEnviado ? 'Mensaje enviado correctamente' : ''}</p>
                            </div>
                        </form>
                </div> 
            )}

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloribus quaerat fuga suscipit amet odit assumenda velit voluptas dolorem mollitia iste, sint reiciendis excepturi quidem aspernatur tenetur magnam dolores quas.
            Dignissimos tempore error sed fugiat blanditiis facilis libero suscipit similique dolore nobis, ut, reiciendis in modi rem. Laborum aliquid itaque tempora, ad excepturi eius numquam voluptate, tenetur voluptatum doloremque dolorem?
            Minus odit iste non tenetur. Harum, explicabo cupiditate. Nesciunt eligendi, dolor quasi qui ab eveniet iusto cumque corporis odio. Voluptatum nesciunt minima, id in animi fuga commodi aspernatur possimus sint.
            Aut quia eveniet quod minima, consequatur aliquam inventore, totam dolorem quibusdam, repellat perferendis. Quo maiores alias modi laboriosam, obcaecati labore enim neque id quam totam eveniet voluptatibus aliquid, quisquam sapiente.
            Sunt quia ipsam, expedita, doloremque cupiditate et vitae eligendi repudiandae, dolorum placeat est odio voluptatum consequuntur ea molestias minima nesciunt debitis. Sunt magni perferendis maxime quo? Delectus odit quae nesciunt?</p>

            
        </div>
    )
}

export { Home }