import { useState, useMemo } from 'react';
import { themeSettings } from './theme';
import { ColorMode } from '../enums/color-mode.enum';
import { createTheme, PaletteMode } from '@mui/material';

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>(ColorMode.DARK);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT));
  }

  const modifiedTheme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
