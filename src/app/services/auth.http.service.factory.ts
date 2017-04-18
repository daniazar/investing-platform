import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';


export default class MyAuthHttp {
    public static authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
    tokenName: 'id_token',
		tokenGetter: (() => sessionStorage.getItem('id_token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}
}