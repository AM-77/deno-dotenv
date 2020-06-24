import dotenv from "https://raw.githubusercontent.com/AM-77/deno-dotenv/master/mod.ts"

console.log("[+] Read env vars from the default file >> .env")
const env = dotenv()
console.log("PASSWORD ", env.PASSWORD)
console.log("KEY ", env.KEY)