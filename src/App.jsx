import {useState} from 'react'
import {Box, Button, Container, Stack,} from "@mui/material";
import {DestinationKeywordInputCard} from "./components/DestinationKeywordInputCard.jsx";
import {KoreanLocaleDatePicker} from "./components/KoreanLocaleDatePicker.jsx";
import {TravelAreaSelect} from "./components/TravelAreaSelect.jsx";
import axios from "axios";

const API_URL = "http://localhost:8080";

function App() {
  const [area, setArea] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [destinations, setDestinations] = useState([
    {
      keywords: [
        "경복궁"
      ]
    },
    {
      keywords: [
        "피자",
        "경치"
      ]
    },
    {
      keywords: [
        "커피",
        "디저트"
      ]
    }
  ]);

  async function handleGenerateButtonClick() {
    await axios.create()
        .post(
            API_URL,
            {
              area: area,
              startDate: startDate,
              endDate: endDate,
              destinations: destinations
            },
            {}
        )
        .then(response => {
          if (response.status !== 200) {
            return;
          }

          console.log("결과페이지로 이동");
          console.log(response.data);

        })
        .catch(error => {
          console.log(error);
        });
  }

  return (
      <Container maxWidth={"sm"}>
        <Box>
          <Stack spacing={2}>
            <TravelAreaSelect></TravelAreaSelect>
            <KoreanLocaleDatePicker label={"여행시작일"}></KoreanLocaleDatePicker>
            <KoreanLocaleDatePicker label={"여행종료일"}></KoreanLocaleDatePicker>
            {
              destinations.map((destination, index) => (
                  <DestinationKeywordInputCard keywords={destination.keywords}></DestinationKeywordInputCard>
              ))
            }
            <Button variant={"outlined"}>여행지 추가</Button>
            <Button variant={"contained"} onClick={handleGenerateButtonClick} sx={{display: "block"}}>여행 계획 생성</Button>
          </Stack>
        </Box>
      </Container>
  )
}

export default App
