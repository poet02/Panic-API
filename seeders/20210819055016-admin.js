

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Admins", [
      {
        id: '3728a2a1-4c1d-4a2d-a66e-757b551dc200',
        name: "admin",
        email: "tp@admin.com",
        password: "pass",
        cell: "071000999",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Admins", null, {});
  },
};
