import { register } from "../Controller/user.controller.js";
import {login} from '../Controller/user.controller.js'
export function userRoutes(app){
    app.post("/api/register",register);
    app.post("/api/login", login);
}