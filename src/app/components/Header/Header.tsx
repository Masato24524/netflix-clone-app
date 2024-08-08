'use client'

import React from 'react'
import useProps from './useProps'
import Layout from './Layout'

const Header = () => {
  return <Layout {...useProps()} />
}

export default Header
