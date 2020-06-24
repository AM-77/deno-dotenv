import dotenv from "./mod.ts"
dotenv(".env.example")

console.log("[+] Read env vars from a custom file >> .env.example")
const env_examle = Deno.env.toObject()
console.log("HOST ", env_examle.HOST)
console.log("PORT ", env_examle.PORT)