import imgMap from "@/assets/map-preview.jpg"
import { primary } from "@/themes/ts/colors"
import { Box, Button, Card, Grid, Grow, MenuItem, MenuList, Paper, Popper, Stack, Typography } from "@mui/material"
import { ArrowDown2, Calendar2, Export } from "iconsax-react"
import React, { useRef } from "react"
import CardStatistic from "../common/CardStatistic"
import TableVesselReport from "../common/TableVesselReport"
import RevenueForecaseChart from "./RevenueForecaseChart"

const DatabaseScreen: React.FC = () => {
  const anchorRef = useRef<HTMLDivElement>(null)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  /* const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  } */

  return (
    <Box>
      <Stack sx={{ mb: 8 }} direction={"row"} justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight={"semiBold"}>
          Database
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button className="btn-white" endIcon={<Calendar2 color={primary[500]} size={18} />}>
            Calendar
          </Button>
          <Button className="btn-white" endIcon={<Export color={primary[500]} size={18} />}>
            Export
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={4}>
        <Grid item md={3}>
          <CardStatistic label="Vessel Registered" value={231802} statistic={10.12} />
        </Grid>
        <Grid item md={3}>
          <CardStatistic label="Companies Registered" value={52153} statistic={-8.3} />
        </Grid>
        <Grid item md={3}>
          <CardStatistic label="Business Sectors" value={2100} statistic={10.12} />
        </Grid>
        <Grid item md={3}>
          <CardStatistic label="Country Registered" value={12} statistic={-8.3} />
        </Grid>
        <Grid item md={6}>
          <Card sx={{ height: "100%" }}>
            <Typography color="text.secondary" mb={4} fontWeight={"medium"}>
              Working Area
            </Typography>
            <img src={imgMap} alt="map" style={{ width: "100%", height: "400px" }} />
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>
            <Stack
              direction="row"
              sx={{ mb: 4, position: "relative" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography color="text.secondary" fontWeight={"medium"}>
                Revenue Forecast
              </Typography>
              <Button
                variant="outlined"
                sx={{ borderColor: "transparent" }}
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                endIcon={<ArrowDown2 size={20} />}
                onClick={handleToggle}
              >
                Last 6 Monts
              </Button>

              <Popper open={open} anchorEl={anchorEl} sx={{ zIndex: 1000 }} transition>
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps}>
                    <Paper elevation={2}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        <MenuItem>Last 3 Months</MenuItem>
                        <MenuItem>Last 6 Months</MenuItem>
                        <MenuItem>Last Year</MenuItem>
                      </MenuList>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Stack>
            <RevenueForecaseChart />
          </Card>
        </Grid>
        <Grid item md={12}>
          <TableVesselReport />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DatabaseScreen
