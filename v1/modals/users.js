const path = require('path');
const mongoose = require(path.join(__dirname,'../connection/connection')) ;
const Schema = mongoose.Schema;

// create users schema
const UsersSchema = new Schema({
    first_name:{
        type:String,
        required:[true,'First Name is required!']
    },

    last_name:{
        type:String,
        required:[true,'Last Name is required!']
    },

    username:{
        type:String,
        required:[true,'Username is required!']
    },

    phone_number:{
        type:Number,
        required:[true, 'Phone Number is required']
    },

    photo:{
        type:String,
        default:'user.png'
    },

    email:{
        type:String,
        required:false
    },

    location:{
        type:String,
        required:[true,'Location is required!']
    },

    date:{
        type:Date,
        default:Date.now,
        required:[true, 'Date is required!']
    },

    active:{
        type:Boolean,
        default:false
    },

    company:{
        type:String,
        required:false
    },

    company_photo:{
        type:String,
        required:false
    },

    ip:{
        type:String,
        required:[true,'Ip address is required!']
    }
});

const dbusers = mongoose.model('users',UsersSchema);

class Users {

    /**
     * Return the list of all users
     */
    get users(){
        let sql = "SELECT * FROM users ORDER BY id";




    }

    /**
     * Get users by they're id's
     * @param id
     */
    getUser(id){




    }

    /**
     * add new user to the database and return the response via the callback method
     * @param obj
     */
    addUser(obj){
       dbusers.create(obj.data).then(function (data) {
            return obj.callback(data);
       }).catch(obj.next);
    }

    /**
     * Update users
     * @param obj
     */
    updateUser(obj){



    }

    /**
     * Delete the user from the database
     * @param id
     */
    deleteUser(id){



    }

}

module.exports = new Users();