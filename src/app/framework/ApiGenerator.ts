
import { TaskCode } from './globals';
import * as global from './globals';
import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { LoginRequest } from '../models/Requests/LoginRequest';
import { LoginResponse } from '../models/Response/Login/LoginRespnse';
import { AddTestRequest } from '../models/Requests/AddTestRequest';
import { AddTestResponse } from '../models/Response/LabProfile/AddTestResponse';
import { VendorsLabTestsResponse } from '../models/Response/LabProfile/VendorsLabTestsResponse';
import { LabTestResponse } from '../models/Response/LabProfile/LabTestResponse';
import { DeleteTestResponse } from '../models/Response/LabProfile/DeleteTestResponse';
import { LoginWithUserNameResponse } from '../models/Response/Login/LoginWithUserNameResponse/LoginWithUserNameResponse';
import { HttpRequest } from './HttpRequest';
import { AddNewTestValueRequest } from '../models/Requests/AddNewTestValueRequest';
import { AddNewTestValueResponse } from '../models/Response/LabProfile/AddNewTestValueResponse';
import { TestCategoriesResponse } from '../models/Response/LabProfile/TestCategoriesResponse';

// import { DistributorDetailsModel } from './models/DistibutorDetailsModel';

export class ApiGenerator {

    static addNewTestValue(addNewTestValueRequest: AddNewTestValueRequest) {
        const req = new HttpRequest(global.ADD_LAB_TEST_VALUE);
        req.setPostMethod();
        req.addDefaultHeaders();
        req.params = addNewTestValueRequest;
        req.classTypeValue = AddNewTestValueResponse;
        req.taskCode = TaskCode.ADD_LAB_TEST_VALUE;
        return req;
    }

    static getLoginRequest(loginRequest: LoginRequest){
        const req = new HttpRequest(global.LAB_LOGIN_URL);
        req.setPostMethod();
        req.addDefaultHeaders();
        req.params = loginRequest;
        req.classTypeValue = LoginResponse;
        req.taskCode = TaskCode.LOGIN;
        return req;
    }
    static getAddTestData(addTestRequest: AddTestRequest){
        const req = new HttpRequest(global.GET_TEST_URL);
        req.setPostMethod();
        req.addDefaultHeaders();
        req.params = addTestRequest;
        req.classTypeValue =AddTestResponse;
        req.taskCode = TaskCode.GET_ADD_TEST;
        return req;
    }

    static getTestCategories(){
        const req = new HttpRequest(global.GET_TEST_CATEGORIES);
        req.addDefaultHeaders();
        req.classTypeValue = TestCategoriesResponse;
        req.taskCode = TaskCode.GET_TEST_CATEGORIES;
        return req;
    }

    static getTestbyVendorid(labVendorId:string){
        const req = new HttpRequest(global.VENDOR_LAB_TESTS_URL+labVendorId);
        req.addDefaultHeaders();
        req.classTypeValue = VendorsLabTestsResponse;
        req.taskCode = TaskCode.VENDOR_LAB_TESTS;
        return req;
        }
    static getLabTest(){
        const req = new HttpRequest(global.GET_LAB_TEST_URL);
        req.addDefaultHeaders();
        req.classTypeValue = LabTestResponse;
        req.taskCode = TaskCode.GET_LAB_TEST;
        return req;
    }
    static deleteTestData(id :string){
        const req = new HttpRequest(global.DELETE_TEST_URL+id);
        req.setDeleteMethod();
        req.addDefaultHeaders();
        req.classTypeValue = DeleteTestResponse;
        req.taskCode = TaskCode.DELETE_TEST;
        console.log(req);
        return req;
    }

    static getLabsByUserName(userName: string) {
        const req = new HttpRequest(global.GET_LABS_BY_USERNAME + userName);
        req.addDefaultHeaders();
        req.classTypeValue = LoginWithUserNameResponse;
        req.taskCode = TaskCode.GET_LABS_WITH_USERNAME;
        return req;
    }

    // static postLabDataApi(json: any) {
    //     const req = new HttpRequest(global.POST_LAB_API_URL);
    //     req.setPostMethod();
    //     req.params = json;
    //     return this.callAPI(req);
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
