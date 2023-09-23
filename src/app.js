
import { Express } from 'express';
import { engine } from 'express-handlebars'
import {dirname} from 'path'
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const __dirname = dirname(fileURLToPath(import.meta.url))