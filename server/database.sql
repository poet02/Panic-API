CREATE DATABASE aura;
DROP DATABASE aura;

--users
--add extension uuid ossp
--CREATE EXTENSION if not exists "uuid-ossp"; //in psql shell :)
CREATE TABLE clients(
  client_id UUID DEFAULT uuid_generate_v4(),
  client_name text NOT NULL UNIQUE,
  client_email text NOT NULL UNIQUE,
  client_password text NOT NULL,
  client_owner_name text NOT NULL,
  client_phone_number text(12) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (client_id)
);

CREATE TABLE client_responders(
  client_responder_id UUID DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL, --can be null
  client_responder_name text NOT NULL,
  client_responder_email text NOT NULL UNIQUE,
  client_responder_password text NOT NULL,
  client_responder_cell text NOT NULL,
  client_responder_location text, --will be generated when responder accepts panic
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (client_responder_id),
  FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  client_id UUID,
  user_name text NOT NULL,
  user_email text NOT NULL UNIQUE,
  user_cell text NOT NULL,
  user_password text NOT NULL,
  added_by text[2] --[0] type admin or client [1] id
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id),
  FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

CREATE TABLE panic_types (
    panic_type_id SERIAL,
    panic_type_name text,
    PRIMARY KEY (panic_type_id)
);

CREATE TABLE panics(
  panic_id UUID DEFAULT uuid_generate_v4(),
  user_id UUID,
  panic_type_id SERIAL,
  responder_id UUID,
  user_ip text,
  user_location text,
  panic_location text,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  user_helped_at TIMESTAMPTZ,--from user
  client_responded_at TIMESTAMPTZ,
  responder_completed_at TIMESTAMPTZ,
  PRIMARY KEY (panic_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (responder_id) REFERENCES client_responders(client_responder_id),
  FOREIGN KEY (panic_type_id) REFERENCES panic_types(panic_type_id)
);