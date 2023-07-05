const {Job} = require('../models/Job');
const {IntermediateTable} = require('../models/IntermediateTable');

const jobController = {
    add: async (req, res) => {
        try {
            let job = new Job({
                title: req.body.title,
                summary: req.body.summary,
                description: req.body.description,
                minSalary: req.body.minSalary,
                maxSalary: req.body.maxSalary
            });
            await job.save();

            if(req.body.locations){
              let locationjob = new IntermediateTable({
                locationId : req.body.locations,
                jobId : job._id
              })
              await locationjob.save();
            }
            

            
            res.status(201).json(job);
        } catch (error) {
            res.status(500).json(error)
        }

    },

    getAll: async (req,res) => {

        try {
            const data = await Job.find();
            res.json(data);
          } catch (error) {
            res.status(500).json(error);
          }

    },

    getById: async (req,res) => {

        try {
            const job = await Job.findById(req.params.id);
            if (job) {
              res.json(job);
            } else {
              res.status(404).json({ error: 'Job not found' });
            }
          } catch (error) {
            res.status(500).json(error);
          }

    },

    
}


module.exports = {
    jobController
}