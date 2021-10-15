const express = require('express')
const app = express()
const port = 3000

const Web3 = require('web3')
const web3 = new Web3('https://http-mainnet.hecochain.com')
const nft_address = '0x7c0f2b57939d54cf995ad086fb28e9a41d4370f4'
const nft_abi = `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"TypeList","outputs":[{"internalType":"uint256","name":"poolinfo","type":"uint256"},{"internalType":"uint256","name":"typeid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"_num","type":"uint256"},{"internalType":"uint256","name":"_eventid","type":"uint256"},{"internalType":"uint256","name":"_randNum","type":"uint256"},{"internalType":"uint256","name":"_minNum","type":"uint256"},{"internalType":"uint256","name":"_MaxNum","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_typeId","type":"uint256"}],"name":"getTypeList","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_adddressList","type":"address[]"}],"name":"removeMinerList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_adddressList","type":"address[]"}],"name":"setMinerList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]`


const typeList = {
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
    4: {
        "name": "珍稀卡4",
        "image": "4.jpg",
        "description": "这种是珍稀卡4"
    },
    5: {
        "name": "珍稀卡5",
        "image": "5.jpg",
        "description": "这种是珍稀卡5"
    },
    6: {
        "name": "珍稀卡6",
        "image": "6.jpg",
        "description": "这种是珍稀卡6"
    },
    7: {
        "name": "珍稀卡7",
        "image": "7.jpg",
        "description": "这种是珍稀卡7"
    },
    8: {
        "name": "珍稀卡8",
        "image": "8.jpg",
        "description": "这种是珍稀卡8"
    },
    9: {
        "name": "珍稀卡9",
        "image": "9.jpg",
        "description": "这种是珍稀卡9"
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

app.get('/haha/api/:tokenId(\\d+)', async (req, res) => {
    const id = req.params.tokenId
    const contract = new web3.eth.Contract(JSON.parse(nft_abi), nft_address);
    try {
        const ret = await contract.methods.TypeList(id).call();
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
        res.send('error')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})