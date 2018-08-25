import React from 'react'

const LoadingIcon = () => {
  // Taken from: https://loading.io/css/
  // (There are some really beautiful loading icons there)
  return (
    <div className="loading-container">
      <div className="lds-circle"></div>
    </div>
  )
}

export default LoadingIcon;
