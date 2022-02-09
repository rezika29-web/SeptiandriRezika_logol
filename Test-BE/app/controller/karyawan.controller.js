const db = require('../model');
const Karyawan = db.karyawan

exports.create = async (req, res) => {
  // valnikasi request
  

  const data_karyawan = {
    elemenData: req.body.elemenData,
    nik: req.body.nik,
    nama: req.body.nama,
    alamat: req.body.alamat,
    tgllahir: req.body.tgllahir,
    devisi: req.body.devisi,
    status: req.body.status,
  }

  await Karyawan.create(data_karyawan)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating data."
    });
  })
} 
exports.countData = async (req, res) => {
  await Karyawan.max('id')
  .then(data => {
    res.status(200).send((data).toString());
    // res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving data."
    });
  });
}

exports.readAll = async (req, res) => {
  await Karyawan.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving data."
    });
  });
}
exports.readByNik = async (req, res) =>{
    const nik = req.params.nik
    await Karyawan.findOne({where: { nik: nik}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
}
exports.update = async (req, res) => {
  const nik = req.params.nik

  await Karyawan.update(req.body, { where: { nik: nik}})
  .then(num => {
      num == 1 ? res.send({
        message: "Data was updated successfully."
      }) : res.send({
        message: `Cannot update Data with nik=${nik}. Maybe Data was not found or req.body is empty!`
      });
  })
  .catch(err => {
    res.status(500).send({
      message: `Error updating Data with nik=${nik}`,
      error: err
    })
  })
}

exports.delete = async (req, res) => {
  const nik = req.params.nik

  await Karyawan.destroy({ where: { nik: nik}})
  .then(num => {
      num == 1 ? res.send({
        message: "Data was deleted successfully."
      }) : res.send({
        message: `Cannot delete Data with nik=${nik}. Maybe Data was not found or req.body is empty!`
      });
  })
  .catch(err => {
    res.status(500).send({
      message: `Error deleting Data with nik=${nik}`,
      error: err
    })
  })
}