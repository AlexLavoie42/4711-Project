let db = require('../util/database');

// Add a single individual to the database
function addReply(data) {
    let sql = `Insert into reply (body, post_id_fk, user_id_fk) values
                ('${data.body}', '${data.post_id}','${data.user_id}')`;
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllReplies() {
    return db.execute('Select * from reply');
}

// Gets a specific individual from the database
function getReply(id) {
    return db.execute("Select * from reply where id = " + id);
}

function deleteReply(id) {
    db.execute(`DELETE FROM reply WHERE id = ${id}`)
}

module.exports = {
    add : addReply,
    getall : getAllReplies,
    getreply: getReply,
    delete: deleteReply
}