const validator = require('validator');
const { validationResult } = require('express-validator');

const registerUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: 'username, email, password atau confirm password harus dipenuhi' });
    }

    if (!validator.isEmail(email) ) {
        return res.status(400).json({ error: 'Email harus valid' });
    } 
    
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Password dan Confirm Password harus sama' });
    }

    // let x = 5;
    // try {
    //     x = y + 1;
    // } catch (error) {
    //     return res.status(404).json({ error: "user not found" });
    // }

    // const result = validationResult(req);

    // if (!result.isEmpty()) {
    //     return res.status(400).json({ error: result.array() });
    // }

    return res.status(201).json({ status: '201', message: 'Berhasil register user baru', data: {
        username, 
        email,
    } });
};

module.exports = registerUser;