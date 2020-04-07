let db = require('../util/database');

// Add a single individual to the database
function addPost(data) {
    let sql = `Insert into posts (subject, body, post_date, user_id) values
                ('${data.subject}', '${data.body}','${data.post_date}'
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
    getpost: getPost,
    delete: deletePost
}