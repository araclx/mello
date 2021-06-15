import {Flex, Text, Box, Link} from 'rebass'

function App() {
	return (
		<Flex
		  px={2}
		  color='white'
		  bg='black'
		  alignItems='center'>
		  <Text p={2} fontWeight='bold'>Mello Public NotEvenAlpha 0.0.1-dev</Text>
		  <Box mx='auto' />
		  <Link variant='nav' color="white" href='#!'>
		    Login
		  </Link>
		</Flex>
	)
}

export default App
