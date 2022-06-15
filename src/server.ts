import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log("Server is running at PORT %d", app.get("port"));
});

export default server;
