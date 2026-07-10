import {useLocation} from "react-router-dom";
import {Box, Container, Stack, Typography} from "@mui/material";
import {
  Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem,
  TimelineOppositeContent, TimelineSeparator
} from "@mui/lab";
import {TopAppBar} from "../components/TopAppBar.jsx";

export const ResultPage = () => {
  
  const location = useLocation();

  const destinations = location.state?.destinations || [];

  return (
      <Container maxWidth="sm" sx={{ paddingX: 0, height: '100vh' }}>
        <TopAppBar></TopAppBar>
        <Timeline>
          {
            destinations.map((destination, index) => {
              const isLastElement = index === destinations.length - 1;

              return (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent>
                      <Stack>
                        <Typography variant="body2">{destination.date}</Typography>
                        <Typography variant="body2">{destination.time}</Typography>
                      </Stack>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot/>
                      {!isLastElement && <TimelineConnector/>}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6">{destination.place}</Typography>
                    </TimelineContent>
                  </TimelineItem>
              );
            })
          }
        </Timeline>
      </Container>
  );
}