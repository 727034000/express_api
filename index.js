const express = require('express')
const app = express()
const port = 3000

const Web3 = require('web3')
const web3 = new Web3('https://http-mainnet.hecochain.com')
const nft_address = '0x7c0f2b57939d54cf995ad086fb28e9a41d4370f4'
const nft_abi = `[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"TypeList","outputs":[{"internalType":"uint256","name":"poolinfo","type":"uint256"},{"internalType":"uint256","name":"typeid","type":"uint256"}],"stateMutability":"view","type":"function"}]`


const typeList = {
    0: {
        "name": "卡不存在",
        "image": "error.jpg",
        "description": "卡不存在"
    },
    1: {
        "name": "珍稀卡1",
        "image": "1.jpg",
        "description": "这种是珍稀卡1"
    },
    2: {
        "name": "珍稀卡2",
        "image": "2.jpg",
        "description": "这种是珍稀卡2"
    },
    3: {
        "name": "珍稀卡3",
        "image": "3.jpg",
        "description": "这种是珍稀卡3"
    },
    20: {
        "name": "功能卡10",
        "image": "20.jpg",
        "description": "这种是功能卡10,生命力+100"
    },
    27: {
        "name": "功能卡17",
        "image": "27.jpg",
        "description": "这种是功能卡17,伤害+5"
    },
}

app.get('/api/factory/reward/:tokenId(\\d+)', async (req, res) => {
    const id = req.params.tokenId
    const contract = new web3.eth.Contract(JSON.parse(nft_abi), nft_address);
    try {
        const ret = await contract.methods.TypeList(id).call();
        console.log(ret)
        const typeid = ret.typeid
        const type = typeList[typeid]
        const return_data = {
            "attributes": [],
            "description": `${type.description}`,
            "image": `${type.image}`,
            "name": `${type.name} #${id}`
        }
        res.json(return_data)
    } catch (e) {
        console.log(e)
        res.send('error')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})