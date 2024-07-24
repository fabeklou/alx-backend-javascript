import express from 'express';
import routeMapper from './routes';

const app = express();
const PORT = 1245;

routeMapper(app);

app.listen(PORT);

export default app;
