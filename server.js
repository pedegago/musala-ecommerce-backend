const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001;

app.disable("x-powered-by");
app.use(cors({ origin: "*" }));
app.use(express.json());

// app.use("/api/gateways", gatewayRoutes);
// app.use("/api/gateways/:serial/devices", getGatewayByParam, deviceRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Musala application." });
});

app.listen(PORT, () => {
    console.info("👍 Server started on port", PORT);
});
