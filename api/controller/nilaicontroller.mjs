import Siswa from "../model/siswamodel.mjs";
import PDFDocument from "pdfkit"

const inputNilai = async (req, res) => {
    try {
        const nilaiMapel = req.body
        const nilai = Object.values(nilaiMapel)
        const jumlah_nilai = nilai.reduce((a, b) => a + b)
        const Average = parseFloat((jumlah_nilai / nilai.length).toFixed(2))
        Object.assign(nilaiMapel, { Average, Keterangan: Average > 65 ? "Lulus" : "Tidak Lulus" })
        await Siswa.updateOne({ _id: req.params.id }, { nilaiMapel })
        res.status(200).json({ message: "Input data nilai berhasil" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

const buildpdf = (data, dataCallback, endCallback) => {
    const doc = new PDFDocument()
    doc.on('data', dataCallback)
    doc.on('end', endCallback)
    doc.fontSize(20).text('SMK International Bangka', { align: 'center' })

    doc.moveDown()
    doc.fontSize(12).text(`Nama : ${data.namaSiswa}`)

    doc.moveDown()
    doc.fontSize(12).text(`No Induk : ${data.noInduk}`)

    doc.moveDown()
    doc.fontSize(12).text(`NISN : ${data.NISN}`)

    doc.moveDown()
    doc.fontSize(12).text(`Jenis Kelamin : ${data.jenisKelamin}`)

    doc.moveDown()
    doc.fontSize(12).text(`Tempat Tanggal Lahir : ${data.tempatLahir}, ${data.tglLahir}`)

    doc.moveDown()
    doc.fontSize(12).text(`Agama : ${data.agama}`)

    doc.moveDown()
    doc.fontSize(12).text(`Alamat : ${data.alamat}`)

    doc.moveDown()
    doc.fontSize(18).text('Nilai', { align: 'center' })

    doc.moveDown()
    doc.fontSize(12).text(`PABP : ${data.nilaiMapel.PABP}`)

    doc.moveDown()
    doc.fontSize(12).text(`PPKN : ${data.nilaiMapel.PPKN}`)

    doc.moveDown()
    doc.fontSize(12).text(`Bhs Indonesia : ${data.nilaiMapel.BIndo}`)

    doc.moveDown()
    doc.fontSize(12).text(`Matematika : ${data.nilaiMapel.Matematika}`)

    doc.moveDown()
    doc.fontSize(12).text(`IPA : ${data.nilaiMapel.IPA}`)

    doc.moveDown()
    doc.fontSize(12).text(`IPS : ${data.nilaiMapel.IPS}`)

    doc.moveDown()
    doc.fontSize(12).text(`Average : ${data.nilaiMapel.Average}`)

    doc.moveDown()
    doc.fontSize(12).text(`Keterangan : ${data.nilaiMapel.Keterangan}`)

    doc.end()
}

const raporpdf = async (req, res) => {
    const siswa = await Siswa.findById(req.params.id)
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment;filename=Rapor_${siswa.namaSiswa.replace(" ", "_")}.pdf`
    })
    buildpdf(siswa, chunk => stream.write(chunk), () => stream.end())
}



export { inputNilai, raporpdf }