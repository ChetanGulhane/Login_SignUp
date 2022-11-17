const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.add = async (req, res) => {
    try {
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        var confirmpassword = req.body.confirmpassword;

        if (password !== confirmpassword) {
            res.json({
                message: "Password Not Matched!",
            });
        } else {
            bcrypt.hash(password, 10, function (err, hash) {

                if (err) {
                    res.json({
                        message: "Something Wrong",
                        error: err
                    });
                } else {
                    var data = new User({
                        name: name,
                        email: email,
                        password: hash
                    });

                    data.save()
                        .then(doc => {
                            res.status(201).json({
                                message: "User Registration Successfully",
                                results: doc
                            });
                        })

                        .catch(err => {
                            res.json(err)
                        });

                }
            });
        }
    } catch (error) {
        console.log(error)
        res.jsonp({ message: "unable to add User", messageCode: 403, status: false })
    }
}



exports.login = async (req, res) => {
    try {
        const getUser = await User.findOne({ email: req.body.email })
        if (getUser) {
            let verify = await bcrypt.compare(req.body.password, getUser.password)
            if (verify) {
                const token = await jwt.sign(
                    {
                        userId: getUser._id,
                        date: new Date()
                    }, "secret"
                )
                res.send({message: "user login successfully" , status: true, statusCode: 200 ,data:{getUser , token}})
            } else {``
                res.send({ message: "Incorrect password" })
            }
        } else
            res.jsonp({ message: "User does not exist", messageCode: 403, status: false })
    } catch (error) {
        console.log(error);
        res.jsonp({ message: "unable to login", messageCode: 403, status: false })

    }
}

