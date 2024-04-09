import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const ThemeProvider= ThemeContext.Provider// just a different syntax

//Yahan humne direct hi ek custom hook banake usecontext use krliya ....abb jahan bhi usecontext ki jarurat pade to useTheme use kr lo
export default function useTheme(){
    return useContext(ThemeContext);
}