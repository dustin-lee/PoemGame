console.log('in the savenewpoems model')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// build your user schema and add it to the mongoose.models
var savedpoemsSchema = new mongoose.Schema({
  name: {
   type: String,
  //  required: true,
   trim: true,
  },
// timestamps: {
//   createdAt: 'created_at',
//   updatedAt: 'updated_at'
// },
title: { type: String},
first: { type: String},
inputone: {type: String},
second: { type: String},
inputtwo: {type: String},
third: { type: String},
inputthree: {type: String},
fourth: { type: String},
inputfour: {type: String},
fifth: { type: String},
inputfive: {type: String},
shared: {type: Number, default: 0}
});

mongoose.model('savedPoem', savedpoemsSchema);
