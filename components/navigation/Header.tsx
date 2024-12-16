import { Routes } from '@/constants/enums'
import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'

const Header = () => {
	return (
		<header className='flex items-center justify-between h-10 md:h-20'>
			<Link href={Routes.ROOT}>🍕 Pizza</Link>
			<NavLinks />
		</header>
	)
}

export default Header
