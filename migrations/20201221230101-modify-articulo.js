module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn(
        'Articulos', // table name
        'imagen', // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      queryInterface.changeColumn(
        'Articulos',
        'resumen',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      queryInterface.changeColumn(
        'Articulos', // table name
        'descripcion', // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      queryInterface.changeColumn(
        'Categoria',
        'descripcion',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.changeColumn('Articulos', 'imagen'),
      queryInterface.changeColumn('Articulos', 'resumen'),
      queryInterface.changeColumn('Articulos', 'descripcion'),
      queryInterface.changeColumn('Categoria', 'descripcion'),
    ]);
  },
};
