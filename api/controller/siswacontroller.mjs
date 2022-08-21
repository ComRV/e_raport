import Siswa from "../model/siswamodel.mjs";
import Capitalize from "../self_modul/capitalize.mjs";
import moment from "moment";
moment().format()

const tambahSiswa = async (req, res) => {
    const data = new Siswa(req.body)

    const findNamaSiswa = await Siswa.find({
        namaSiswa: Capitalize(req.body.namaSiswa)
    }).exec()

    const findNoInduk = await Siswa.find({
        noInduk: req.body.noInduk
    }).exec()

    const findNISN = await Siswa.find({
        NISN: req.body.NISN
    })

    try {
        data.namaSiswa = Capitalize(data.namaSiswa)
        data.tempatLahir = Capitalize(data.tempatLahir)
        data.alamat = Capitalize(data.alamat)

        if (findNamaSiswa.length > 0) return res.status(400).json({ message: "Nama siswa telah digunakan" })
        if (findNoInduk.length > 0) return res.status(400).json({ message: "No Induk telah digunakan" })
        if (findNISN.length > 0) return res.status(400).json({ message: "NISN telah digunakan" })

        await data.save()
        res.status(200).json({ message: "Data siswa berhasil ditambah" })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const daftarSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.find({})
        res.json(siswa)
    } catch (error) {
        res.json({ error: error.message })
    }
}

export { tambahSiswa, daftarSiswa }
