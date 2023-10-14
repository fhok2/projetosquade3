'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.createTable('products', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        }, 

        name: {
          type: Sequelize.STRING,
          allowNull: false
        },

        lab_name :{
          type: Sequelize.STRING,
          allowNull: false
        },

        image_link: {
        type: Sequelize.STRING,
        allowNull: false
        },

        dosage: {
          type: Sequelize.STRING,
          allowNull: false
        },
        type_dosage: {
          type: Sequelize.STRING,
          allowNull: false
        },

        description: {
          type: Sequelize.STRING,
          allowNull: true
        },

        unit_price: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },

        type_product: {
          type: Sequelize.STRING,
          allowNull: false
        },

        total_stock: {
          type: Sequelize.INTEGER,
          allowNull: false
        },

        user_id:{
          type: Sequelize.INTEGER,
            references: {
              model:{
              tableName: 'users'
            },
            key: 'id'
          },
            allowNull: false
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
  
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
  
        deleted_at: {
          type: Sequelize.DATE,
          allowNull: true,
        }
      })
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('products');
    
  }
};
