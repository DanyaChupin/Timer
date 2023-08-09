import { FC } from 'react'

interface IButton {
	title: string
	onClick: () => void
}

export const CButton: FC<IButton> = ({ title, onClick }) => {
	return (
		<button className='border rounded-lg py-1 px-3.5' onClick={onClick}>
			{title}
		</button>
	)
}
