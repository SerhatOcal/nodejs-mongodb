var Kullanici = require('../model/kullanici');

module.exports.indexGet = function(req , res) {
    res.render('login');
}
module.exports.indexPost = function(req , res) {
    res.render('login');
}
module.exports.signupGet = function(req , res) {
    res.render('kaydol');
}
module.exports.signupPost = function (req, res) {
    
    var yeniKullanici = new Kullanici({
        ad: req.body.name,
        soyad: req.body.surname,
        email: req.body.email,
        kullaniciadi: req.body.username,
        sifre: req.body.password
    });
    yeniKullanici.save(function (err) {
        if (err) {
            console.log('Hata:' + err);
        } else {
            res.redirect('kullaniciListesi');
        }
    });
}
module.exports.kullaniciListesi = function (req, res) {
    Kullanici.find(function (err, results) {
        res.render('kullaniciListesi',{kullanicilar:results});
    
    });
}
module.exports.kullaniciSil = function (req, res) {
    Kullanici.findOneAndRemove({ kullaniciadi: req.params.kullaniciadi}, function (err) {
        if (err) {
            console.log('Silme Hatası' + err)
        }

        res.redirect('/login/kullaniciListesi');
    });
}