import React from 'react'
import { Button } from './Button'

const onClick = () => {
    console.log("Click");
}

export const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={'green'} btnTxt={"Add"} onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Title Default",
}
