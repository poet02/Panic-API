const jwt = require("jsonwebtoken");

require("dotenv").config();

function jwtGenerator(data, type) {
  let payload = {};
  switch (type) {
    case 'ADMIN':
        payload = {
        admin: {
          id: data.id,
        }
      };
      break;
      case 'CLIENT':
        payload = {
            client: {
              id: data.id,
            }
          };
      break;
      
    case 'USER':
        payload = {
        user: {
          id: data.id,
          client_id: data.client_id
        }
      };
      break;
    case 'RESPONDER':
        payload = {
            user: {
              id: data.id,
              client_id: data.clientId
            }
          };
      break;
    default:
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}

module.exports = jwtGenerator;
