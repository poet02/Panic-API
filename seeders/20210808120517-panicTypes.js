module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("PanicTypes", [
      {
        panic_type_name: "Hijacking",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        panic_type_name: "Robbery",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        panic_type_name: "Medical",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        panic_type_name: "Other",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("PanicTypes", null, {});
  },
};
