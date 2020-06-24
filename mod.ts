// the line beak regulat expression.
const LINE_BREAK: RegExp = /\r\n?|\n/

/**
 * read a file from a path and retuurn its content as a string.
 *
 * @param filePath - the path to the `.env` file.
 * @return the `.env` file content as a string.
 */
const readFileToStrSync = (filePath: string): string => {
  return new TextDecoder("utf-8").decode(Deno.readFileSync(filePath))
}

/**
 * parse the .env file content from string to a two-dimensional array.
 *
 * @param decodedEnv -  the `.env` file content.
 * @return a two-dimensional array of type [[key, value], [key, value]]
 */
const parse = (decodedEnv: string): string[][] => {

  // convert the content of .env to an array of lines.
  const envList = decodedEnv.split(LINE_BREAK)

  // loop throw the lines and split them tp pairs [keys, value]
  return envList.map(item => {
    const pair = item.split("=")
    // remove white spaces and return a two-dimensional array [[key, value], [key, value], [key, value]]
    return [pair[0].trim(), pair[1].trim()]
  })
}

/**
 * set the new vars to the deno env object.
 *
 * @param parsedEnv - a two-dimensional array of type [[key, value], [key, value]].
 */
const setEnv = (parsedEnv: string[][]): void => {
  for (let i = 0; i < parsedEnv.length; i++) {
    Deno.env.set(parsedEnv[i][0], parsedEnv[i][1])
  }
}

/**
 *  the main function.
 *
 * @return an aboject contains all the environment variables.
 */
const dotenv = (envFilePath?:string) => {
  setEnv(parse(readFileToStrSync(envFilePath || ".env")))

  // return an object that contains all the environment variables
  // including the default variables
  return Deno.env.toObject()
}

export default dotenv