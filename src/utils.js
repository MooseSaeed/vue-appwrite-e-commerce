import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("appwrite-ecom"); // Your project ID

export { appwrite };
