var express = require('express');
var router = express.Router();

router.get('/selectAll/:id', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;