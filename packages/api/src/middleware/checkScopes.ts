import jwtAuthz from 'express-jwt-authz'

export function checkScopes(checkAllScopes: boolean, ...scopes: string[]) {
	return jwtAuthz(scopes, { checkAllScopes })
}
