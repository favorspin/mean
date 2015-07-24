module.exports = {
    // Development configuration options
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '848872271848832',
        clientSecret: 'bb5d96b9d6c8ad515d90a50b13d4f5e8',
        callbackURL: 'http://localhost:1337/oauth/facebook/callback'
    }
};