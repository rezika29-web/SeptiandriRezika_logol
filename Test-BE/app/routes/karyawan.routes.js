module.exports = (app) => {
    const karyawan = require("../controller/karyawan.controller")
    let router = require("express").Router()
  
    router.get("/", karyawan.readAll)
    router.get("/:nik", karyawan.readByNik)
    router.post("/", karyawan.create)
    router.put("/:nik", karyawan.update)
    router.post("/:nik", karyawan.delete)
  
    app.use("/api/karyawan", router)
  }