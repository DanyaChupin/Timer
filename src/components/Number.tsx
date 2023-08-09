import { FC } from 'react'
interface INumber {
	time: number
	num: number
}

const Number: FC<INumber> = ({ num, time }) => {
	return <span>{('0' + Math.floor((time / num) % 60)).slice(-2)}</span>
}

export default Number
