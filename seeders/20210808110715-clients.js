module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Clients", [
      {
        id: 'da674d95-f3ab-4fc2-acc7-fcee12c4a0b9',
        client_name: "Blue Security",
        client_email: "bs@blue.com",
        client_password: "pass",
        client_owner_name: "Bobby Blue",
        client_phone_number: "0821112221",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "bffed530-cf73-45ec-9031-e998b74f6500",
        client_name: "Red Security",
        client_email: "rs@red.com",
        client_password: "pass",
        client_owner_name: "Randy Red",
        client_phone_number: "0821112222",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ad5b68ca-f154-42e9-a282-488efdd4080f",
        client_name: "Green Security",
        client_email: "gs@green.com",
        client_password: "pass",
        client_owner_name: "Gary Green",
        client_phone_number: "0821112223",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients", null, {});
  },
};
