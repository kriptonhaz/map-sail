import { createTheme } from "@mui/material"
import { spacing } from "./spacing"
import { palette } from "./palette"
import { typography } from "./typography"
import { shadowsArray } from "./shadows"
import { components } from "./components"

export const theme = createTheme({
  spacing: spacing,
  typography: typography,
  palette: palette,
  components: components,
  shadows: shadowsArray,
  shape: {
    borderRadius: 8,
  },
})
