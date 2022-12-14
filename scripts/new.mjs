import { ThirdwebSDK, DelayedReveal } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

// SDK CONTENT

(async () => {
    const drop = await sdk.getContract(
      "0x645e0aB37178AE6e74CF088174AE98A7918aCF71",
      "nft-drop",
      console.log("accessed contract")
    );

    try {
      await drop.createBatch([
        "https://my-json-server.typicode.com/noxcusej/metamorphic2/nfts/0",
        "https://my-json-server.typicode.com/noxcusej/metamorphic2/nfts/1",
      ]);

      console.log("uploaded all nfts");
    } catch (error) {
      console.log(error);
    }
  })();