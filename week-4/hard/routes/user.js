const { Router } = require("express");
const { User, Todo } = require("../database");
const JWT_SECRET = process.env.JWT_SECRET;
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    const email = req.body.email;
    const name = req.body.username;
    const password = req.body.password;

    await User.create({
        email: email,
        name: name,
        password: password
    })

    res.json({
        message: "You are singed up now!"
    })
});

router.post('/login', async (req, res) => {
     const email = req.body.email;
     const password = req.body.password

     const response = await User.findOne({
        email: email,
        password: password
     })

     if (response){
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token: token
        })

     } else{
        res.json({
            message: "Wrong name or password"
        })
     }
});

router.get('/todos', userMiddleware, async (req, res) => {
    const userId = req.userId

    const todos = await Todo.find({
        userId: userId
    })

    res.json({
        todo: todos
    })

});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = router