import {formatHandlerResponse} from "../libs/utils/handler-util.js";

export const getHelloMessage = async () => {
    return formatHandlerResponse(200, {response: "Hello!"});
};