import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('<h1 style="color:red">LISTA DE AMIGAS</h1>');
});

export default router;