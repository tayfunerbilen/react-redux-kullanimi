import { useDispatch } from 'react-redux';
import { login } from "../stores/auth"
import { useHistory } from "react-router-dom"

function Login() {

	const history = useHistory()
	const dispatch = useDispatch()
	const handleLogin = () => {
		// istek atıcaksınız
		// data..
		const dummyData = {
			id: 1,
			name: 'Tayfun',
			token: 'qe24525235235235235'
		}
		dispatch(login(dummyData))
		history.push('/')
	}

	return (
		<div style={{background: 'lightblue'}}>
	        <h3>Giriş yap</h3>
			<button onClick={handleLogin}>Giriş yapmak içni tıklayın!</button>
        </div>
	)
}

export default Login