const router = require("express").Router();

//const auth = require("../helper/auth")

const UserRoute = require("../controller/user.controller");

const {adduserValidation} = require("../../helper/validation/user.validation");


router.post("/signUp", adduserValidation, UserRoute.add);

router.post("/login", UserRoute.login);

// router.get("/getAll", UserRoute.getAll)

// router.get("/getBy/:blogTypes", UserRoute.byBlogTypes)

// router.put("/update/:id",UserRoute.update)

// router.delete("/delete/:id",UserRoute.delete)

module.exports = router