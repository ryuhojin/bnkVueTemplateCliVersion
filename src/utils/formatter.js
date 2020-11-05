/**
 * @name formatter
 * @company BNKSYSTEM - Mobile Business Front-end
 * @date 2020-11-03
 * @description : 데이터 포맷팅 용 함수
 */

var formatter = {
    /** 
     * @name formatDate
     * @param {value} 날짜포맷터
     * @description 길이별로 년월 / 년월일 / 년월일시
     */
    formatDate(value) {
        if(!value) return value
        let _result = value
        const _valLen = value.length
        switch(_valLen){
            case 6:
                _result = _result.replace(/([0-9]{4})([0-9]{2})/, '$1-$2')
                break;
            case 8:
                _result = _result.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3')
                break;
            default:
                _result = _result.replace(/([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})/, '$1-$2-$3 $4:$5:$6')
                break;
        }
        return _result
    },
    /** 
     * @name formatTime
     * @param {value} 시간포맷터
     * @description 길이별로 시간+(구분자)+분 / 시간+(구분자)+분+(구분자)+초
     */
    formatTime(value, delimiter = ":") {
        if(!value) return value
    
        let _base = value.replace(/:/g, '')
        let _result = ''
        if(_base.length===4){
            _result = _base.substring(0,2)+delimiter+_base.substring(2,4)
        }else{
            _result = _base.substring(0,2)+delimiter+_base.substring(2,4)+delimiter+_base.substring(4,6)
        }
        return _result
    },
    /**
     * @name {formatNumberWithCommas,formatWonWithCommas,formatDollarWithCommas}
     * @description 좌측 0을 제거한 후, 3자리 단위로 끊어서 숫자, 원화 및 달러 표기
     * @param {value} 입력받을 숫자 
     */
    formatNumberWithCommas(value) {
        if(!value) return value
        let _result = value.replace(/(^0+)/,'').replace(/,/gi, "");
        _result = _result.replace(/\B(?=(\d{3})+(?!\d))/g,',');

        return _result;
    },
    formatWonWithCommas(value) {
        if(!value) return value
        let _result = value.replace(/(^0+)/,'').replace(/,/gi, "").replace(/￦/gi,"");
        _result = _result.replace(/\B(?=(\d{3})+(?!\d))/g,',');
        return "￦"+_result;
    },
    formatDollarWithCommas(value) {
        if(!value) return value
        let _result = value.replace(/(^0+)/,'').replace(/,/gi, "").replace(/$/gi,"");
        _result = _result.replace(/\B(?=(\d{3})+(?!\d))/g,',');
        return "$"+_result;
    },

    /**
     * @name formatUseNotSpecialCharacters
     * @param {value} 입력 
     * @description 특수문자삭제
     */
    formatUseNotSpecialCharacters(value) {
        if(!value) return value
        return value.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi,'')
    },
    
    /**
     * @name formatAccount
     * @param {value} 계좌번호 
     * @description 계좌번호 포매터
     */
    formatAccount(value) {
        if(!value) return value;
        value = value.replace(/-/g,'')
    
        let formattedVal = value
        const formattedValLen = formattedVal.length
        const hiddenLen = formattedValLen - 12
        let pattern = ''
        let regex = null
        let replaceWith = ''
    
        switch(formattedValLen){
            case 12:
                formattedVal = formattedVal.replace(/([0-9]{3})([0-9]{2})([0-9]{6})([0-9]{1})/, '$1-$2-$3-$4')
                break;
            case 13:
                formattedVal = formattedVal.replace(/([0-9]{3})([0-9]{4})([0-9]{4})([0-9]{2})/, '$1-$2-$3-$4')
                break;
            case 16:
                replaceWith = '$1-$2-$3-' + '*'.repeat(hiddenLen)
                pattern = '([0-9]{4})([0-9]{4})([0-9]{4}).{' + hiddenLen + '}$'
                regex = new RegExp(pattern, 'g')
                formattedVal = formattedVal.replace(regex, replaceWith)
                break;
        }
        return formattedVal
    },
    /** 
     * @name formatRemoveComma
     * @param {value} 제거할값
     * @description 콤마제거용
     */
    formatRemoveComma(value) {
        return value.replace(/,/gi, "");
    },
    /** 
     * @name formatTel
     * @param {number} 
     */
    formatTel(number) {
        if(!number) return number;
    
        number = number.replace(/[^0-9]/g, '');
        let _res = '';
        let _nLen = number.length;
        if(_nLen<3){
            _res = number;
        } else {
            if(number.substr(0,2)==='02'){
                if(_nLen <= 5) {
                    _res = number.substr(0, 2) + '-' + number.substr(2, 3);
                }else if(_nLen > 5 && _nLen <= 9) {
                    _res = number.substr(0, 2) + '-' + number.substr(2, 3) + '-' + number.substr(5);
                }else {
                    _res = number.substr(0, 2) + '-' + number.substr(2, 4) + '-' + number.substr(6);
                }
            } else {
                if(_nLen < 8) {
                    _res = number;
                }else if(_nLen == 8) {
                    _res = number.substr(0, 4) + '-' + number.substr(4);
                }else if(_nLen == 9) {
                    _res = number.substr(0, 3) + '-' + number.substr(3, 3) + '-' + number.substr(6);
                }else if(_nLen == 10) {
                    _res = number.substr(0, 3) + '-' + number.substr(3, 3) + '-' + number.substr(6);
                }else {
                    _res = number.substr(0, 3) + '-' + number.substr(3, 4) + '-' + number.substr(7);
                }
            }
        }
        return _res;
    }
}

export default formatter;