module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: '3728a2a1-4c1d-4a2d-a66e-757b551dcfb8',
        client_id: 'da674d95-f3ab-4fc2-acc7-fcee12c4a0b9',
        user_name: "Blue Victim A",
        user_email: "a@bluevictim.com",
        user_password: "pass",
        user_cell: "0710001111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3bae5d67-f7fc-4806-9408-9ab7e51bef05',
        client_id: 'da674d95-f3ab-4fc2-acc7-fcee12c4a0b9',
        user_name: "Blue Victim B",
        user_email: "b@bluevictim.com",
        user_password: "pass",
        user_cell: "0710001112",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7468d720-fc6e-4bf7-bfaa-9b330a5b1c93',
        client_id: 'bffed530-cf73-45ec-9031-e998b74f6500',
        user_name: "Red Victim A",
        user_email: "a@redvictim.com",
        user_password: "pass",
        user_cell: "0710001113",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7fa7a7e2-6eea-486d-ae76-22445a359aee',
        client_id: 'bffed530-cf73-45ec-9031-e998b74f6500',
        user_name: "Red Victim B",
        user_email: "b@redvictim.com",
        user_password: "pass",
        user_cell: "0710001114",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'da007bbd-e3e2-4761-9def-3e1b5b00ebc3',
        client_id: 'ad5b68ca-f154-42e9-a282-488efdd4080f',
        user_name: "Green Victim A",
        user_email: "a@greenvictim.com",
        user_password: "pass",
        user_cell: "0710001115",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'fc71ec53-a333-4861-a98f-9775edd6ef07',
        client_id: 'ad5b68ca-f154-42e9-a282-488efdd4080f',
        user_name: "Green Victim B",
        user_email: "b@greenvictim.com",
        user_password: "pass",
        user_cell: "0710001116",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
