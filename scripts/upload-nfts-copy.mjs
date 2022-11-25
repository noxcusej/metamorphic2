import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

config();

const sdk = ThirdwebSDK.fromPrivateKey(, "mumbai")

