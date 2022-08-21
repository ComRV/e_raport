import mongoose from "mongoose";

const collectionName = 'siswa'
const Siswa = mongoose.model('siswa', {
    namaSiswa: {
        type: String,
        required: true
    },
    noInduk: {
        type: String,
        required: true
    },
    NISN: {
        type: String,
        required: true
    },
    jenisKelamin: {
        type: String,
        required: true
    },
    tempatLahir: {
        type: String,
        required: true
    },
    tglLahir: {
        type: String,
        required: true
    },
    agama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    nilaiMapel: {
        type: Object
    }

}, collectionName)

export default Siswa