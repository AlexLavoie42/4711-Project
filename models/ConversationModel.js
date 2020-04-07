let db = require('../util/database');

// Add a single individual to the database
function addConversation(data) {
    let sql = `Insert into conversations (subject, user1__fk, user2__fk) values
                ('${data.subject}','${data.user1}','${data.user2}')`;
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllConversations() {
    return db.execute('Select * from conversations');
}

// Gets a specific individual from the database
function getConversation(id) {
    return db.execute("Select * from conversations where id = " + id);
}

function getUserConversations(user) {
    return db.execute(`Select * from conversations where user1__fk = ${user} or user2__fk = ${user}` );
}

function deleteConversation(id) {
    db.execute(`DELETE FROM conversations WHERE id = ${id}`)
}

module.exports = {
    add : addConversation,
    getall : getAllConversations,
    getuser: getUserConversations,
    getconversation: getConversation,
    delete: deleteConversation
}