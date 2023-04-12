import {Routing} from "express-zod-api"
import {helloWorldEndpoint, postNameEndpoint} from "./endpoint"

export const routing: Routing = {
    v1: {
        hello: helloWorldEndpoint,
        add: postNameEndpoint,
    }
}
