module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ClientResponders", [
      {
        id: '379da564-c809-43a9-9c1b-00f2ccf25f48',
        client_id: 'da674d95-f3ab-4fc2-acc7-fcee12c4a0b9',
        client_responder_name: "Blue Responder A",
        client_responder_email: "responderA@blue.com",
        client_responder_password: "pass",
        client_responder_cell: "0821115551",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '510dfcf8-9567-499a-b06a-7243cf8d07b8',
        client_id: 'da674d95-f3ab-4fc2-acc7-fcee12c4a0b9',
        client_responder_name: "Blue Responder B",
        client_responder_email: "responderB@blue.com",
        client_responder_password: "pass",
        client_responder_cell: "0821115552",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6cfd556c-e947-44d4-96d4-20522cc72cff',
        client_id: 'bffed530-cf73-45ec-9031-e998b74f6500',
        client_responder_name: "Red Responder A",
        client_responder_email: "responderA@red.com",
        client_responder_password: "pass",
        client_responder_cell: "0821115553",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '81ac8e78-9525-401b-9822-eb660dc309a2',
        client_id: 'bffed530-cf73-45ec-9031-e998b74f6500',
        client_responder_name: "Red Responder B",
        client_responder_email: "responderB@red.com",
        client_responder_password: "pass",
        client_responder_cell: "0821115554",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8b73a9f3-b55d-475d-8335-8b32b8a12ca8',
        client_id: 'ad5b68ca-f154-42e9-a282-488efdd4080f',
        client_responder_name: "Green Responder A",
        client_responder_email: "responderA@green.com",
        client_responder_password: "pass",
        client_responder_cell: "0821115555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'bcbb62a5-5815-4e98-951a-b958e88cba85',
        client_id: 'ad5b68ca-f154-42e9-a282-488efdd4080f',
        client_responder_name: "Green Responder B",
        client_responder_email: "responderB@green.com",
        client_responder_password: "pass",
        client_responder_cell: "0821115556",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ClientResponders", null, {});
  },
};
