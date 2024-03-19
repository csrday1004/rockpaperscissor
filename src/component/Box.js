import React from 'react'

const Box = ({data,who,myResult,comResult}) => {
  return (
    <div className='box'>
      <h1>{who}</h1>
      <img src={data?data:'https://cdna.artstation.com/p/assets/images/images/061/938/632/original/derend-marvel-ezgif-com-gif-maker-1.gif?1681968838'} alt='가위바위보'/>
      <h2>{who==='나'?myResult:comResult}</h2>
    </div>
  )
}

export default Box