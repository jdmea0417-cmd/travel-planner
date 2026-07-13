import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Stack, Typography, Button, Snackbar, Alert, CircularProgress, Box, Card, CardContent, TextField } from "@mui/material";
import {
  Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem,
  TimelineOppositeContent, TimelineSeparator
} from "@mui/lab";
import { TopAppBar } from "../components/TopAppBar.jsx";
import { useAccessTokenContext } from "../contexts/AccessTokenContext.jsx";

export const TimelinePage = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const { accessToken } = useAccessTokenContext();

  const travelPlan = location.state?.travelPlan || [];

  function isLoggedIn() {
    return accessToken !== null;
  }

  if (!isLoggedIn()) {
    return (
        <Navigate to="/login"></Navigate>
    );
  }

  return (
      <Container maxWidth="sm" sx={{ paddingX: 0, height: '100vh' }}>
        <TopAppBar/>
        <Stack spacing={2} sx={{ p: 2 }}>
  {travelPlan.destinations?.map((destination, index) => (
    <Card key={index}>
      <CardContent>
        <Typography variant="h6">
          {destination.place}
        </Typography>

        <Typography>
          {destination.date}
        </Typography>

        <Typography>
          {destination.time}
        </Typography>
      </CardContent>
    </Card>
  ))}
</Stack>
      </Container>
  );
}