const express = require("express");
const router = express.Router();


router.get("/admin", (req, res) => {
    res.json({
        error: null,
        data: {
            title: "Ruta Protegida",
            user: req.user // <= Aquí está el usuario que hizo el request
        }
    });
});


module.exports = router;