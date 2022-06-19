
export default function handler(req, res) {
    res.status(200).json({
        "success": true,
        "result": {
            "objetos": [
                {
                    "codObjeto": "LB528961554HK",
                    "eventos": [
                        {
                            "codigo": "RO",
                            "descricao": "Objeto em trânsito - por favor aguarde",
                            "dtHrCriado": "2022-04-21T12:22:00",
                            "tipo": "01",
                            "unidade": {
                                "codSro": "00344000",
                                "endereco": {

                                },
                                "nome": "HONG KONG",
                                "tipo": "País"
                            },
                            "unidadeDestino": {
                                "codSro": "00500001",
                                "endereco": {
                                    "uf": "BR"
                                },
                                "nome": "Unidade de Tratamento Internacional",
                                "tipo": "País"
                            },
                            "urlIcone": "/public-resources/img/caminhao-cor.png"
                        },
                        {
                            "codigo": "PO",
                            "descricao": "Objeto postado",
                            "dtHrCriado": "2022-04-20T14:18:00",
                            "tipo": "01",
                            "unidade": {
                                "codSro": "00344000",
                                "endereco": {

                                },
                                "nome": "HONG KONG",
                                "tipo": "País"
                            },
                            "urlIcone": "/public-resources/img/agencia-cor.png"
                        }
                    ],
                    "modalidade": "V",
                    "tipoPostal": {
                        "categoria": "PRIME ÈXPRES",
                        "descricao": "OBJETO INTERNACIONAL PRIME",
                        "sigla": "LB"
                    },
                    "habilitaAutoDeclaracao": false,
                    "permiteEncargoImportacao": false,
                    "habilitaPercorridaCarteiro": false,
                    "bloqueioObjeto": false,
                    "possuiLocker": false,
                    "habilitaLocker": false,
                    "habilitaCrowdshipping": false
                }
            ],
            "quantidade": 1,
            "resultado": "Todos os Eventos",
            "versao": "2.1.3"
        }
    })
}