/**
 * @name common
 * @company BNKSYSTEM - Mobile Business Front-end
 * @date 2020-11-03
 * @description : 공통함수로 사용될 것들
 */
import _ from 'lodash'
var common = {
    /**
	 * @name scrollEndEvent
	 * @description 스크롤 마지막인지 체크하는 함수, 디바운스를 사용해 성능을 개선하였다.
	 */
    scrollEndEvent: _.debounce(() => {
        let _scrollPosition = window.scrollY || document.documentElement.scrollTop;
        let _docHeight = document.documentElement.scrollHeight
        return _scrollPosition + window.innerHeight >= _docHeight-50 ? true : false
    },300)
}

export default common;