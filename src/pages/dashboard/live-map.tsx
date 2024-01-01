import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";

const LiveMapScreen = lazy(() => import("@/core/dashboard/map"));

const LiveMapPage: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LiveMapScreen />
    </Suspense>
  );
};

export default LiveMapPage;
