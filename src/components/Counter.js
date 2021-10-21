import {useSelector} from 'react-redux';

function Counter() {
	
	const count = useSelector(state => state.counter.value)

	return (
		<div>
			{count}
		</div>
	)
}

export default Counter