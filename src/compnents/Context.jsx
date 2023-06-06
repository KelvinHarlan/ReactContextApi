import { createContext, createElement } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const pessoa = {
        nome: 'Maria',
        idade: 83,
        altura: 1.70,
        salarioBruto: 1.500,
        dividaAtiva: true,
        divida: 0.200,
        salarioLiquido: (a,b)=>{return a - b}
    }

    return <ThemeContext.Provider value={{ pessoa }}>{children}</ThemeContext.Provider>
}