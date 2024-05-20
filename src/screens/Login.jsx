import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase/_login'
import '../components/css/_global.css'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = async (event) => {
        event.preventDefault();
        try{
            const usuario = await signInWithEmailAndPassword(auth, email, password)
            console.log(usuario)
            navigate('/Home')
        }catch(error){
            alert(`Credenciais incorretas ${error}`)
        }
    }

    return (
        <> 
            <main className='form-signin w-100 d-flex justify-content-center align-items-center vh-100'>
                <form onSubmit={login}>
                    <h3 className='mb-3 text-white w-60'>
                        Acesse com suas credenciais
                    <Image
                        style={{width: '80px', paddingLeft: '30px'}}
                        src="/images/loginLogo.png" 
                    />
                    </h3>
                    <div className='form-floating p-0'>
                        <input 
                            type='email' 
                            className='form-control'
                            id='floatingInput'  
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                backgroundColor: 'grey',
                                color: 'black',
                            }} 
                        />
                        <label htmlFor='floatingInput'>Email</label>
                    </div>
                    <div className='form-floating p-0'>
                        <input  
                            type="password" 
                            className="form-control"
                            id="floatingPassword" 
                            placeholder="*****"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                backgroundColor: 'grey',
                                color: 'black'
                            }}
                        />
                        <label htmlFor="floatingInput">Senha</label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                        <button
                            className="btn btn-outline-success mt-2"
                            type="submit"
                            onClick={login}
                            >
                            Acessar
                        </button>
                        <button
                            className="btn btn-outline-warning mt-2"
                            onClick={() => navigate('/Cadastro')}
                        >
                            Cadastrar-se
                        </button>
                        <button
                            className='btn btn-outline-danger mt-2'
                            onClick={() => navigate('/RecuperarSenha')}
                        >
                            Recuperar senha
                        </button>
                    </div>       
                </form>
            </main>
        </>
    )
}