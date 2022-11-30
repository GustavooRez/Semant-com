import { ReactNode, createContext } from 'react';
import { LoadingProvider } from "../Loading/LoadingContext";

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalContext = createContext({});

export function GlobalProvider({ children }: GlobalProviderProps) {

    return (
        <GlobalContext.Provider value="">
            <LoadingProvider>
                {children}
            </LoadingProvider>
        </GlobalContext.Provider>
    )
}