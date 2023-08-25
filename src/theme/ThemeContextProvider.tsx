import { useColorTheme } from './use-color-theme';
import { createTheme, Theme } from '@mui/material';
import { ColorMode } from '../enums/color-mode.enum';
import { createContext, FC, PropsWithChildren, useContext } from 'react';

type ThemeContextType = {
    mode: string;
    toggleColorMode: () => void;
    theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
    mode: ColorMode.LIGHT,
    toggleColorMode: () => {},
    theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const value = useColorTheme();
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
