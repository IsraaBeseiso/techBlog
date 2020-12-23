const { User } = require('../models');

const userData = [{
        username: '',
        password: ''

    },
    {
        username: '',
        password: ''
    },
    {
        username: '',
        password: ''
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;