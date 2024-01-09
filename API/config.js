const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('Marks', 'root', 'YourRootPassword', {
//   host: 'localhost',
//   dialect: 'mysql', 
// });

const sequelize = new Sequelize('leadsDataFromApp', 'root', 'root',
    {
        host: 'localhost',
        dialect: 'mysql',
    });


module.exports = sequelize;