const server = require("./src/server");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server proxy Gateway is listening on port ${PORT}`);
});