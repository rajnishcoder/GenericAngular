
import { TaskCode } from './globals';
import * as global from './globals';
import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { HttpRequest } from './HttpRequest';

// import { DistributorDetailsModel } from './models/DistibutorDetailsModel';

export class ApiGenerator {


    // static getLoginRequest(loginRequest: LoginRequest){
    //     const req = new HttpRequest(global.LAB_LOGIN_URL);
    //     req.setPostMethod();
    //     req.addDefaultHeaders();
    //     req.params = loginRequest;
    //     req.classTypeValue = LoginResponse;
    //     req.taskCode = TaskCode.LOGIN;
    //     return req;
    // }
    
}


export class JsonParser {
    static parseJson<T>(response: any, type: ClassType<T>): T {
        const parsedResponse = plainToClass(type, response as object);
        return parsedResponse;
    }

    static parseJsonString(response: any, type: ClassType<any>): any {
        const parsedResponse = plainToClass(type, response as object);
        return parsedResponse;
    }

    static parseJsonArray(response: any, type: ClassType<any>): any {
        const parsedResponse = plainToClass(type, response);
        return parsedResponse;
    }
}
