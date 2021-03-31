const db = require('../../config/db')
const { date, age } = require('../../lib/util')
module.exports = {
    all(callback) {
        db.query(`SELECT * from teachers  
        order by name`, function(err, results) {
            if (err) throw err
            callback(results.rows)
        })
    },
    create(data, callback) {
        const query = `
        INSERT INTO teachers(
            avatar_url,
            name,
            birth_date,
            education_level,
            areas,
            class_type,
            subjects_taught,
            create_at
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING ID
        `
        const values = [
            data.avatar_url,
            data.name,
            data.birth,
            data.degree,
            data.areas,
            data.typeofclass,
            data.subjects_taught,
            date(Date.now()).iso
        ]
        db.query(query, values, function(err, results) {
            if (err) throw err
            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query('select * from students where id = $1', [id], function(err, results) {
            if (err) throw "data base error"
            callback(results.rows[0])
        })
    },
    update(data, callback) {
        const query = `
           update students SET 
           avatar_url=($1),
           name=($2),
           birth=($3),
           email=($4),
           schoolyear=($5),
           hours=($6)
           where id= $7
        `
        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.email,
            data.schoolyear,
            data.hours,
            data.id
        ]
        db.query(query, values, function(err, res) {
            if (err) throw "data base error"
            callback()
        })

    },
    delete(id, callback) {
        db.query(`DELETE FROM students where id = $1`, [id], function() {
            callback()
        })
    }
}