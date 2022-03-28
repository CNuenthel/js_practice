/** @format */

// Application Program Interface
// RESTful (Representational State Transfer) organizes data entities or resources into
//  unique uri'suniform resource identifiers

// start a node project -> run npm init -y

const app = require("express")(); // import app function from express.js
const PORT = 8080; // set port

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "aShirt",
    size: "large",
  });
});

app.get("/tshirt/:id"),
  (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
      // No valid logo provided in body
      res.status(418).send({ message: "We need a logo!" }); // 418 status and advise
    }

    res.send({
      tshirt: `tshirt with your ${logo} and ID of ${id}`,
    });
  };

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
