import React from 'react';
import { auth, provider } from '../utils/firebase';

const Login = (props) => {
    
    const loginFacebook = () => {
        auth().signInWithPopup(provider)
            .then(({ user }) => {
                props.history.push('/dashboard');
            });
    }

    const logoutFacebook = () => {
        auth().signOut()
            .then(() =>{
                props.history.push('/');
            })
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <div className="Login-content">
                    <h2>Crear cuenta o Iniciar sesión</h2>
                    <button onClick={loginFacebook}>
                        <i className="fab fa-facebook-square" />
                        <span>
                            Inicia sesión con facebook
                        </span>
                    </button>
                    <button onClick={logoutFacebook}>
                        <span>
                            Cerrar sesión
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Login;