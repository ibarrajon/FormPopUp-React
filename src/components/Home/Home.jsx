import React, { useState } from 'react';
import './Home.css'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='container'>
            <h1>Página Home</h1>

            <button className='enviar-form' onClick={togglePopup}>Abrir formulario</button>
            {isOpen && (
                <div className="popup">
                    
                        <form>
                            <div className="form-container">
                                <label>Nombre:</label>
                                <input className='contacto-input' type="text" id="nombre" required />

                                <label>Email:</label>
                                <input className='contacto-input' type="email" id="email" required />

                                <label>Asunto:</label>
                                <input className='contacto-input' type="text" id="asunto" required />

                                <label>Mensaje:</label>
                                <textarea className='contacto-mensaje' id="message"></textarea>

                                <div className="enviar-container">
                                    <button className='enviar-form' type="submit">Enviar</button>
                                    <button className='enviar-form' onClick={togglePopup}>Cerrar</button>
                                </div>
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