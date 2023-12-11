import { combineClasses } from "@/utils/style"
import { Box, Button, Typography } from "@mui/material"
import React from "react"
import classes from "./Sidebar.module.scss"

export interface ISidebarMenuProps {
  icon: React.ReactNode
  menu: string
  isActive?: boolean
}
export const SidebarMenu: React.FC<ISidebarMenuProps> = ({ icon, menu, isActive }) => {
  return (
    <Button className={combineClasses([classes.Menu, !!isActive && classes.Active])} disableRipple={false}>
      <Box className={classes.Icon}>{icon}</Box>
      <Typography>{menu}</Typography>
    </Button>
  )
}
