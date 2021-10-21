import Counter from './components/Counter'
import CounterActions from './components/CounterActions'
import { connect } from "react-redux"
import Header from './components/Header'
import Footer from './components/Footer'
import {routes} from './routes'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

const mapStateToProps = state => ({
	dark: state.site.dark,
	user: state.auth.user
})
function App({ dark, user }) {

	return (
		<Router>
			<div className={dark ? 'dark' : 'light'}>
				<Header/>
				{/*<Counter />*/}
				{/*<CounterActions />*/}
				<Switch>
					{routes.map(route => (
						<Route exact={route.exact} path={route.path} render={() => {
							if (route.auth && !user) {
								return <Redirect to="/login"/>
							}
							return <route.component/>
						}}/>
					))}
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
}

export default connect(mapStateToProps)(App);
