const express = require("express");
const { json, urlencoded, static } = require("express");
const { join } = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for express
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use(static(join(__dirname, "public")));

// Routes
app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
