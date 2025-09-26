require('dotenv').config();
const path = require('path');
const fs = require('fs');
const { Wallets, Gateway } = require('fabric-network');
const logger = require('./logger');


const conn = path.resolve(+__dirname, 'connection.json');

const ccp = JSON.parse(fs.readFileSync(conn, 'utf8'));

async function getContract(user, channel, chainCode){
    try{
        // load wallet 
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        logger.info(`Wallet path: ${walletPath}`);

        // check to see if we've already enrolled the user
        const identity = await wallet.get(user);
        if (!identity) {
            logger.error(`An identity for the user ${user} does not exist in the wallet`);
            logger.error('Run the registerUser.js application before retrying');
            return;
        }
        const gateway = new Gateway();
        await gateway.connect(ccp,{
            wallet,
            identity,
            discovery: { enabled: true, asLocalhost: process.env.NODE_ENV === 'local' } 
        })

        // get channel and contract
        const network = await gateway.getNetwork(channel);
        const conract = network.getContract(chainCode);
        return {conract,gateway};
    }
    catch (err){
    logger.error(`Failed to get contract: ${err}`);
    }
}

module.exports = {getContract};