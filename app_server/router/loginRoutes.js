var express     = require('express');
var router      = express.Router();
var ctrlLogin   = require('../controller/loginController');

router.get('/', ctrlLogin.indexGet);
router.post('/', ctrlLogin.indexPost);
router.get('/kaydol', ctrlLogin.signupGet);
router.post('/kaydol', ctrlLogin.signupPost);
router.get('/kullaniciListesi', ctrlLogin.kullaniciListesi);
router.get('/kullaniciSil/:kullaniciadi', ctrlLogin.kullaniciSil);



module.exports = router;