import axios from 'axios';

const URL_API = "https://api-rastreio-encomendas.vercel.app";

const searchCorreios = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET': // track info
            try {
                const { code } = req.query;
                const response = await axios.get(`${URL_API}/track/${code}`);
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