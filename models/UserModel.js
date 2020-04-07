let db = require('../util/database');

// Add a single individual to the database
function addUser(data) {
    let sql = `Insert into users (email, first_name, last_name, password) 
                values ('${data.email}', '${data.first_name}', '${data.last_name}'
                 , '${data.password}')`;
    db.execute(sql);
}

function editUser(id, data) {
    db.execute(`UPDATE users SET image_url = '${data.image_url}', \`desc\` = '${data.desc}', 
                                    country = '${data.country}', birthdate = '${data.birthdate}' where id="${id}"`)
}

// Gets all the individuals in the database
function getAllUsers() {
    return db.execute('Select * from users');
}

// Gets a specific individual from the database
function getUser(id) {
    return db.execute("Select * from users where id = " + id);
}

function getUserFromEmail(email) {
    return db.execute(`SELECT * from users where email = "${email}"`)
}

function deleteUser(id) {
    db.execute(`DELETE FROM users WHERE id = ${id}`)
}

module.exports = {
    add : addUser,
    edit: editUser,
    getall : getAllUsers,
    getuser: getUser,
    getemail: getUserFromEmail,
    delete: deleteUser
}