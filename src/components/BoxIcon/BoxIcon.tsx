import { TVariant } from "@/themes/ts/colors"
import { Box, BoxProps } from "@mui/material"
import React from "react"
import classes from "./BoxIcon.module.scss"
import { combineClasses } from "@/utils/style"

export interface IBoxIconProps extends BoxProps {
  icon: React.ReactNode
  color: TVariant
}
const BoxIcon: React.FC<IBoxIconProps> = ({ icon, color, ...props }) => {
  return (
    <Box {...props} className={combineClasses([classes.Container, color])}>
      {icon}
    </Box>
  )
}

export default BoxIcon
