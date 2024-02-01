// const db =require('../model/index')
const User =require('../model/index')

const createUser=async (req,res,next)=>{
try {
    console.log(req.body)
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phonenumber:req.body.phonenumber
    })
    user.save().then(()=>{
        console.log("inserted")
    }).catch(e=>{
        console.log(e)
    })

    res.json(user);
} catch (error) {
    res.send({status:0,error:error})
}

}
const getUser=async(req,res)=>{
try {
    let users= await User.find();
    res.json(users);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}
const edituser =async(req,res)=>{
    try {
        let result= await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(result);

    } catch (error) {
    res.send({status:0,error:error})
        
    }
}
const deleteUser =async(req,res)=>{
    try {
        let result= await User.deleteOne(req.params._id)
        res.json(result);

    } catch (error) {
    res.send({status:0,error:error})
        
    }
}

module.exports ={createUser,getUser,edituser,deleteUser}