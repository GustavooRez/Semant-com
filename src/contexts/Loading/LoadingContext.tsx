import { createContext, ReactNode, useState } from 'react';

interface LoadingContextData {
    changeVisibility(state: boolean): void;
    isVisibility: boolean;
}

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingContext = createContext({} as LoadingContextData);


export function LoadingProvider({ children }: LoadingProviderProps) {

    const [isVisibility, setIsVisibility] = useState(false);

    async function changeVisibility(state: boolean) {
        setIsVisibility(state);
    }

    return (
        <LoadingContext.Provider value={{ changeVisibility, isVisibility }} >
            {children}
        </LoadingContext.Provider>
    )
}