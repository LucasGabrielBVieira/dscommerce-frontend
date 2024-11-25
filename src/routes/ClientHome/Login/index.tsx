/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.css';
import { useState } from 'react';
import { loginRequest } from '../../../services/auth-service';
import * as authService from '../../../services/auth-service';

function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    function handleSubmit(event: any) {
        event.preventDefault();
        loginRequest(formData);
        authService.loginRequest(formData) 
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
            })
            .catch(error => {
                console.error(error);
            })
    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" action="" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input name='username' value={formData.username} onChange={handleInputChange} className="dsc-form-control" type="text" placeholder="Email" />
                                <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <input name='password' value={formData.password} onChange={handleInputChange} className="dsc-form-control" type="password" placeholder="Senha" />
                                <div></div>
                            </div>
                        </div>
                        <div className="dsc-mt20 dsc-login-form-button">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );

}

export default Login;