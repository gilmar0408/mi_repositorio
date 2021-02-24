module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Articulos', // table name
        'imagen', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Articulos',
        'resumen',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Articulos', 'imagen'),
      queryInterface.removeColumn('Articulos', 'resumen'),
    ]);
  },
};