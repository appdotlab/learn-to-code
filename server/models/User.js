const serviceLocator = require('../libs/service_locator');
const mongoose = serviceLocator.get('mongoose');
const passportLocalMongoose = serviceLocator.get('passportMongoose');
const {Schema } = mongoose;

const userSchema = Schema({
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose,{
    findByUsername : function(model,queryParameters){
        // Checks both username and email
        console.log('as')
        for( let param of queryParameters.$or ){
            if( typeof param == "object" && param.hasOwnProperty("username") ){
                queryParameters.$or.push( { email : param.username } );
            }
        }
        return model.findOne(queryParameters);
    }
})


module.exports = mongoose.model('User',userSchema);