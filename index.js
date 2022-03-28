const http = require("http");

const { getAllUsers, getUser, addUser } = require("./api");

const server = http.createServer(function (req, res) {
  try {
    const [url, query] = req.url.split("?");
    if (url === "/users") {
      if (req.method === "GET") {
        const q = new URLSearchParams(`?${query}`);
        const page = q.get("page") ?? 1;
        res.writeHead(200, { contentType: "application/json" });
        res.end(JSON.stringify(getAllUsers(Number(page))));
      } else if (req.method === "POST") {
        const q = new URLSearchParams(`?${query}`);
        const value = q.get("name");
        addUser(value);
        res.writeHead(201, { contentType: "application/json" });
        res.end(JSON.stringify(getAllUsers()));
      }
    } else if (req.url.startsWith("/user/")) {
      const index = req.url.split("/")[2];
      res.writeHead(200, { contentType: "application/json" });
      res.end(JSON.stringify(getUser(index)));
    }
  } catch (err) {
    res.writeHead(500, { contentType: "application/json" });
    res.end(JSON.stringify({ data: err.message }));
  }
});

server.listen(3000, () => {
  console.log("Listening");
});
