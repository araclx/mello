import { Profile } from ".prisma/client";

declare global {
	namespace Express {
		interface Request {
			payload?: Profile;
		}
	}
}
