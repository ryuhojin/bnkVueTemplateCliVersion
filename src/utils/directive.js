/**
 * @name directive
 * @company BNKSYSTEM - Mobile Business Front-end
 * @date 2020-11-03
 * @description : 데이터 directive를 통한 validation 및 formatter
 */

import Vue from 'vue'
import formatter from './formatter'

/*
  bind            : 디렉티브가 처음 엘리먼트에 바인딩 될 때 한 번만 호출됩니다. 이곳에서 일회성 설정을 할 수 있습니다.
  inserted        : 바인딩 된 엘리먼트가 부모 노드에 삽입되었을 때 호출됩니다.
  update          : 포함하는 컴포넌트가 업데이트된 후 호출됩니다.
  componentUpdated: 포함하고 있는 컴포넌트와 그 자식들이 업데이트된 후에 호출됩니다.
  unbind          : 디렉티브가 엘리먼트로부터 언바인딩된 경우에만 한번 호출됩니다.
*/

Vue.directive('focus',{
    inserted: function(el){
        el.focus()
    }
})

Vue.directive('date',{
    bind: function(el) {
        if (el.maxLength === -1) el.maxLength = '8';
    },
    inserted: function(el){
        el.value = formatter.formatDate(el.value);
    },
    update: function(el){
        el.value = formatter.formatDate(el.value);
    }
})

Vue.directive('age',{
    bind: function(el) {
        if (el.maxLength === -1) el.maxLength = '3';
    },
    inserted: function(el){
        el.value = formatter.formatNumberWithCommas(el.value);
    },
    update: function(el){
        el.value = formatter.formatNumberWithCommas(el.value);
    }
})

Vue.directive('won',{
    bind: function(el){
        if (el.maxLength === -1) el.maxLength = '16';
    },
    inserted: function(el) {
      el.value = formatter.formatWonWithCommas(el.value);
    },
    update: function(el) {
      el.value = formatter.formatWonWithCommas(el.value);
    }
})

Vue.directive('dollar',{
    bind: function(el){
        if (el.maxLength === -1) el.maxLength = '16';
    },
    inserted: function(el) {
      el.value = formatter.formatDollarWithCommas(el.value);
    },
    update: function(el) {
      el.value = formatter.formatDollarWithCommas(el.value);
    }
})

Vue.directive('money',{
    bind: function(el) {
        if (el.maxLength === -1) el.maxLength = '16';
    },
    inserted: function(el){
        el.value = formatter.formatNumberWithCommas(el.value);
    },
    update: function(el){
        el.value = formatter.formatNumberWithCommas(el.value);
    }
})

Vue.directive('number',{
    inserted: function(el){
        el.value = formatter.formatNumberWithCommas(el.value);
    },
    update: function(el){
        console.log(el)
        el.value = formatter.formatNumberWithCommas(el.value);
    }
})

Vue.directive('account',{
    inserted: function(el){
        el.value = formatter.formatAccount(el.value);
    },
    update: function(el){
        el.value = formatter.formatAccount(el.value);
    }
})

Vue.directive('notSpecial',{
    bind: function(el) {
        if (el.maxLength === -1) el.maxLength = '15';
    },
    inserted: function(el){
        el.value = formatter.formatUseNotSpecialCharacters(el.value);
    },
    update: function(el){
        el.value = formatter.formatUseNotSpecialCharacters(el.value);
    }
})