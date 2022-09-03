import {hop} from "./hopSDK.js";
import express from 'express';

const app = express();

import apiRoutes from "./apiRoutes.js";


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(5000, () => {
    console.log('Listening on port 5000')
})