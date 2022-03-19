const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


exports.isAuthenticatedUser =  catchAsyncErrors( async(req,res,next) => {

    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHander("PLease login to access this resource", 401));
    };

    const decodeData = jwt.verify(token, process.env.JWT_SECRET);

    req.user =  await User.findById(decodeData.id);

    next();
});

exports.authorizeRoles = (...roles) => {

    return (req,res,next) => {

        if(!roles.includes(req.user.role)){

            return next(
                 new ErrorHander(
            `Roles: ${req.user.role} is not allowed this resource`, 403
                )
            );
        }

        next();
    };
};