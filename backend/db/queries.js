const client = require("../config/db.config");

// Role Table
function createRoleTable() {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS roles (
        id SERIAL PRIMARY KEY,
        role VARCHAR(255) NOT NULL,
        edit VARCHAR(255) NOT NULL,
        view VARCHAR(255) NOT NULL,
        delete VARCHAR(255) NOT NULL
    )
  `;

    client.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating role table:', err);
        } else {
            console.log('Role table created successfully');
        }
    });
}

// User Table
function createUserTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(20)
      )
    `;

    client.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating user table:', err);
        } else {
            console.log('User table created successfully');
        }
    });
}

//User-Role Table
function createUserRoleTable() {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS userRole(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id),
        role_id INT REFERENCES roles(id)
    )
  `;

    client.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating userRole table:', err);
        } else {
            console.log('UserRole table created successfully');
        }
    });
}

//Page Table
function createPageTable() {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS pages(
          id SERIAL PRIMARY KEY,
          pageName VARCHAR(255) NOT NULL
    )`;

    client.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating page table:', err);
        } else {
            console.log('Page table created successfully');
        }
    });
}

//Page-Role Table
function createPageRoleTable() {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS pageRole(
        id SERIAL PRIMARY KEY,
        page_id INT REFERENCES pages(id),
        role_id INT REFERENCES roles(id)
    )
  `;

    client.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating pageRole table:', err);
        } else {
            console.log('PageRole table created successfully');
        }
    });
}

module.exports = { createUserTable, createRoleTable, createUserRoleTable, createPageTable, createPageRoleTable }