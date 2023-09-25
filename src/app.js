import express from "express";
import config from "./config.js";
import routerProducts from "./routes/products.router.js";
import routerCarts from "./routes/carts.router.js";

// ------------- Inicio Express  -------------

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", routerProducts);
app.use("/api/carts", routerCarts);

app.listen(config.PORT, () => {
  console.log(
    `Server listening on: http://localhost:${config.PORT}/api/products`
  );
});
