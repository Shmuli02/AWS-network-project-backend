const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  fileName: {type: String},
  url: {type: String}
})

videoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
  }
})

module.exports = mongoose.model('Video', videoSchema)