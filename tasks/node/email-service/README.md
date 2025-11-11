# Email service

Build an HTTP server that accepts incoming POST requests with body
```json
  {
    "destination": "<recipient email>",
    "subject": "<subject>",
    "body": "<body>"
  }
```

The server should send an email to the given destination  with corresponding subject  and body 
How to send email using NodeJS and Gmail
