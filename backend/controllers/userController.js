const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

// Register a User
exports.registerUser = catchAsyncErrors( async(req, res, next)=>{
    
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id:"this is sample id",
            url:"profilepicUrl",
        },
    });

    sendToken(user,201,res);
});

// LOgin User
exports.loginUser = catchAsyncErrors (async (req, res, next) =>{

    const { email, password } = req.body;

    // check if user has given password and email both 
    if( !email || !password) {
        return next(new ErrorHander("Please Enter Email and Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if(!user) {
        return next(new ErrorHander("Invalid email or Password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid Email or Password", 401));
    }

    sendToken(user,200,res);

});

// LOgout User
exports.logout = catchAsyncErrors(async(req,res,next) => {
    
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Loged Out",
    });
});


// Forgot Password
exports.forgotPassword = catchAsyncErrors(async(req, res, next) => {

    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next( new ErrorHander("User not found", 404));
    }

    // Get Reset Password Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave:  false});

    const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
        )}/api/v1/password/reset/${resetToken}`; 

        const message = `Your password reset token is :- \n\n ${resetPasswordUrl}  \n\nIf you have not requested this email
        then please ignore it`;

        try {

            await sendEmail({
                email:user.email,
                subject: `Shopping Password Recovery`,
                message,

            });

            res.status(200).json({
                success: true,
                message:`Email sent to ${user.email} successfully`,
            });
            
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            
            await user.save({ validateBeforeSave:  false});

            return next(new ErrorHander(error.message, 500));
        }
});

// GET USER DETAIL
exports.getUserDetails = catchAsyncErrors(async(req,res,next) =>{


    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});
    
// UPDATE USER PASSWORD
exports.updatePassword = catchAsyncErrors(async(req,res,next) =>{


    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched) {
        return next(new ErrorHander("Old password is incorrect", 400));
    }

    if(req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHander("Password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res)
});

// UPDATE USER Profile
exports.updateProfile = catchAsyncErrors(async(req,res,next) =>{

    const newUserData= {
        name:req.body.name,
        email:req.body.email,
    }

    // IT WILL ADD CLOUDINARY LATER
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
        res.status(200).json({
        success:true,
    });
});

// Get All Users (ADMIN)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
});

// Get Single User (ADMIN)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHander(`User does not exist with Id: ${req.params.id}`))
    }

    res.status(200).json({
        success: true,
        user,
    });
});

// UPDATE USER ROLE -- Admin
exports.updateUserRole = catchAsyncErrors(async(req,res,next) =>{

    const newUserData= {
        name:req.body.name,
        email:req.body.email,
        role:req.body.role,
    }
    

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
        res.status(200).json({
        success:true,
    });
});

// DELETE USER -- ADMIN
exports.deleteUser = catchAsyncErrors(async(req,res,next) =>{

    const user = await User.findById(req.params.id);
        
    // IT WILL REMOVE CLOUDINARY LATER
    if(!user){
        return next(new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400))
    }

    await user.remove();

    res.status(200).json({
      success:true,
      message:"User Deleted successfully",
    });
});

