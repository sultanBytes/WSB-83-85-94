const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    coursename:String,
    courseprice:Number,
    courseduration:String,
    coursedes:String,
    thumbnail:String,
    status:{
        type:Boolean,
        default:true
    },
    created_at:{
        type:Date,
        // default:Date.now
    },
    updated_at:{
        type:Date
    }

});

courseSchema.pre('save', (next)=>{
    const currentDate = new Date();
    
    if(this.new){
        this.created_at = currentDate;
    }else {
        this.updated_at = currentDate;
    }

})

const Course = mongoose.model('courses', courseSchema);

module.exports = Course;