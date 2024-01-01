import classes from "./SearchResult.module.scss";
import { Box, Button, Typography } from "@mui/material";
import { Ship } from "iconsax-react";
import { combineClasses } from "@/utils/style";
import { IShipData } from "@/interfaces/ais.interface";

interface ISearchResult {
  dataResult?: IShipData[];
  isHide?: boolean;
  onClickResult?: (userId: number) => void;
}

const SearchResult = ({
  dataResult,
  isHide = false,
  onClickResult,
}: ISearchResult) => {
  return (
    <Box
      className={combineClasses([
        classes.Container,
        classes.Floating,
        isHide && classes.Hide,
      ])}
    >
      <Box className={classes.Header}>
        <Box>
          <Typography className={classes.Subtitle}>Search Result</Typography>
        </Box>
      </Box>
      <Box className={classes.ListMenu}>
        {dataResult && dataResult?.length > 0 ? (
          dataResult?.map((item) => {
            return (
              <Button
                disableRipple
                className={combineClasses([classes.Menu, classes.Active])}
                onClick={() => {
                  if (onClickResult) {
                    onClickResult(item.UserID);
                  }
                }}
                key={item.UserID}
              >
                <Box className={classes.Icon}>
                  <Ship />
                </Box>
                <Box>
                  <Typography>{item.Name}</Typography>
                  <Typography>{`MMSI ${item.UserID}`}</Typography>
                </Box>
              </Button>
            );
          })
        ) : (
          <Typography className={classes.Subtitle}>No Result</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SearchResult;
