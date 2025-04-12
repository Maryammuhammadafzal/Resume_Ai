import React from 'react'

const Logo = () => {
  return (
    <>
     <svg width="300" height="80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{stopColor:"#4B0082", "stopOpacity":1}} />
      <stop offset="100%" style={{stopColor :"#2E8B57" , stopOpacity:1}} />
    </linearGradient>
  </defs>
  {/* <rect width="100%" height="100%" /> */}
  <text x="20" y="60">
    <tspan className="resume">Resume</tspan>
    <tspan className="ai">Ai</tspan>
  </text>
</svg>
 
    </>
  )
}

export default Logo
