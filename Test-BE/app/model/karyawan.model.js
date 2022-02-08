module.exports = (sequelize, DataTypes) => {
    const Karyawan = sequelize.define("m_karyawan", {

          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
          },          
          nik: {
            type: DataTypes.STRING(8),
            allowNull: false,
            primaryKey: true
          },
          nama: {
            type: DataTypes.STRING(150),
            allowNull: true
          },
          alamat: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },
          tgllahir : {
            autoIncrement: false,
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: false
          },
          devisi: {
            autoIncrement: false,
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: false
          },
          status: {
            autoIncrement: false,
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: false
          },
    }, {
      sequelize,
      tableName: 'm_karyawan',
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  
    return Karyawan;
  }; 