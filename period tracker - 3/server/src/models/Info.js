const mongoose = require("mongoose");

const inputSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  cycle_length: {
    type: Number,
    required: true,
  },
  periodHistory: [
    {
      startDate: { type: Date, required: true },
      cycleLength: { type: Number, required: true },
    },
  ],
  symptomTracking: [
    {
      date: { type: Date, required: true },
      symptom:[{ type: String, required: true }],
      severity: { type: Number, required: true },
    },
  ],
  next_date: {
    type: Date,
  },
  
});

const inputModel = mongoose.model("inputs", inputSchema);

module.exports = inputModel;
