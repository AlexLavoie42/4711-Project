let db = require('../util/database');

// Add a single individual to the database
function addPost(data) {
    let sql = `Insert into posts (subject, body, post_date, topic_id_fk, user_id) values
                ('${data.subject}', '${data.body}','${data.post_date}', '${data.topic_id}'
                ,'${data.user_id}')`;
    db.execute(sql);
}

// Gets all the individuals in the database
function getAllPosts() {
    return db.execute('Select * from posts');
}

// Gets a specific individual from the database
function getPost(id) {
    return db.execute("Select * from posts where id = " + id);
}

function deletePost(id) {
    db.execute(`DELETE FROM posts WHERE id = ${id}`)
}

module.exports = {
    add : addPost,
    getall : getAllPosts,
    getartist: getPost,
    delete: deletePost
}