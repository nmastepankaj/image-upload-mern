const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const multer = require('multer')

connectToMongo();
const app = express()
const port = 3005

 
app.use(cors())
app.use(express.json())
// Available Routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.static('public')); 
app.use('/', express.static('images'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

app.use(cors())

app.post('/image', upload.single('file'), function (req, res) {
  res.json({})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})