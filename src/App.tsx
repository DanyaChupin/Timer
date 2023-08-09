import { useEffect, useState } from 'react'
import './App.css'
import { CButton } from './components/CButton'
import Number from './components/Number'

function App() {
	const [time, setTime] = useState<number>(0)
	const [running, setRunning] = useState<boolean>(false)

	useEffect(() => {
		let interval: number | NodeJS.Timeout | undefined

		if (running) {
			interval = setInterval(() => {
				setTime(prev => prev + 10)
			}, 10)
		} else if (!running) {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [running])

	return (
		<div className=' flex flex-col items-center justify-center py-8'>
			<h1 className='text-2xl font-semibold '>Timer</h1>
			<div className='text-xl font-semibold py-2'>
				<Number num={600000} time={time} />
				<span>:</span>
				<Number num={60000} time={time} />
				<span>:</span>
				<Number num={1000} time={time} />
			</div>
			<div className='w-1/3 max-w-sm flex flex-row justify-evenly'>
				{running ? (
					<CButton title='Stop' onClick={() => setRunning(false)} />
				) : (
					<CButton title='Start' onClick={() => setRunning(true)} />
				)}

				<CButton title='Reset' onClick={() => setTime(0)} />
			</div>
		</div>
	)
}

export default App
