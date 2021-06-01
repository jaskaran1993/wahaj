const express = require('express')
const router = express.Router()
const multer = require('multer')
const crypto = require('crypto')
const mime = require('mime');
//const upload = multer({dest: 'uploads/'})
const shortid = require('shortid')
const path = require('path')
const { getProducts, createProduct, productById, read, remove, update } = require('../controllers/product')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user')

<<<<<<< HEAD
=======
const middleWare=require('../Middleware/index');

>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})


var upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
})

// router.get('/product/:productId', read);
<<<<<<< HEAD
router.get("/product/getProducts", getProducts);
=======
router.post("/product/getProducts",middleWare.checkToken, getProducts);
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, upload.array('product_pictures', 4), createProduct);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove)
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update)


router.param('userId', userById);
// router.param('productId', productById)

module.exports = router;