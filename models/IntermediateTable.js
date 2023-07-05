const { default: mongoose } = require("mongoose");




const IntermediateTableScheme = new mongoose.Schema({
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
    
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }
  });
  
const IntermediateTable = mongoose.model('JobLocation', IntermediateTableScheme);

module.exports = {
    IntermediateTable
}