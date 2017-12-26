import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>;
const SurverNew = () => <h2>SurverNew</h2>;

class App extends React.Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		// Container for materiul UI requires
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={SurverNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
