import Siswa from "../model/siswamodel.mjs";

const inputNilai = async (req, res) => {
    try {
        const nilaiMapel = req.body
        const nilai = Object.values(nilaiMapel)
        const jumlah_nilai = nilai.reduce((a, b) => a + b)
        Object.assign(nilaiMapel, { Average: parseFloat((jumlah_nilai / nilai.length).toFixed(2)) })
        await Siswa.updateOne({ _id: req.params.id }, { nilaiMapel })
        res.status(200).json({ message: "Input data nilai berhasil" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export { inputNilai }