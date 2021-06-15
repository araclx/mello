import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Button } from 'rebass'

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()
	return (
		<Button
			onClick={function () {
				loginWithRedirect()
			}}>
			LogIn
		</Button>
	)
}

export const LogoutButton = () => {
	const { logout } = useAuth0()
	return (
		<Button
			onClick={function () {
				logout()
			}}>
			LogOut
		</Button>
	)
}
