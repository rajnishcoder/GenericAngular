

export const API_BASE_URL = 'http://13.127.133.104:8082';

export const googleMapApiKey = '&key=AIzaSyCLi0z1Fmcwz4Sf8QNzCEBX6F3_q5sER3E';
export const URL_SYNTAGI_LAB_USERS = API_BASE_URL + '/syntagi/labUsers'
export const URL_SYNTAGI = API_BASE_URL + '/syntagi'
export const URL_VENDERS_LAB_TESTS = URL_SYNTAGI + '/vendorsLabTests'
export const URL_SYNTAGI_LAB_TESTS = URL_SYNTAGI + '/labTests'
export const GET_SUGGESTED_DISTRIBUTOR_LIST_API = API_BASE_URL + '/syntagi/pharmacyDistributors/searchByName?name=';
export const LAB_LOGIN_URL= URL_SYNTAGI_LAB_USERS + '/login';
export const VENDOR_LAB_TESTS_URL= URL_VENDERS_LAB_TESTS + '/getAllByVendorId?labVendorId=';
export const GET_LAB_TEST_URL= URL_SYNTAGI_LAB_TESTS + '/getAll?';
export const GET_LABS_BY_USERNAME= URL_SYNTAGI_LAB_USERS + '/getLabsByUserName?userName=';
export const GET_TEST_URL=URL_VENDERS_LAB_TESTS +'/add';
export const DELETE_TEST_URL= URL_VENDERS_LAB_TESTS +'/delete?id=';
export const ADD_LAB_TEST_VALUE = URL_SYNTAGI_LAB_TESTS+'/add';
export const GET_TEST_CATEGORIES = URL_SYNTAGI+'/labTestCategories/getAll';
export const POST_LAB_API_URL: string = URL_SYNTAGI + '/labVendors/add';

export enum TaskCode {
    GET_DISTRIBUTORS_LIST = 1,
    LOGIN = 2,
    VENDOR_LAB_TESTS=4,
    GET_LABS_WITH_USERNAME=3,
    GET_LAB_TEST=5,
    GET_ADD_TEST=6,
    DELETE_TEST=7,
    ADD_LAB_TEST_VALUE = 8,
    GET_TEST_CATEGORIES = 9

}

export enum KEYS {
    LOGIN_DATA_KEY = 'loginDataKey',
    LABS_DATA = 'labsData',
    IS_LOGIN = 'isLogin'
}
export enum ROTATE {
    ZERO_DEGREE_ROTATE = 'rotate(0deg)',
    ONE_EIGHTY_DEGREE_ROTATE = 'rotate(180deg)'
}

