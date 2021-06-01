
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      link_photo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      provider: {
        type: Sequelize.BOOLEAN,
        defaultValues: false,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },


    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('users');
  }


};
