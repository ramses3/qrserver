var express = require('express');
var router = express.Router();
//const qr = require("qrcode");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple QR Code generator' });
});

const QRCode = require("qrcode");
const { PassThrough } = require("stream");

router.get('/qr/:content/:size', async (req, res, next) => {
  try{
      //const content = req.params.content;
      const content = Buffer.from(req.params.content, 'base64').toString('utf8')         
      const qrStream = new PassThrough();
      const result = await QRCode.toFileStream(qrStream, content,
                  {
                      type: 'png',
                      width: parseInt(req.params.size),
                      errorCorrectionLevel: 'H'
                  }
              );

      qrStream.pipe(res);
  } catch(err){
      console.error('Failed to return content', err);
  }
});

module.exports = router;