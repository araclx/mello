import React from 'react'
import { Flex, Text, Box } from 'rebass'
import { LoginButton, LogoutButton } from './auth'
import { useAuth0 } from '@auth0/auth0-react'

const NavbarUser = () => {
	const { user, isAuthenticated } = useAuth0()

	if (isAuthenticated) {
		return (
			<div>
				<Box display='flex'>
					<Text marginLeft='10px'>{user.nickname}</Text>
				</Box>
				<LogoutButton />
			</div>
		)
	}

	return <LoginButton />
}

export const Navbar = () => {
	return (
		<Flex px={2} color='white' bg='black' height='70px' alignItems='center'>
			<Text p={2} fontWeight='bold'>
				Mello Public Pre-Alpha
			</Text>
			<Box mx='auto' />
			<NavbarUser />
		</Flex>
	)
}
