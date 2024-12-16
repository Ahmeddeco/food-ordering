import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='text-center flex gap-4 items-center justify-center h-screen flex-col'>
			<h2 className='text-3xl font-bold'>Not Found</h2>
			<p>Could not find requested resource</p>
			<Button>
				<Link href='/'>Return Home</Link>
			</Button>
		</div>
	)
}
