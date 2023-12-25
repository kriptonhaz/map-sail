import { primary } from "@/themes/ts/colors"
import { Box, Button, Stack, Typography } from "@mui/material"
import { Calendar2, Export } from "iconsax-react"
import React from "react"
import TableVesselReport from "../common/TableVesselReport"

const VesselScreen: React.FC = () => {
  return (
    <Box>
      <Stack sx={{ mb: 6 }} direction={"row"} justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight={"semiBold"}>
          Vessel
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

      <TableVesselReport />
    </Box>
  )
}

export default VesselScreen
