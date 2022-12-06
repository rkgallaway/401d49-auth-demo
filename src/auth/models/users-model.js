'use strict';

// Create User Model
const UsersSchema = (sequelizeDatabase, DataTypes) => {
  let user = sequelizeDatabase.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // sequelize allows to interact with the userModel BEFORE adding data to the database using the beforeCreate hook
  user.beforeCreate((user) => {
    console.log('our user', user);
  });


  return user;
};

module.exports = UsersSchema;
