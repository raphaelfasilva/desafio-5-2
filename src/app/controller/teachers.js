const { age } = require('../../lib/util')
const { date } = require('../../lib/util')
const teacher = require("../models/teacher")

module.exports = {
    index(req, res) {
        teacher.all(function(teachers) {
            const teachersformated = []
            for (i in teachers) {
                const teacher = {
                    ...teachers[i],
                    areas: teachers[i].areas.split(",")
                }
                teachersformated.push(teacher)
            }
            return res.render("teachers/index", { teachers: teachersformated })
        })
    },
    post(req, res) {
        const { id } = req.body
        const keys = Object.keys(req.body)
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("por favor validar todos os campos")
            }
        }
        teacher.create(req.body, function() {
            return res.redirect(`/teachers/${id}`)
        })
        return
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