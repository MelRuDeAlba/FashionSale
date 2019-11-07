import React from 'react';

const Form = () => {
    return (
        <div className="Form">
            <div className="Form-container">
                <div className="Form-head">
                    <h2>Publica tu ropa</h2>
                </div>
                <div className="Form-item">
                    <form>
                        <input name="title" type="text" placeholder="Titulo del anuncio" />
                        <input name="descriotion" type="text" placeholder="Describe del anuncio" />
                        <select name="type">
                            <option disabled selected>Seleccionar</option>
                            <option value="sale">Vender</option>
                            <option value="donate">Donar</option>
                        </select>
                        <select name="gender">
                            <option disabled selected>Seleccionar</option>
                            <option value="neutral">Neutral</option>
                            <option value="women">Dama</option>
                            <option value="men">Caballero</option>
                            <option value="girl">Niña</option>
                            <option value="boy">Niño</option>
                        </select>
                        <input type="file" name="photo" />
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Form;