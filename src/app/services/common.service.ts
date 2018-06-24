import { ClassType } from 'class-transformer/ClassTransformer';
import { HttpRequest } from './../framework/HttpRequest';
import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CommonService {

	constructor(public http: HttpClient) { }

	callAPI(req: HttpRequest) {
		const method = req.method;
		const options = new Object({ headers: req.headers });
		if (method === 'GET') {
			return this.http.get<any>(req.url, options);
				// .map(res => res.json());
		} else if (method === 'POST') {
			return this.http.post(req.url, req.params, options);
				// .map(res => res.json());
		} else if (method === 'PUT') {
			return this.http.put(req.url, req.params, options);
				// .map(res => res.json());
		} else if (method === 'DELETE') {
			return this.http.delete(req.url, options);
				// .map(res => res.json());
		} else if (method === 'PATCH') {
			return this.http.patch(req.url, req.params, options);
				// .map(res => res.json());
		}
	}


	throwError(error: any) {
		if (error !== '') {
			// alert('Server Error\n'+ error );
			console.log(error);
		}
	}

	showCommonLoader() {
		document.getElementById('commonFullLoader').style.display = 'block';
	}

	hideCommonLoader() {
		document.getElementById('commonFullLoader').style.display = 'none';
	}


}
