import {Box, Card, CardContent, CardHeader, Chip, IconButton, Stack, TextField, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from "react";

export const DestinationKeywordInputCard = ({keywords, onDeleteDestination, onDeleteKeyword, onAddKeyword}) => {
  const [text, setText] = useState('');

  function handleEnterKeyDownEvent(event) {
    if (event.key !== 'Enter') {
      return;
    }

    if (text === "") {
      return;
    }

    onAddKeyword(text);

    setText("");
  }

  function handleKeyDownEvent(event) {
    handleEnterKeyDownEvent(event);
  }

  function handleTextFieldChange(event) {
    event.preventDefault();

    setText(() => event.target.value);
  }

  return (
      <Card>
        <CardHeader
            title={"여행지"}
            action={
              <IconButton
                  onClick={onDeleteDestination}
              >
                <DeleteIcon/>
              </IconButton>
            }
        ></CardHeader>
        <CardContent>
          <Stack spacing={2}>
            <Box>
              {
                keywords.map((keyword, index) => (
                    <Chip label={keyword} key={index} onDelete={() => onDeleteKeyword(index)}></Chip>
                ))
              }
            </Box>
            <TextField label={"키워드"} value={text} onChange={handleTextFieldChange} onKeyDown={handleKeyDownEvent}></TextField>
          </Stack>
        </CardContent>
      </Card>
  );
}