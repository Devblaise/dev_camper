const Bootcamp = require('../models/Bootcamp');

//@desc    Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  public
exports.getAllBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

//@desc    Get single bootcamp
//@route   GET /api/v1/bootcamps/:id
//@access  public
exports.getBootcamp = (req, res, next) => {
  res.json({ success: true, msg: `Get bootcamp ${req.params.id}` });
};

//@desc    Create new bootcamp
//@route   POST /api/v1/bootcamps
//@access  private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create all bootcamps' });
};

//@desc    Update bootcamp
//@route   PUT /api/v1/bootcamps/:id
//@access  private
exports.updateBootcamp = (req, res, next) => {
  res.json({ success: true, msg: `Create bootcamp ${req.params.id}` });
};

//@desc    Delete new bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  private
exports.deleteBootcamp = (req, res, next) => {
  res.json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
