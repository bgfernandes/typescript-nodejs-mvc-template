import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((error: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  res.status(500).send('INTERNAL SERVER ERROR')
});

app.listen(port, () => {
  return console.log(`Server is listening on http://localhost:${port}`);
});
