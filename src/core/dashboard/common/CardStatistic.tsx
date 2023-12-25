import { Box, Typography } from "@mui/material"
import React, { useMemo } from "react"
import classes from "./CardStatistic.module.scss"
import { TrendDown, TrendUp } from "iconsax-react"
import { combineClasses } from "@/utils/style"

export interface ICardStatisticProps {
  label: string
  value: number
  statistic: number
}
const CardStatistic: React.FC<ICardStatisticProps> = ({ label, value, statistic }) => {
  const isPositive = useMemo(() => (statistic >= 0 ? true : false), [statistic])

  return (
    <Box className={classes.Container}>
      <div className={classes.TopElement}></div>
      <Box>
        <Typography className={classes.Label}>{label}</Typography>
        <Typography className={classes.Value}>{value}</Typography>
        <Box className={combineClasses([classes.StatisticValue, isPositive ? classes.Up : classes.Down])}>
          <Box className={classes.TrendIcon}>{isPositive ? <TrendUp /> : <TrendDown />}</Box>
          <Typography>
            {isPositive ? "+" : ""}
            {statistic}%
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CardStatistic
