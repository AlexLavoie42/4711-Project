let db = require('../util/database');

// Add a single individual to the database
function addMessage(data) {
    let sql = `Insert into messages (message, timestamp) values ('${data.message}', '${data.timestamp}')`;
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllMessages() {
    return db.execute('Select * from messages');
}

// Gets a specific individual from the database
function getMessage(id) {
    return db.execute("Select * from messages where id = " + id);
}

function deleteMessage(id) {
    db.execute(`DELETE FROM messages WHERE id = ${id}`)
}

module.exports = {
    add : addMessage,
    getall : getAllMessages,
    getmessage: getMessage,
    delete: deleteMessage
}