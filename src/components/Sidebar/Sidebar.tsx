import React, { useEffect, useState } from "react";
import classes from "./Sidebar.module.scss";
import { Box, Input, InputAdornment, Typography } from "@mui/material";
import Logo from "@/assets/logo.png";
import { SidebarMenu } from "./SidebarMenu";
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
} from "iconsax-react";
import { combineClasses } from "@/utils/style";
import { useFormContext } from "react-hook-form";
import { ISearchForm } from "@/core/dashboard/map/LiveMapScreen";
import SearchResult from "../Search/SearchResult";
import { queryClient } from "@/service/QueryClient";
import { IShipData, IShipResponse } from "@/interfaces/ais.interface";

export interface ISidebarProps {
  isFloating?: boolean;
  isExpand?: boolean;
  handleClickResult?: (userId: number) => void;
}
const Sidebar: React.FC<ISidebarProps> = ({
  isFloating = false,
  isExpand: defaultExpand = true,
  handleClickResult,
}) => {
  const [isExpand, setIsExpand] = useState(defaultExpand);
  const [searchResult, setSearchResult] = useState<IShipData[]>([]);
  const [showResult, setShowResult] = useState(false);
  const { register, watch } = useFormContext<ISearchForm>();
  const dataShip: IShipResponse | undefined = queryClient.getQueryData([
    "ais-all-ship",
  ]);

  useEffect(() => {
    if (dataShip && watch("searchData").length > 0) {
      let filterShip = dataShip.data.filter(
        (ar) =>
          ar.Name.toLowerCase().indexOf(watch("searchData").toLowerCase()) >
            -1 || ar.UserID.toString() === watch("searchData")
      );
      setSearchResult(filterShip);
      setShowResult(true);
    } else if (watch("searchData").length === 0) {
      setShowResult(false);
    }
  }, [dataShip, watch("searchData")]);

  return (
    <Box
      className={combineClasses([
        classes.Container,
        !isExpand && classes.Collapse,
        isFloating && classes.Floating,
      ])}
    >
      <SearchResult
        dataResult={searchResult}
        isHide={!showResult}
        onClickResult={handleClickResult}
      />
      <Box className={classes.Header}>
        <img
          src={Logo}
          alt="Mantraocean logo"
          onClick={() => setIsExpand(!isExpand)}
        />
        <Box>
          <Typography className={classes.Title}>Mantraocean</Typography>
          <Typography className={classes.Subtitle}>Mantraocean.com</Typography>
        </Box>
      </Box>
      <Input
        {...register("searchData")}
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
  );
};

export default Sidebar;
