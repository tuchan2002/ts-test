import { createContext, ReactNode } from "react";

interface ProgressContextProviderProps {
    children: ReactNode;
}
interface ProgressContextDefault {
    lastTime: string;
    status: string;
}
const progressDefault: ProgressContextDefault = {
    lastTime: "12/7/2022",
    status: "In Progress",
};
export const ProgressContext = createContext(progressDefault);

const ProgressContextProvider = ({
    children,
}: ProgressContextProviderProps) => {
    return (
        <ProgressContext.Provider value={progressDefault}>
            {children}
        </ProgressContext.Provider>
    );
};

export default ProgressContextProvider;
