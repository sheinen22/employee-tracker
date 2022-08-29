INSERT INTO department (dept_name)
VALUES ("Corporate"),
       ("Sales"),
       ("Managemenet"),
       ("Field");

INSERT INTO employee_title (title, salary, department_id)
VALUES ("President", 250000, 1),
       ("Vice President", 225000, 1),
       ("Operations Manager", 180000, 1), 
       ("Sales Rep", 90000, 2),
       ("Sales Manager", 115000, 2),
       ("Logistics Coordinator", 95000, 3),
       ("Field Foreman", 85000, 3), 
       ("EHS", 100000, 3),
       ("Fleet Manager", 80000, 3), 
       ("Technician", 70000, 4),
       ("Trainer", 80000, 4);

INSERT INTO employee_info (first_name, last_name, role_id, manager_id)
VALUES ("Wade", "Engle", 1, null),
       ("Matt", "Corrigan", 2, 1),
       ("Sam", "Metzger", 3, 1), 
       ("Al", "Lara", 4, 5), 
       ("Niki", "Kastner", 5, 2),
       ("Danny", "Talbott", 6, 3),
       ("John", "Sirois", 7, 3), 
       ("Jason", "Brouse", 8, 2),
       ("Juan", "Castro", 9, 3), 
       ("Stephen", "Beiter", 10, 7), 
       ("Lalo", "Peralta", 10, 7),
       ("Adrian", "Ragsdale", 11, 7);