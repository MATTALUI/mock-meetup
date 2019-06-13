const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT_NUMBER || 3000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

class Meetup {
  constructor(id, title, date, description, creator, picture) {
    this.id = id,
    this.title = title,
    this.date  = title,
    this.description = description,
    this.creator = creator,
    this.picture = picture
  }
};

class Attendee {
  constructor(id, name, picture, meeting_id) {
    this.id = id,
    this.name = name,
    this.picture = picture,
    this.meeting_id = meeting_id
  }
};

class Comment {
  constructor(id, meeting_id, poster, body) {
    this.id = id,
    this.meeting_id = meeting_id,
    this.poster = poster,
    this.body = body
  }
}

let meetupArray = [];

app.use(morgan());
app.use(express.static(path.join(__dirname, 'frontend','build')));

app.post('/meetup', (req, res, next) => {
  console.log(req.body);
  const newMeetup = new Meetup(req.body.id, req.body.title, req.body.date, req.body.description, req.body.creator, req.body.picture)
  meetupArray.push(newMeetup);
  res.send(newMeetup);
});

app.get('/meetups', (req, res, next) => {
  console.log('hello world');
  return res.send(meetupArray);
});

app.get('/meetup/:id', (req, res, next) => {
  res.send('testing');
});

app.use('*', (req, res, next)=>{
  return res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});


app.listen(port, '0.0.0.0', ()=>{
  console.log('listening on port: ', port);
});
