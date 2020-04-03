let db = require('../util/database');

// Add a single individual to the database
function addTopic(data) {
    let sql = `Insert into topics (topic) values
                ('${data.topic}')`;
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllTopics() {
    return db.execute('Select * from topics');
}

// Gets a specific individual from the database
function getTopic(id) {
    return db.execute("Select * from topics where id = " + id);
}

function deleteTopic(id) {
    db.execute(`DELETE FROM topics WHERE id = ${id}`)
}

module.exports = {
    add : addTopic,
    getall : getAllTopics,
    getartist: getTopic,
    delete: deleteTopic
}