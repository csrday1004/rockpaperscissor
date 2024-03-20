import React from 'react'

const Box = ({data,who,result}) => {

  const resultStyle = () =>{
    switch(result){
      case 'Win':
        return { background: 'blue' };

      case 'Lose':
        return { background: 'red', opacity:0.3};

      case 'Tie':
        return { background: 'green' };
      default:
        return {};
    }
    
  }

  return (
    <div className='box' style={resultStyle()}>
      <h1>{who}</h1>
      <img src={data?data:'https://cdna.artstation.com/p/assets/images/images/061/938/632/original/derend-marvel-ezgif-com-gif-maker-1.gif?1681968838'} alt='가위바위보'/>
      <h2>{result}</h2>
    </div>
  )
}

export default Box