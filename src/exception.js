export class MyException extends Error {

}

export const callMe = (name) => {
    if(name === "yuli") {
        throw new MyException("Ups my exceptions happends")
    } else {
        return "OK";
    }
}