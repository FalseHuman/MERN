const {Router} = require('express')
const {check, validationResult} = requre("express-validator")
const bcrypt = require('bcryptjs')
const User = './models/user'
const router = Router()

//  /api/auth/register
router.post(
    '/register', 
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длин 6 символов').isLenght({min:6})
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: "Некорректные данные при регистрации"
            })
        }

        const {email, password} = req.body
        const candidate =  await User.findOne({ email})

        if (candidate) {
            return res.status(400).json({message: "Пользователь с такой почтой уже есть!"})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: "Пользователь создан."})

    } catch (e){
        res.status(500).json({message: "Что-то пошло не так:(Попробуйте снова..."})
    }
})

//  /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
     async (req, res) =>{
        try{
            const errors = validationResult(req)
    
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при входе в систему"
                })
            }
    
        } catch (e){
            res.status(500).json({message: "Что-то пошло не так:(Попробуйте снова..."})
        }
    
})

module.exports = router