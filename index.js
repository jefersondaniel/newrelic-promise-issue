const nr = require("newrelic");
const express = require("express")
const app = express()

let promise;

app.get("/", (request, reply) => {
  if (!promise) {
    promise = Promise.resolve();
  }

  promise.then(() => {
    nr.startSegment("mysegment", true, async () => {
      reply.send("Hello World")
    })
  })
})

app.listen(3000, () => {
  console.log("Server started")
})
