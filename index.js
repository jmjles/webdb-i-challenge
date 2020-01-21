const server = require('./server.js');
const accountsRouter = require('./routes/accountsRouter.js')
const PORT = process.env.PORT || 5000;

server.use('/',accountsRouter)
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});