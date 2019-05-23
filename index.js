const express = require('express');
const app = express();
const port = 3001;
//
//
const server = app.listen(port,()=>{
  console.log(`Server kör i http://localhost:${server.address().port}`);
});

// app.get('/',(req,res)=>{
//   res.send('server kommunikation is going on')
// });
/*med use använder man ett external dokument*/
app.use(express.static('./public'))
