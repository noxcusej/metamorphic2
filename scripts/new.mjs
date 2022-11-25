import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

// SDK CONTENT

(async () => {
    const drop = await sdk.getContract(
      "0x6f8C6cA3Fa0Cfd2Dde540A7Fc0f1cEb028fc07c1",
      "nft-drop"
      console.log("accessed contract")
    );
  
    try {
      await drop.createBatch([
        "https://my-json-server.typicode.com/jarrodwatts/centralized-nft-metadata/nfts/0",
        "https://my-json-server.typicode.com/jarrodwatts/centralized-nft-metadata/nfts/1",
      ]);
      console.log("uploaded all nfts");
    } catch (error) {
      console.log(error);
    }
  })();