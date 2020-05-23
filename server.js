const PORT = process.env.PORT || 3001;

const express = require("express");

const app = express();
app.use(express.json());
app.disable("x-powered-by");

const cors = require("cors");
app.use(cors({ origin: "*" }));

const middlewares = require("./middlewares/auth");
app.use(middlewares.header);

require("./models")
    .init()
    .then(() => {
        require("./routes/auth").routes(app);

        require("./routes/store").routes(app);

        app.listen(PORT, () => {
            console.info("👍 Server started on port", PORT);
        });
    })
    .catch(e => console.info(e.message));
