import Siswa from "../model/siswamodel.mjs";
import Capitalize from "../selfModul/capitalize.mjs";


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
        Object.assign(data, { nilaiMapel: { PABP: 0, PPKN: 0, BIndo: 0, Matematika: 0, IPA: 0, IPS: 0, Average: 0 } })
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
        const siswa = req.params.id === 'all' ? await Siswa.find({}) : await Siswa.findById(req.params.id)
        res.json(siswa)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const ubahSiswa = async (req, res) => {
    try {
        await Siswa.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(200).json({ message: "Data siswa berhasil diubah" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

const hapusSiswa = async (req, res) => {
    try {
        await Siswa.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: "Data berhasil dihapus" })
    } catch (error) {
        res.json({ message: error.message })
    }
}


export { tambahSiswa, daftarSiswa, ubahSiswa, hapusSiswa }
