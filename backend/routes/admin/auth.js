const express = require('express');
<<<<<<< HEAD
const { signup, signin, signout } = require('../../controllers/admin/auth');
=======
const { signup, signin, signout,getUsers, userCreate } = require('../../controllers/admin/auth');
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc
// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
// const { requireSignin } = require('../../common-middleware');
const router = express.Router();


router.post('/admin/signup', signup);
router.post('/admin/signin', signin);
router.post('/admin/signout', signout)
<<<<<<< HEAD
=======
router.post('/admin/getUsers', getUsers)
router.post('/admin/userCreate', userCreate)
>>>>>>> 75f5a1e0c16b8139c352adf3fb6cd94a263766dc


module.exports = router;