import google from "../assets/gp.png";
import '../css/Certificate.css'

export function Certificate() {
    return (
        <div id='certificate' className='certificate-container'>
            <div className='certificate'>
                <h1>ПРОВЕРКА СЕРТИФИКАТОВ</h1>
                <p>
                    Начиная с 14.05.2020 подлинность всех сертификатов, выпущенных после 14.05.2020 можно проверить
                    в приложении "Арсенал-Метиз" для телефонов на платформе Android с помощью QR-кода, размещенного
                    на сертификате. Отсутствие QR-кода является признаком подделки сертификата. Скачать приложение
                    можно в Google Play или перейдя по ссылке.
                </p>
                <a href="https://play.google.com/store/apps/details?id=arsenal.metiz.catalog&amp;hl=ru">
                    <img src={google} alt="Google Play"/>
                </a>
            </div>
        </div>
    )
}