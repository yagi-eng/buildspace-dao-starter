import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// Importing and configuring our .env file that we use to securely store our environment variables
import dotenv from "dotenv";
dotenv.config();

const editionDrop = sdk.getEditionDrop(process.env.INSERT_EDITION_DROP_ADDRESS);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Curry & Rice",
        description: "This NFT will give you access to GohanDAO!",
        image: readFileSync("scripts/assets/curry.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
