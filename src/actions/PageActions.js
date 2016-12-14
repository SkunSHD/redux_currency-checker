import {
  SET_CURRENCY,
  GET_CURRENCY_REQUEST
} from '../constants/Page'

export function setCurrency(currency) {

  return {
    type: SET_CURRENCY,
    payload: currency
  }

}

export function getCurrency(currency) {

  return (dispatch) => {
    dispatch({
      type: GET_CURRENCY_REQUEST,
      payload: currency
    })

    var xhr = new XMLHttpRequest();
    const params = 'date_req=' + encodeURIComponent('02/03/2016')

    xhr.open('GET', 'http://www.cbr.ru/scripts/XML_daily.asp?' + params, true);
    xhr.send();
    if (xhr.status != 200) {
      // обработать ошибку
      alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
      // вывести результат
      console.log(xhr.responseText)

      // dispatch({
      //   type: GET_CURRENCY_SUCCESS,
      //   payload: xhr.responseText
      // })
    }
  }
}