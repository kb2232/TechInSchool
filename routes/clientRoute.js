module.exports = (app) => 
{
  app.get('/',(req,res)=>{
    res.render('index/welcome');
  });

  app.get('/contact', (req, res) => {
    res.render('layouts/contact');
  });

  app.post('/send', (req, res) => {
    console.log(req.body);
  });
}