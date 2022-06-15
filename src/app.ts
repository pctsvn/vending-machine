import bodyParser from "body-parser";
import compression from "compression"; // compresses requests
import express, { NextFunction, Request, Response } from "express";
import flash from "express-flash";
import helmet from "helmet";
import lusca from "lusca";
import morgan from "morgan";
import noCache from "nocache";
import { connectDatabase } from "./services";
import { Secrets } from "./util";
import productRoute from "./routes/product.route";
import userRoute from "./routes/user.route";

const app = express();
connectDatabase();

app.set("port", Secrets.PORT || 3000);
app.set("etag", false);
app.use(morgan("combined"));
app.use(helmet());
app.use(noCache());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
  next();
});

app.use("/users", userRoute);
app.use("/products", productRoute);

app.use((err: Error, req: Request, res: Response) => {
  console.error(err);
  const errorResponse = {
    success: false,
    data: {
      message: err.message,
    },
  };
  if (err.name === "CustomError") res.status(400).json(errorResponse);
  else {
    errorResponse.data.message = "Internal error";
    res.status(500).json(errorResponse);
  }
});

export default app;
