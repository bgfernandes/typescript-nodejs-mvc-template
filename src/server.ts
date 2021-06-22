import app from './app';
import config from './config/config';

app.listen(config.port, () => {
  return console.log(`Server is listening on http://localhost:${config.port}`);
});
