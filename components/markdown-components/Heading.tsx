import React from 'react'

const H1: React.FC = (props) => {
  return (
    <h1 {...props} className="text-2xl mb-1"></h1>
  )
}

const H2: React.FC = (props) => {
  return (
    <h2 {...props} className="text-h4 mb-3"></h2>
  )
}

const Heading = {
  H1: H1,
  H2: H2
}

export { Heading }