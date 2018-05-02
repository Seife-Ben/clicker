var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.dhivina = 'dhivina';
    res.render('index', { title: 'Connection' });
  });

  router.post ('/', (req, res) => {
    if(req.body.login && req.body.password &&
      req.body.login==='Nodejs' && req.body.password===
      '123'){
         res.send('connected');
         //res.redirect('click');
      }  else {
        res.send('error');
      }
  });
 /* router.post('/', (res,req) => {
      if(req.body.login && req.body.password &&
        req.body.login==='bob' && req.body.password==='123'){
        req.session.connected=true;  
        return res.redirect('/admin');
      }else
      res.send('error');
      req.session.connected=false;
   });*/ 

  /* router.get('/admin',(req, res)=>{
       if (!req.session.connected){
     return  res.redirect('/');
       }
    res.send('ADMIN');
   });*/

  /* router.get('/admin/dhivina',(req,res)=>res.send('dhivina'));*/
   router.get('/show', (req,res)=> res.send());

   router.get('/click',(req,res) => res.send());

  router.get('/show', (req,res) => res.send
  (req.session.dhivina));
  
  
  module.exports = router;
  
