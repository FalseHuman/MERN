import React, {useState} from 'react';

export const AuthPage = () =>{
    const [form, setForm] = useState ({
        email: '', password: ''
    })
    const changeHandler = event =>{
        setForm({ ...form, [event.target.name]: event.target.value})
    }
    return (
        <div className="row">
            <div className="col.s6.offset-s3">
                <h1>SmallUrl</h1>
                <div className="card white darken-1">
                    <div className="card-content white-text">
                    <span className="card-title" style={{color: "black"}}>Авторизация</span>
                        <div>
                            <div className="input-field">
                            <input 
                            placeholder="Введите эл.почту" 
                            id="email" 
                            type="text"  
                            name="email"
                            onChange ={changeHandler}
                            />
                            <label Htmlfor="email">Email</label>
                            </div>
                            <div className="input-field">
                            <input 
                            placeholder="Введите пароль" 
                            id="password"
                            type="password" 
                            name="password"
                            onChange ={changeHandler}
                            />
                            <label Htmlfor="email">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div class="card-action">
                        <button className="btn red darken-4" style={{marginRight: 10}}>Войти</button>
                        <button className="btn black lighten-1">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
