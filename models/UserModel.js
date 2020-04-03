let db = require('../util/database');

// Add a single individual to the database
function addUser(data) {
    let sql = `Insert into users (name, email, first_name, last_name, password, image_url, desc,
                country, birthdate, post_count, message_count, like_count)
                 values ('${data.name}', '${data.email}', '${data.first_name}', '${data.last_name}'
                 , '${data.password}', '${data.image_url}', '${data.desc}', '${data.country}'
                 , '${data.birthdate}', '${data.post_count}', '${data.message_count}', '${data.like_count}')`;
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