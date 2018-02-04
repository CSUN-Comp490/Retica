const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const CaptionistSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },

  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: "session"
    }
  ],

  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "class"
    }
  ],

  timestamps: { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  }

});

module.exports = mongoose.model("captionist", CaptionistSchema);