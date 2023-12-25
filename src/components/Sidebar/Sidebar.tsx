import React, { useState } from "react"
import classes from "./Sidebar.module.scss"
import { Box, Input, InputAdornment, Typography } from "@mui/material"
import Logo from "@/assets/logo.png"
import { SidebarMenu } from "./SidebarMenu"
import {
  ArrowSquare,
  Box1,
  Building,
  Data,
  Folder,
  Gps,
  Map,
  Map1,
  Radar2,
  RouteSquare,
  Routing,
  SearchNormal1,
  Setting5,
  Ship,
  User,
} from "iconsax-react"
import { combineClasses } from "@/utils/style"

export interface ISidebarProps {
  isFloating?: boolean
  isExpand?: boolean
}
const Sidebar: React.FC<ISidebarProps> = ({ isFloating = false, isExpand: defaultExpand = true }) => {
  const [isExpand, setIsExpand] = useState(defaultExpand)

  return (
    <Box className={combineClasses([classes.Container, !isExpand && classes.Collapse, isFloating && classes.Floating])}>
      <Box className={classes.Header}>
        <img src={Logo} alt="Mantraocean logo" onClick={() => setIsExpand(!isExpand)} />
        <Box>
          <Typography className={classes.Title}>Mantraocean</Typography>
          <Typography className={classes.Subtitle}>Mantraocean.com</Typography>
        </Box>
      </Box>
      <Input
        className={classes.InputSearch}
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchNormal1 />
          </InputAdornment>
        }
      />
      <Box className={classes.ListMenu}>
        <SidebarMenu icon={<Map1 />} menu="Live Map" isActive />
        <SidebarMenu icon={<RouteSquare />} menu="Vessel" />
        <SidebarMenu icon={<Data />} menu="Port" />
        <SidebarMenu icon={<ArrowSquare />} menu="Lighthouses" />
        <SidebarMenu icon={<Building />} menu="Companies" />
        <Box className={classes.InnerMenu}>
          <SidebarMenu icon={<Radar2 />} menu="Station" isActive />
          <SidebarMenu icon={<Folder />} menu="Database" />
          <SidebarMenu icon={<Map />} menu="Cover your area" />
          <SidebarMenu icon={<Routing />} menu="Free AIS Receiver" />
          <SidebarMenu icon={<Gps />} menu="Report Position" />
        </Box>
        <SidebarMenu icon={<Ship />} menu="Manage Fleet" />
        <SidebarMenu icon={<Box1 />} menu="Container" />
        <SidebarMenu icon={<Setting5 />} menu="Settings" />
        <SidebarMenu icon={<User />} menu="Account" />
      </Box>
    </Box>
  )
}

export default Sidebar
