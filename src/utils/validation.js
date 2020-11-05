/**
 * @name validation
 * @company BNKSYSTEM - Mobile Business Front-end
 * @date 2020-11-04
 * @description : 입력값 검증을 위한 validation | npm install vee-validate
 */

import { extend } from 'vee-validate'
import commonMessage from '@/message'
/**
 * @name passwordBasic
 * @param {value} 
 * @description 패스워드 검증(대소문자)
 */
extend('passwordBasic', {
    validate: value => {
        return /^[A-Za-z]\w{8,14}$/.test(value);
    },
    message: commonMessage.VALID_PASSWORD
})

/**
 * @name passwordWithNumber
 * @param {value} 
 * @description 패스워드 검증(대소문자,숫자)
 */
extend('passwordWithNumber', {
    validate: value => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/.test(value);
    },
    message: commonMessage.VALID_PASSWORD_MIDDLE
})

/**
 * @name passwordWithNumberAndSpecial
 * @param {value} 
 * @description 패스워드 검증(대소문자,숫자,특수문자)
 */
extend('passwordWithNumberAndSpecial', {
    validate: value => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,14}$/.test(value);
    },
    message: commonMessage.VALID_PASSWORD_HIGH
})

/**
 * @name notEmpty
 * @param {value} 
 * @description 공백검증
 */
extend('notEmpty', {
    validate: value => {
        return /^(?!\s*$).+/g.test(value);
    },
    message: commonMessage.VALID_EMPTY
})

/**
 * @name korean
 * @param {value} 
 * @description 한글검증
 */
extend('korean', {
    validate: value => {
        return /^[ㄱ-ㅎ가-힣]*$/.test(value);
    },
    message: commonMessage.VALID_KOREAN
})
/**
 * @name email
 * @param {value} 
 * @description 이메일검증
 */
extend('email', {
    validate: value => {
        return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(value);
    },
    message: commonMessage.VALID_EMAIL
})

/**
 * @name number
 * @param {value} 
 * @description 이메일검증
 */
extend('number', {
    validate: value => {
        return /^[0-9]*$/.test(value);
    },
    message: commonMessage.VALID_NUMBER
})

extend('normal', {
    validate: value => {
        return /^[\s|ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/.test(value);
    },
    message: commonMessage.VALID_NOMRAL
})