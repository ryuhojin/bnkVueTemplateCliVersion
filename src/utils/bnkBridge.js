/**
 * @name bnkBridge
 * @company BNKSYSTEM - Mobile Business Front-end
 * @date 2020-11-03
 * @description : 웹-안드로이드/아이폰 브릿지 인터페이스명(bnkBridge) 내용은 아래와 같음
 */


import router from '@/router'
import store from '@/store'
var bnkBridge = {
	API_URL:'',
    /**
     * @name requestFromWebView 웹에서 네이티브 호출
     * @param {*} command 명령어
     * @param {*} params 전송할 파라미터
     * @param {*} isReqeustSuccess 성공시 콜백
     * @param {*} isReqeustFailed 실패시 콜백
     */
    requestFromWebView(command,params,isReqeustSuccess,isReqeustFailed) {
		let _requestTime = 'ID'+Date.now();
		
		let _funcObject = {
			'id': _requestTime,
			'command': command,
			'params':params,
			'success':isReqeustSuccess,
			'fail':isReqeustFailed
			
		}
		
		let _requestCommandJsonString = JSON.stringify(_funcObject);
		
		let _kindOfDevice = bnkBridge.checkConnectedOS();
		
		switch(_kindOfDevice){
			case "Android":
				window.bnkBridge.requestFromWebView(_requestCommandJsonString);
				break;
			case "iOS":
				//IOS Bridge
				break;
			default :
				console.log("지원하지 앟는 디바이스 입니다");
				break;
		}
    },
    /**
     * @name requestFromNative 네이티브에서 웹 호출
     * @param {*} command 명령어
     * @param {*} params 전송받은 파라미터
     */
    requestFromNative(command,params){
		switch(command){
			case "SET_SHARED_DATA":
				setSharedData(params);
				break;
			case "GET_SHARED_DATA":
				requestFromWebView("GET_SHARED_DATA",getSharedData());
				break;
		}
	},
	/**
	 * @name setSharedData 웹,네이티브 공통 데이터 저장소(refresh시에 초기화) 셋팅
	 * @param {*} params 웹으로 전송할 데이터
	 */
	setSharedData(params){
		store.dispatch('SET_SHARED_DATA',params);
	},
	/**
	 * @name getSharedData 웹,네이티브 공통 데이터 저장소 호출
	 */
	getSharedData(){
		return store.getters.getSharedData;
	},
    /**
     * @name 기기 판별
     */
    checkConnectedOS(){	
		let _vender = navigator.userAgent || navigator.vendor || window.opera;

		if (/windows/i.test(_vender)) { return "Windows"; } 
		if (/android/i.test(_vender)) { return "Android"; }
		if (/iPad|iPhone|iPod/.test(_vender) && !window.MSStream) { return "iOS"; }
			return "unknown"	
    },
    /**
     * @name 페이지 전환
	 * @url 넘어갈 페이지 PATH
     */
    onChagePage(url){
        router.push(url)
	}
};

(function(){
    window['requestFromNative'] = bnkBridge.requestFromNative
	window['onChagePage'] = bnkBridge.onChagePage
}())

export default bnkBridge