'use client'

import { links } from '@/constants/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
	const path = usePathname()
	console.log(path)

	return (
		<nav>
			<ul className='flex gap-4'>
				{links.map(({ href, id, text }) => (
					<li key={id}>
						<Link
							href={href}
							className={`text-lg ${
								path === href ? 'text-primary font-bold' : 'text-slate-950'
							} font-normal`}
						>
							{text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavLinks
