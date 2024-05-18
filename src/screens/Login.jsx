import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import '../components/css/_global.css'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    return(
        <> 
            <main className='form-signin w-100 d-flex justify-content-center align-items-center vh-100'>
                 <form>
                    <Image
                        src="/images/loginLogo.png" 
                    />
                    <h3 className='mb-3 text-white w-60'>Acesse com suas credenciais</h3>
                    <div className='form-floating p-0'>
                        <input 
                            type='email' 
                            className='form-control'
                            id='floatingInput'  
                            placeholder='Email'
                            style={{
                                backgroundColor: 'grey'
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
                            style={{
                                backgroundColor: 'grey'
                            }}
                        />
                        <label htmlFor="floatingInput">Senha</label>
                    </div>
                    <button 
                        className="btn btn-success w-20 py-2 mt-2" 
                        type="submit"
                        onClick={() => navigate("/Home")}>
                        Acessar
                    </button>                 
                </form>
            </main>
        </>
    )
}   