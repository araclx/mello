import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '@rebass/preset'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './organisms/app'
import reportWebVitals from './reportWebVitals'
import { AUTH0_DOMAIN, AUTH0_CLIENTID } from './utils/env'

class Index extends React.Component {
	render() {
		return (
			<React.StrictMode>
				<Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENTID} redirectUri={window.location.origin}>
					<ThemeProvider theme={theme}>
						<Router>
							<Route exact path='/' component={App} />
						</Router>
					</ThemeProvider>
				</Auth0Provider>
			</React.StrictMode>
		)
	}
}

render(<Index />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
