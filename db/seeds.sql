INSERT INTO department (name) VALUES ('Administration'), ('Sales'), ('Accounting'), ('Human Resources'), ('Customer Service'), ('Warehouse');

INSERT INTO roles (title, salary, deparetment_id) 
VALUES ('Branch Manager, $50,000, 1'), 
('Office Manager, $30,000, 1'), 
('Assistant to the Manager, $60,000, 2'), 
('Sales Associate, $60,000, 2'), 
('Accounting Manager, $60,000, 3'), 
('Accountant, $50,000, 3'), 
('Humsn Resources Representative, $70,000, 4'),
('Customer Service Representative, $30,000, 5'), 
('Quality Assurance, $50,000, 5'), 
('Warehouse Supervisor, $80,000, 6'), 
('Dock Worker, $50,000, 6');

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Michael, Scott, 1, null'), 
('Pam, Beesly, 2, 1'), 
('Dwight, Schrute, 3, 1'), 
('Jim, Halpert, 4, 1'), 
('Andy, Bernard, 4, 1'), 
('Phyllis, Vance, 4, 1'), 
('Meredith, Palmer, 4, 1'), 
('Stanley, Hudson, 4, 1'), 
('Angela, Martin, 5, 1'), 
('Oscar, Martinez, 6, 9'), 
('Kevin, Malone, 6, 9'), 
('Toby Flenderson, 7, 1'), 
('Kelly, Kapoor, 8, 1'), 
('Creed, Bratton, 9, 1'), 
('Stanley, Hudson, 10, 1'), 
('Roy, Anderson, 11, 15'), 
('Lonny, Collins, 11, 15'), 
('Madge, Madsen, 11, 15');
