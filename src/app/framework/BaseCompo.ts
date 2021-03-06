import { CommonService } from './../services/common.service';
import { StorageUtil } from './StorageUtil';
import { OnInit } from '@angular/core';
import { TaskCode } from '../framework/globals';
import { BaseResponse } from '../models/BaseResponse';
// import { Logger } from './utils/Logger';
import { HttpRequest, HttpGenericRequest } from '../framework/HttpRequest';
import { DownloadManager } from './DownloadManager';

export class BaseComponent implements OnInit {

    onlineStatus: boolean = navigator.onLine;
    constructor(protected commonService: CommonService) { }

    ngOnInit() {
    }

    downloadData(req: HttpRequest) {
        this.checkLocalStorage(req);
        const manager = new DownloadManager(this, this.commonService);
        manager.downloadData(req);
    }

    checkOnline() {
        return true;
    }


    checkLocalStorage(req: HttpRequest) {
        if (req.storageKeyName) {
            const response = StorageUtil.getConvertedObjFromLocalStorage(req.storageKeyName, req.classTypeValue);
            if (response){
                this.onResponseReceived(req.taskCode, response);
            }
        }
    }

    // showCommonLoader(taskCode: TaskCode) {
	// 	document.getElementById('commonFullLoader').style.display = 'block';
	// }
	// hideCommonLoader(taskCode: TaskCode) {
	// 	document.getElementById('commonFullLoader').style.display = 'none';
	// }

    onPreExecute(taskCode: TaskCode) {
        switch (taskCode) {
            default:
                // this.showCommonLoader(taskCode);
                break;
        }
    }

    onErrorReceived(taskCode: TaskCode) {
        // this.hideCommonLoader(taskCode);
        console.log('on error recevied of base compo');
    }

    onResponseReceived(taskCode: TaskCode, response: any) {
        // Logger.log(response);
        // this.hideCommonLoader(taskCode);
        if (response instanceof BaseResponse) {
            return !response.error;
        }
        return true;
    }
    onTokenInvalid(response: any) {
        alert(response.message);
        this.logOut();
    }

    onApiError(taskCode: TaskCode, response: any) {
    }

    logOut() {
        StorageUtil.clearAll();
        window.location.href = '/login';
    }
}
