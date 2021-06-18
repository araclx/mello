import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Box, Text } from '@chakra-ui/core'
import React from 'react'

export const Profile = () => {
	const { user, isAuthenticated } = useAuth0()

	if (isAuthenticated) {
		return (
			<div>
				<Box display='flex'>
					<Avatar name={user.name} src={user.picture} />
					<Text marginLeft='10px'>{user.nickname}</Text>
				</Box>
			</div>
		)
	}

	return <h4>You&apos;re not logged.</h4>
}
