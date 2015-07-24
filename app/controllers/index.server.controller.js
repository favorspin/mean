//render the homepage (index)
exports.render = function(req, res) {

    //render the view
    res.render('index', {
        title: 'Hello World',
        user: JSON.stringify(req.user)
    });
};