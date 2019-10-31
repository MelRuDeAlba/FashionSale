import React from 'react';
import Form from '../components/Form'
const Dashboard = () => (
    <div className="Dashboard">
        <div className="Dashboard-container">
            <div className="Dashboard-content">
                <div className="Dasboard-form">
                    <Form />
                </div>
                <div className="Dasboard-profile">
                    <h2>Perfil</h2>
                    <div className="Dasboard-profile-info">
                        <img src="/" alt="Usuario" />
                        <span>Nombre: </span>
                        <h4>Melissa</h4>
                        <span>Correo: </span>
                        <h4>rubi_93_22@hotmail.com</h4>
                        <button>Cerrar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;