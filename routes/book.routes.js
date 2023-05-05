const  router   = require('express').Router();

// modelo
const Book = require('../models/Book.model')

// rotas 
// Crud -> Create
router.post('/', async (req, res) => {
    const { title, description, author, rating} = req.body;
    try {
      if(!title){   
        const error = new Error();
        error.message = 'Titulo é obrigatório';
        error.code = 400;
        throw error
      }
        // await Book.create(req.body);
        const newBookfromDB = await Book.create({ title, description, author, rating })
        res.status(200).json(newBookfromDB);
    } catch (error) {
      res.status(error.code || 500).json({ error })
    }
}) 

// Crud - Read
router.get('/',  async (req, res)=>{
    try {
        const booksFromDB = await Book.find();
        res.status(200).json(booksFromDB);
    } catch (error) {
        res.status(error.code || 500).json({ description:'Error a buscar objeto', error })
    }
})

router.get('/:bookId', async (req, res, next) => {
    const { bookId } = req.params;
    try {
        const bookFromDB = await Book.findById(bookId);
        res.status(200).json(bookFromDB);
    } catch (error) {
        res.status(error.code || 500).json({ description:'Error a buscar objeto', error }) 
    }
})

// router.get('/one', (req, res)=>{
//     res.json('Rota de One com sucesso')
// })
// router.get('/x', (req, res)=>{
//     res.json('Rota de X com sucesso')
// })

// exportando rotas
module.exports = router