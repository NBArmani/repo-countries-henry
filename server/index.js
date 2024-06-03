const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { informationFromApi } = require('./src/getInformationFromDB.js')

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    informationFromApi()
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
