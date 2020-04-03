let db = require('../util/database');

// Add a single individual to the database
function addUser(data) {
    let sql = `Insert into users (email, first_name, last_name, password, image_url, desc,
                country, birthdate)
                 values ('${data.name}', '${data.email}', '${data.first_name}', '${data.last_name}'
                 , '${data.password}', '${data.image_url}', '${data.desc}', '${data.country}'
                 , '${data.birthdate}')`;
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllUsers() {
    return db.execute('Select * from users');
}

// Gets a specific individual from the database
function getUser(id) {
    return db.execute("Select * from users where id = " + id);
}

function deleteUser(id) {
    db.execute(`DELETE FROM users WHERE id = ${id}`)
}

module.exports = {
    add : addUser,
    getall : getAllUsers,
    getartist: getUser,
    delete: deleteUser
}