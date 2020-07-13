import React from 'react'
import OptionList from '../common/OptionList'
import './Option.css'
function Option()
{
  const names = ['Places to stay','Monthly stays','Experience','Online Experience']
  const optionsName = names.map(optionsn => <OptionList opti ={optionsn} ></OptionList>)

    return <div>{optionsName}</div>
    
    
}
export default Option