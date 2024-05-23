import auth, { db } from '../firebase/_login'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Image } from 'react-bootstrap'

export default function Cadastro(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const navigate = useNavigate()

    const cadastro = async () => {
        try {
            const usuario = await createUserWithEmailAndPassword(auth, email, password)
            const uid = await usuario.user.uid
            await setDoc(doc(db, 'usuarios', uid), {
                nome: nome,
                email: email,
                password: password
            })
            navigate('/')
        } catch (error) {
            alert(`Algum erro ocorreu, tente novamente ${error}`)
        }
    } 
    return(
        <>
            <main className='form-signin w-100 d-flex justify-content-center align-items-center vh-100'>
                <form onSubmit={cadastro}>
                    <h3 className='mb-3 text-white w-60'>
                        Cadastre-se
                    <Image
                        style={{paddingLeft: '30px', width: '80px'}}
                        src="/images/registerLogo.png" 
                    
                    />
                    </h3>
                    <div className='form-floating p-0'>
                        <input 
                            type='text' 
                            className='form-control'
                            id='floatingInput'  
                            placeholder='Nome'
                            onChange={(e) => setNome(e.target.value)}
                            style={{
                                backgroundColor: 'grey',
                                color: 'black'
                            }} 
                        />
                        <label htmlFor='floatingInput'>Nome completo</label>
                    </div>
                    <div className='form-floating p-0'>
                        <input 
                            type='email' 
                            className='form-control'
                            id='floatingInput'  
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                backgroundColor: 'grey',
                                color: 'black'
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
                    <button 
                        type='submit'
                        className='btn btn-success mt-2'
                        onClick={() => cadastro(navigate('/'))}
                    >
                        Cadastrar
                    </button>
                    <button
                        style={{ display: "flex", gap: '90px' }}
                        type='button'
                        className='btn btn-primary mt-2 mr-10'
                        onClick={() => navigate ('/')}
                    >
                        Voltar ao início
                    </button>
                </form>
            </main>
        </>
    )
}