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
  constructor(title, date, description, creator, picture) {
    this.id = meetupArray.length + 1,
    this.title = title,
    this.date  = title,
    this.description = description,
    this.creator = creator,
    this.picture = picture
  }
};

class Attendee {
  constructor(name, picture, meeting_id) {
    this.id = attendeeArray.length + 1,
    this.name = name,
    this.picture = picture,
    this.meeting_id = meeting_id
  }
};

class Comment {
  constructor(meeting_id, poster, body) {
    this.id = commentArray.length + 1,
    this.meeting_id = meeting_id,
    this.poster = poster,
    this.body = body
  }
}

let meetupArray = [];
let attendeeArray = [];
let commentArray = [];

app.use(morgan());
app.use(express.static(path.join(__dirname, 'frontend','build')));

// Meetup Routes
app.post('/meetup', (req, res, next) => {
  const newMeetup = new Meetup(req.body.title, req.body.date, req.body.description, req.body.creator, req.body.picture)
  meetupArray.push(newMeetup);
  return res.send(newMeetup);
});

app.get('/meetups', (req, res, next) => {
  return res.send(meetupArray);
});

app.get('/meetup/:id', (req, res, next) => {
  res.send(meetupArray.find(x => x.id == req.params.id));
});

// Attendee Routes
app.post('/attendee', (req, res, next) => {
  const newAttendee = new Attendee(req.body.name, req.body.picture, req.body.meeting_id)
  attendeeArray.push(newAttendee);
  return res.send(newAttendee);
});

app.get('/attendees', (req, res, next) => {
  return res.send(attendeeArray);
});

app.get('/attendee/:id', (req, res, next) => {
  res.send(attendeeArray.find(x => x.id == req.params.id));
});

// Comment Routes
app.post('/comment', (req, res, next) => {
  const newComment = new Comment(req.body.meeting_id, req.body.poster, req.body.body)
  commentArray.push(newComment);
  return res.send(commentArray);
});

app.get('/comments', (req, res, next) => {
  return res.send(newComment);
});

app.get('/comment/:id', (req, res, next) => {
  res.send(newComment.find(x => x.id == req.params.id));
});

app.use('*', (req, res, next)=>{
  return res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(port, '0.0.0.0', ()=>{
  console.log('listening on port: ', port);
});
