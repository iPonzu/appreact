import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import '../components/css/_global.css'
import { useState } from "react";

export default function RecuperarSenha(){
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const recuperarSenha = async () => {
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            navigate('/')
        } catch (error) {
            alert(`Email não existente ${error}`)
        }
    }
    return(
        <>
            <main className='form-signin w-100 d-flex justify-content-center align-items-center vh-100'>
                <form onSubmit={recuperarSenha}>
                    <h3 className='mb-3 text-white w-60'>
                        Recuperar senha
                        <Image
                            style={{paddingLeft: '30px', width: '80px'}}
                            src="/images/forgotPasswordLogo.png" 
                        />
                    </h3>
                    <div className='form-floating p-0'>
                        <input 
                            type='email' 
                            className='form-control'
                            id='floatingInput'  
                            placeholder='Email'
                            style={{
                                backgroundColor: 'grey',
                                color: 'black'
                            }} 
                        />
                        <label htmlFor='floatingInput'>Email</label>
                    </div>
                    <button 
                        type='submit' 
                        className='btn btn-success mt-2'
                        onClick={recuperarSenha}
                    >
                        Enviar
                    </button>
                    <button
                        style={{ display: "flex", gap: '90px' }}
                        type='button'
                        className='btn btn-primary mt-2 mr-10'
                        onClick={() => navigate('/')}
                    >
                        Voltar ao login
                    </button>
                </form>
            </main>
        </>
    )
}