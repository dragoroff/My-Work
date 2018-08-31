import React from 'react';
import Header from './Header';

export default ({children}) => {
  return (
    <div>
      <Header/>
      <h3>{children}</h3>
    </div>
  )
}
