DROP DATABASE IF EXISTS allEmps_db;
CREATE DATABASE allEmps_db;

USE allEmps_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE employeeTitle (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employeeInfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title_id INT,
    manager_id INT,
    FOREIGN KEY (title_id)
    REFERENCES employeeTitle(id),
    FOREIGN KEY (manager_id)
    REFERENCES employeeInfo(id)
);