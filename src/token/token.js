import axios from "axios"

const GetToken = async () => {
    const GetToken = await axios.get("http://localhost:5000/token")
    return GetToken.data.accessToken
}

export default GetToken