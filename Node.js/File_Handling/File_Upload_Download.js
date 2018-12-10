const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'uploads/', // this saves your file into a directory called "uploads"
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
}); 
var upload = multer({ storage: storage });

const app = express();

app.get('/file', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// It's very crucial that the file name matches the name attribute in your html
app.post('/file', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/file');
});

// make this generic
app.get('/download', (req, res) => {
  res.download('uploads/' + 'dash-bg-01.jpg');
});
app.listen(8080);

