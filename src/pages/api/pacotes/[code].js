import axios from 'axios';

// export default async (req, res) => {
const searchCorreios = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET': // track info
            try {
                const { code } = req.query;
                const response = await axios.get(`https://proxyapp.correios.com.br/v1/sro-rastro/${code}`);
                res.status(200).json({ success: true, result: response.data });
            } catch (err) {
                res.status(400).json({ success: false, message: err });
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}

export default searchCorreios;