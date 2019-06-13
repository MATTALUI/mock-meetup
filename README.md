meeting:
  id: integer
  title: string
  date: Date
  description: string
  creator: string
  picture: string

attendee
  id: integer
  name: string
  picture: string
  meeting_id: integer

comments:
  id: integer
  meeting_id: integer
  poster: string
  body: string
