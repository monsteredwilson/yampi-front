import { createContext, useState } from "react";

export const UserContext = createContext({})

export function UserProvider({children}){

	return (
		<UserContext.Provider value={{}}>
			{children}
		</UserContext.Provider>
	)
}