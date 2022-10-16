import express from "express";
import expressHttpProxy from "express-http-proxy";

const app = express();

const unsplashURL = "https://api.unsplash.com";
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;
if (!unsplashAccessKey) {
  console.error("Fatal Error: UNSPLASH_ACCESS_KEY was not provided");
  process.exit(1);
}

const proxy = expressHttpProxy(unsplashURL, {
  proxyReqPathResolver: (request) => {
    const parts = request.url.split("?");

    return (
      `${parts[0]}?client_id=${unsplashAccessKey}` +
      (parts.length ? `&${parts[1]}` : "")
    );
  },
  proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
    proxyReqOpts.headers = { "Accept-Version": "v1" };
    return proxyReqOpts;
  },
});

app.use("/", proxy);

console.log("Server started on port 8080");
app.listen(8080, "0.0.0.0");
