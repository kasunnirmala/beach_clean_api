const mongoose = require('mongoose');
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

const PostDataSchema = new mongoose.Schema({
    _id: { type: ObjectIdSchema, default: function () { return new ObjectId() } },
     latitude:Number,
     longitude:Number,
    DateTime:Date,
     resolved:Boolean,
     problemImage:String,
     problemUser:String,
    problemTimestamp:Number,
     resolveImage:String,
     resolveUser:String,
    resolveTimestamp:Number,
     problemTitle:String,
     problemDesc:String,
     resolveTitle:String,
     resolveDesc:String,
     resolveUserId:String,
     problemUserId:String,
    
}, {
    timestamps: true
});


module.exports = mongoose.model('PostData', PostDataSchema);