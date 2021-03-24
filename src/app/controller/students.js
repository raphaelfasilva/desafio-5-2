const student = require("../models/student")

module.exports = {
    index(req, res) {
        student.all(function(students) {
            return res.render("students/index", { students })
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("por favor validar todos os campos")
            }
        }
        student.create(req.body, function(student) {
            return res.redirect(`/students/${student.id}`)
        })
    },
    show(req, res) {
        const { id } = req.params
        return
    },
    edit(req, res) {
        const { id } = req.params
        return
    },
    put(req, res) {
        const { id } = req.body
        let index = 0
        return
    },
    delete(req, res) {
        const { id } = req.body
        return
    }
}