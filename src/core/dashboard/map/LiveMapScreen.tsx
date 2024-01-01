import Checkbox from "@/components/Checkbox";
import {
  Box,
  Button,
  ClickAwayListener,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import {
  ArrowRight2,
  Chart,
  Colorfilter,
  Judge,
  Layer,
  Add,
  Minus,
} from "iconsax-react";
import React, { useState } from "react";
import classes from "./LiveMapScreen.module.scss";
import iconCargo from "@/assets/cursor/cargo-icon.svg";
import iconTank from "@/assets/cursor/tank-icon.svg";
import iconPassenger from "@/assets/cursor/passanger-icon.svg";
import iconFishing from "@/assets/cursor/fishing-icon.svg";
import iconHighspeed from "@/assets/cursor/highspeed-icon.svg";
import iconTugs from "@/assets/cursor/tugs-icon.svg";
import iconPleasure from "@/assets/cursor/pleasure-icon.svg";
import iconNavAids from "@/assets/cursor/navaids-icon.svg";
import iconUnspecific from "@/assets/cursor/unspecific-icon.svg";
import { combineClasses } from "@/utils/style";
import DetailLocation from "./DetailLocation";
import { RenderMap } from "@/components/Map";
import { useAisHook } from "@/hooks/use-ais.hooks";
import Sidebar from "@/components/Sidebar";
import { useForm, FormProvider } from "react-hook-form";

enum EWidget {
  NONE,
  SHIP_TYPE,
  CURRENT_STATUS,
}

export interface ISearchForm {
  searchData: string;
}

const LiveMapScreen: React.FC = () => {
  const [activeWidgetDetail, setActiveWidgetDetail] = useState<EWidget>(
    EWidget.NONE
  );
  const [zoom, setZoom] = useState<number>(7);
  const { listAllShip } = useAisHook();
  const { data: dataShip } = listAllShip();
  const [selectedShip, setSelectedShip] = useState<string | null>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const methods = useForm<ISearchForm>({
    defaultValues: {
      searchData: "",
    },
  });

  const closeDetailWidget = (event: MouseEvent | TouchEvent) => {
    // TODO : Bug to click widget detail
    const element = event.target as HTMLElement;
    const tagName = element.tagName?.toLowerCase();
    let parentEl = null;
    if (/button/.test(tagName)) {
      parentEl = element;
    } else if (/svg/.test(tagName)) {
      parentEl = element.parentElement;
    } else if (/path/.test(tagName)) {
      parentEl = element.parentElement?.parentElement;
    }
    if (
      activeWidgetDetail !== EWidget.NONE &&
      parentEl?.getAttribute("data-widget") !== "top"
    ) {
      setActiveWidgetDetail(EWidget.NONE);
    }
  };

  const increaseZoom = () => {
    setZoom(zoom + 1);
  };

  const decreaseZoom = () => {
    setZoom(zoom - 1);
  };

  const handleSelectShip = (shipId: string) => {
    setSelectedShip(shipId);
  };

  const handleCloseMarkerDetail = () => {
    setSelectedShip(null);
  };

  const handleClickResult = (userId: number) => {
    let selectedResult = dataShip?.data.filter((ar) => ar.UserID === userId)[0];
    methods.setValue("searchData", "");
    if (selectedResult) {
      map?.setView([selectedResult?.Latitude, selectedResult?.Longitude], 15);
      handleSelectShip(selectedResult.Uuid);
    }
  };

  return (
    <Box className={classes.Container}>
      <FormProvider {...methods}>
        <form>
          <Sidebar
            isFloating
            isExpand={false}
            handleClickResult={handleClickResult}
          />
        </form>
      </FormProvider>
      <RenderMap
        map={map}
        setMap={setMap}
        zoom={zoom}
        shipData={dataShip?.data}
        selectShip={handleSelectShip}
      />

      <ClickAwayListener onClickAway={closeDetailWidget}>
        <Box
          className={combineClasses([
            classes.TopWidgetDetail,
            activeWidgetDetail === EWidget.SHIP_TYPE && classes.Show,
          ])}
        >
          <Box className={classes.Header}>
            <Box className={classes.Icon}>
              <Colorfilter />
            </Box>
            <Typography sx={{ flex: 1 }}> Ship Type</Typography>
            <ArrowRight2 size={16} color="#00FFFF" />
          </Box>
          <Box className={classes.ListOption}>
            <Checkbox
              label={
                <div>
                  <img src={iconCargo} />
                  <p>Cargo</p>
                </div>
              }
            />
            <Checkbox
              label={
                <div>
                  <img src={iconTank} />
                  <p>Tank</p>
                </div>
              }
            />
            <Checkbox
              label={
                <div>
                  <img src={iconPassenger} />
                  <p>Passenger</p>
                </div>
              }
            />
            <Checkbox
              label={
                <div>
                  <img src={iconFishing} />
                  <p>Fishing</p>
                </div>
              }
            />
            <Checkbox
              label={
                <div>
                  <img src={iconHighspeed} />
                  <p>Highspeed</p>
                </div>
              }
            />
            <Checkbox
              label={
                <div>
                  <img src={iconTugs} />
                  <p>Tugs & Special Craft</p>
                </div>
              }
            />
            <Checkbox
              label={
                <div>
                  <img src={iconPleasure} />
                  <p>Pleasure</p>
                </div>
              }
            />
            <Checkbox
              label={
                <div>
                  <img src={iconNavAids} />
                  <p>Navigation Aids</p>
                </div>
              }
            />
            <Checkbox
              label={
                <div>
                  <img src={iconUnspecific} />
                  <p>Unspesific</p>
                </div>
              }
            />
            <FormControlLabel
              label="Filter Active"
              control={<Switch sx={{ mr: 3, ml: 2 }} />}
            />
          </Box>
        </Box>
      </ClickAwayListener>
      <ClickAwayListener onClickAway={closeDetailWidget}>
        <Box
          className={combineClasses([
            classes.TopWidgetDetail,
            activeWidgetDetail === EWidget.CURRENT_STATUS && classes.Show,
          ])}
        >
          <Box className={classes.Header}>
            <Box className={classes.Icon}>
              <Layer />
            </Box>
            <Typography sx={{ flex: 1 }}>Current Status</Typography>
            <ArrowRight2 size={16} color="#00FFFF" />
          </Box>
          <Box className={classes.ListOption}>
            <Checkbox label={"Underway"} align="center" />
            <Checkbox label={"Anchored"} align="center" />
            <Typography>Load Condition</Typography>
            <Checkbox label={"Unknown"} align="center" />
            <Checkbox label={"In Ballast"} align="center" />
            <Checkbox label={"Partially Laden"} align="center" />
            <Checkbox label={"Laden"} align="center" />
          </Box>
        </Box>
      </ClickAwayListener>

      <Box className={classes.TopWidget}>
        <Button
          className={classes.Menu}
          data-widget="top"
          onClick={() => setActiveWidgetDetail(EWidget.SHIP_TYPE)}
        >
          <Colorfilter />
        </Button>
        <Button
          className={classes.Menu}
          data-widget="top"
          onClick={() => setActiveWidgetDetail(EWidget.CURRENT_STATUS)}
        >
          <Layer />
        </Button>
        <Button className={classes.Menu} data-widget="top">
          <Chart />
        </Button>
        <Button className={classes.Menu} data-widget="top">
          <Judge />
        </Button>
      </Box>
      <Box className={classes.ZoomWidget}>
        <Button className={classes.Menu} onClick={increaseZoom}>
          <Add />
        </Button>
        <Button className={classes.Menu} onClick={decreaseZoom}>
          <Minus />
        </Button>
      </Box>

      {selectedShip && (
        <DetailLocation
          shipData={dataShip?.data.filter((ar) => ar.Uuid === selectedShip)[0]}
          onClose={handleCloseMarkerDetail}
        />
      )}
    </Box>
  );
};

export default LiveMapScreen;
