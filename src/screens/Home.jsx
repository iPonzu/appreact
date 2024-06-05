import _header from '../components/_header'
import React, { useState } from 'react'

export default function Home(){
    const [value, setValue] = useState('')
    const [tax, setTax] = useState('')

    const handleCalculate = () => {
        const taxValue = value * 0.6
        setTax(taxValue)
    }

    return(
        <>
            <_header />
            <div>
                {/*TODO>> start tax calculator */}
            </div>
            
        </>
    )
}