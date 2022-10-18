import {getHelloMessage} from "./services/sample-service.js";

export const hello = async event => {
    return getHelloMessage(event)
}
