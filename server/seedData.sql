insert into clients (
    client_name,
    client_email,
    client_password,
    client_owner_name,
    client_phone_number) VALUES
('Red Security', 'rs@red.com', 'pass', 'Randy Red', '0821112221'),
('Green Security', 'gs@green.com', 'pass', 'Gary Green', '0821112222'),
('Blue Security', 'bs@blue.com', 'pass', 'Bobby Blue', '0821112223');


insert into client_responders (
    client_id,
    client_responder_name,
    client_responder_email,
    client_responder_password,
    client_responder_cell) VALUES
('da674d95-f3ab-4fc2-acc7-fcee12c4a0b9', 'Red Responder A', 'a@red.com', 'pass', '0821115551'),
('da674d95-f3ab-4fc2-acc7-fcee12c4a0b9', 'Red Responder B', 'b@red.com', 'pass', '0821115552'),

('bffed530-cf73-45ec-9031-e998b74f6500', 'Blue Responder A', 'a@blue.com', 'pass', '0822255551'),
('bffed530-cf73-45ec-9031-e998b74f6500', 'Blue Responder B', 'b@blue.com', 'pass', '0822225552'),

('ad5b68ca-f154-42e9-a282-488efdd4080f', 'Green Responder A', 'a@green.com', 'pass', '0823335551'),
('ad5b68ca-f154-42e9-a282-488efdd4080f', 'Green Responder B', 'b@green.com', 'pass', '0823335552');

insert into users (
    client_id,
    user_name,
    user_email,
    user_cell,
    user_password) VALUES
    ('da674d95-f3ab-4fc2-acc7-fcee12c4a0b9', 'Red Victim A', 'a@redvictim.com', '0710001111', 'pass'),
    ('da674d95-f3ab-4fc2-acc7-fcee12c4a0b9', 'Red Victim B', 'b@redvictim.com', '0710001112', 'pass'),
    
    ('bffed530-cf73-45ec-9031-e998b74f6500', 'Blue Victim A', 'a@bluevictim.com', '0710001113', 'pass'),
    ('bffed530-cf73-45ec-9031-e998b74f6500', 'Blue Victim B', 'b@bluevictim.com', '0710001114', 'pass'),
    
    ('da674d95-f3ab-4fc2-acc7-fcee12c4a0b9', 'Green Victim A', 'a@greenvictim.com', '0710001115', 'pass'),
    ('da674d95-f3ab-4fc2-acc7-fcee12c4a0b9', 'Green Victim B', 'b@greenvictim.com', '0710001116', 'pass');


insert into panic_types (
    panic_type_name
) VALUES
('Hijacking'),
('Robbery'),
('Medical'),
('Other');

INSERT INTO panics (
  user_id,
  panic_type_id,
  --user_ip text ARRAY[2], --intentionally left out will
  --user_location text ARRAY[2],
  --panic_location text ARRAY[2],
  --user_helped_at TIMESTAMPTZ,
  --client_responded_at TIMESTAMPTZ,
  --responder_completed_at TIMESTAMPTZ) 
) VALUES 
('3728a2a1-4c1d-4a2d-a66e-757b551dcfb8', 1), --a red
('3bae5d67-f7fc-4806-9408-9ab7e51bef05', 2),
('7468d720-fc6e-4bf7-bfaa-9b330a5b1c93', 3), --a blue
('7fa7a7e2-6eea-486d-ae76-22445a359aee', 4), 
('da007bbd-e3e2-4761-9def-3e1b5b00ebc3', 1), --a green
('fc71ec53-a333-4861-a98f-9775edd6ef07', 2);




