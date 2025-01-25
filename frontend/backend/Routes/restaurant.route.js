import { createRestaurant, fetchRestaurants, updateOneRestaurant} from "../Controller/restaurant.controller.js";


export function routes(app){
app.post("/api/restaurant",createRestaurant);
app.get("/api/restaurants",fetchRestaurants);
app.put("/api/restaurant/:id",updateOneRestaurant)
}

