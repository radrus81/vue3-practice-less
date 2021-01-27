const ERROR_CODES={
    EMAIL_NOT_FOUND:'Пользователь с таким email не был найден в базе',
    INVALID_PASSWORD:'Неправильный пароль',
    auth:'Необходимо авторизоваться в системе'
}

export function error(code){
    console.log(code);
    return ERROR_CODES[code] || 'Неизвестная ошибка '+ code
}