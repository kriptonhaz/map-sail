import BoxIcon from "@/components/BoxIcon"
import { Box, Button, Card, Typography } from "@mui/material"
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid"
import { Add, Drop } from "iconsax-react"
import React from "react"
import iconTank from "@/assets/cursor/tank-icon.svg"

const columns: GridColDef[] = [
  { field: "id" },
  {
    field: "country",
    headerName: "Country",
    width: 80,
    sortable: false,
    renderCell: (params: GridCellParams) => {
      return <div>{params.value as React.ReactNode}</div>
    },
  },
  { field: "vesselName", headerName: "Vessel Name", width: 240 },
  {
    field: "photos",
    headerName: "Photos",
    sortable: false,
    width: 130,
    renderCell: (params: GridCellParams) => {
      return <div>{params.value as React.ReactNode}</div>
    },
  },
  {
    field: "destinationPort",
    headerName: "Destination Port",
    width: 180,
  },
  {
    field: "reportedEta",
    headerName: "REPORTED ETA",
    sortable: false,
    width: 180,
  },
  {
    field: "reportedDestination",
    headerName: "REPORTED DESTINATION",
    sortable: false,
    width: 200,
  },
  {
    field: "currentPort",
    headerName: "CURRENT PORT",
    sortable: false,
    width: 180,
  },
  {
    field: "imo",
    headerName: "IMO",
    sortable: false,
    width: 100,
  },
  {
    field: "vesselType",
    headerName: "VESSEL TYPE",
    sortable: false,
    width: 100,
    renderCell: (params: GridCellParams) => {
      return <div>{params.value as React.ReactNode}</div>
    },
  },
  {
    field: "mapIcon",
    headerName: "MAP ICON",
    sortable: false,
    width: 100,
    renderCell: (params: GridCellParams) => {
      return <div>{params.value as React.ReactNode}</div>
    },
  },
  {
    field: "latestTimePosition",
    headerName: "TIME LATEST POSITION",
    sortable: false,
    width: 180,
  },
  {
    field: "latitude",
    headerName: "LATITUDE",
    sortable: false,
    width: 100,
  },
  {
    field: "longitude",
    headerName: "LONGITUDE",
    sortable: false,
    width: 100,
  },
  {
    field: "myNotes",
    headerName: "MY NOTES",
    sortable: false,
    width: 100,
    renderCell: (params: GridCellParams) => {
      return <div>{params.value as React.ReactNode}</div>
    },
  },
]

const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
  id: item,
  country: (
    <img
      className="country"
      style={{ width: "40px", filter: "drop-shadow(0px 0px 0.5px #000)" }}
      src="https://flagsapi.com/ID/flat/64.png"
    />
  ),
  vesselName: "FERRY XVII",
  photos: <img src="https://www.suzukicdn.com/uploads/news/39569618_s.webp" style={{ width: "100px" }} />,
  destinationPort: "SANUR",
  reportedEta: "2023-12-08 08:15 UTC",
  reportedDestination: "Jan 13, 2023",
  currentPort: "NUSA PENIDA",
  imo: "9241061",
  vesselType: <BoxIcon icon={<Drop />} color="danger" />,
  mapIcon: <img src={iconTank} />,
  latestTimePosition: "2023-12-05 01:25 UTC",
  latitude: "19.06134",
  longitude: "-64.77258",
  myNotes: (
    <Button variant="outlined" size="sm" sx={{ borderColor: "transparent" }} startIcon={<Add />}>
      Add
    </Button>
  ),
}))

const TableVesselReport: React.FC = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <Typography variant="subtitle2" fontWeight="bold" mb={1}>
        Vessel Report
      </Typography>
      <Typography color="text.secondary">List of vessel.</Typography>

      <Box mt={3} sx={{ overflowX: "scroll", width: "100%" }}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          rowHeight={130}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          disableColumnMenu
          pageSizeOptions={[5, 10]}
          columnVisibilityModel={{ id: false }}
          disableRowSelectionOnClick
        />
      </Box>
    </Card>
  )
}

export default TableVesselReport
