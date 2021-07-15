import React from 'react';
import Header from '../Header/index'

/**
* @author
* @function Layouts
**/

const Layouts = (props) => {
  return(
    <>
    <Header/>
    {props.children}
    
    </>
   )

 }

export default Layouts