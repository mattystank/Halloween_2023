import './App.css';
import { Box, Button, Card, CardContent, Container, List, ListItem, Typography, TextField, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [rsvpList, setRSVPList] = useState([]); // Array to store RSVPs

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRSVP = () => {
    // Update the RSVP list with the new name
    setRSVPList([...rsvpList, name]);
    setName(''); // Clear the input field
  };
  return (
    <div className="App">
      <Container maxWidth="md">
        <div className='divider'></div>
        <Card >
          <CardContent>
            <Container maxWidth="sm">
              <Typography variant='h1'>🎃</Typography>
              <Typography variant='h2'><strong>Stank's Spooktacular Halloween Bash</strong></Typography>
              <Typography gutterBottom variant='h5'> October 28, 2023, at 7:00 PM! </Typography>
            </Container>
            <Container maxWidth="sm">
              <Typography gutterBottom><strong>Get ready for a ghoulishly good time at the most anticipated Halloween party of the year! Join us on the eerie evening of October 28, 2023, as we celebrate the spirit of Halloween in style. This hauntingly fun gathering promises an unforgettable night of frights, delights, and eerie excitements!
              </strong>
              </Typography>
              <List>
                🕖 DATE & TIME:
                📅 October 28, 2023
                ⏰ 7:00 PM
              </List>
            </Container>

            <Container maxWidth="sm">
              <List>
                <ListItem><strong>🌟 EVENT HIGHLIGHTS: </strong></ListItem>
                <ListItem>🍽️ Food & BYOB: Sink your fangs into some delectable treats and tantalizing bites as we've prepared a spooky spread to satisfy your cravings. Remember, it's BYOB (Bring Your Own BOOze) to ensure your potion of choice is just the way you like it!
                </ListItem>
                <ListItem>
                  👻 Costume Contest: Summon your inner creativity and come dressed to impress! Our Costume Contest is sure to be a scream, with a special, spine-tingling prize for the most spooktacular outfit. Whether you're a creature of the night, a classic monster, or a pop culture icon, strut your stuff and compete for the title of Halloween Royalty.
                </ListItem>
                <ListItem>
                  🌌 Canton Bar After-Party: But wait, the fun doesn't stop here! After our hauntingly good time at the Halloween Bash, we'll be heading to the famous Canton Bar for those who dare to continue the festivities into the witching hours. Join us as we paint the town orange!
                </ListItem>
                <ListItem>
                  🧛 Location: The Stankiewicz Resident, please contact me if you need the full address.
                </ListItem>
              </List>
            </Container>
            <Container maxWidth="sm">

            <Divider>
           
            </Divider>
            <Box marginTop={2} display="flex" flexDirection="column" gap={4}>
              <Typography variant='body1'><strong>Enter your name to add to the RVSP List below. We appericated it!</strong></Typography>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  value={name}
                  onChange={handleNameChange}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleRSVP}
                  endIcon={<AddIcon></AddIcon>}
                >
                  RSVP
                </Button>
                <div>
                  <h2>RSVP List:</h2>
                  <ul>
                    {rsvpList.map((rsvp, index) => (
                      <li key={index}>{rsvp}</li>
                    ))}
                  </ul>
                </div>
              </Box>
            </Container>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
