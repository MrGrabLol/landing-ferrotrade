import logo from '../assets/logo_new_v2.png'
import wire_first from '../assets/first.jpg'
import wire_second from '../assets/second.jpg'
import wire_third from '../assets/third.jpg'
import metalurg from '../assets/металлургическое производство.jpg'
import metiz from '../assets/метизное производство.jpg'
import lab from '../assets/лаборатория.jpg'
import warehouse from '../assets/склад и продукция.jpg'
import google from '../assets/gp.png'
import '../css/MainPage.css'

export function MainPage() {
    return (
        <div className='container'>
            <div className='navbar'>
                <img className='image' src={logo} alt="ФЕРРОТРЕЙД" style={{filter: 'invert()'}}/>
                <div className='headers'>
                    <a href="#products">
                        <span>ПРОДУКЦИЯ</span>
                    </a>
                    <a href="#production">
                        <span>ПРОИЗВОДСТВО</span>
                    </a>
                    <a href="#info">
                        <span>ИНФО</span>
                    </a>
                    <a href="#contacts">
                        <span>КОНТАКТЫ</span>
                    </a>
                    <a href="#certificate">
                        <span>ПРОВЕРКА СЕРТИФИКАТОВ</span>
                    </a>
                </div>
            </div>
            <div className='main-picture'>
                <div className='text-div'>
                    <span>РОССИЙСКИЙ</span>
                    <span>ПРОИЗВОДИТЕЛЬ</span>
                    <span>ПРОВОЛОКИ</span>
                    {/*<div className='btn-div'>*/}
                    {/*    <button>Узнать больше</button>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div id='products' className='products-container'>
                <h1>ПРОДУКЦИЯ</h1>
                <div className='products'>
                    <div className='wires'>
                        <img src={wire_first} alt="ПРОВОЛОКА 1"/>
                        <span className='span-header'>Проволока сварочная ГОСТ 2246-70 и ТУ</span>
                        <span>Проволока сварочная из низкоуглеродистой, легированной и высоколегированной стали</span>
                    </div>
                    <div className='wires'>
                        <img src={wire_second} alt="ПРОВОЛОКА 2"/>
                        <span className='span-header'>Проволока ГОСТ 18143-42</span>
                        <span>Проволока из высоколегированной коррозионностойкой и жаростойкой стали</span>
                    </div>
                    <div className='wires'>
                        <img src={wire_third} alt="ПРОВОЛОКА 3"/>
                        <span className='span-header'>Проволока специального назначения</span>
                        <span>Прочие марки легированной и нержавеющей проволоки специального назначения</span>
                    </div>
                </div>
            </div>
            <div id='production' className='production-container'>
                <h1>ПРОИЗВОДСТВО</h1>
                <div className='production'>
                    <div className='prodtype'>
                        <img src={metalurg} alt="ПРОИЗВОДСТВО 1"/>
                        <span>Металлургическое производство</span>
                    </div>
                    <div className='prodtype'>
                        <img src={metiz} alt="ПРОИЗВОДСТВО 2"/>
                        <span>Метизное производство</span>
                    </div>
                    <div className='prodtype'>
                        <img src={lab} alt="ПРОИЗВОДСТВО 3"/>
                        <span>Лаборатория</span>
                    </div>
                    <div className='prodtype'>
                        <img src={warehouse} alt="ПРОИЗВОДСТВО 4"/>
                        <span>Склад и продукция</span>
                    </div>
                </div>
            </div>
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
            <div id='info' className='video-container'>
                <iframe src="https://www.youtube-nocookie.com/embed/SmPAFmJxN2U?loop=1&amp;playlist=SmPAFmJxN2U"></iframe>
            </div>
            <div className='map-container'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2338.
                    446929037736!2d58.380912732270744!3d53.961051532259475!3m2!1i1024!2i768!4f13.
                    1!3m2!1m1!2zNTPCsDU3JzQwLjEiTiA1OMKwMjInNTAuOCJF!5e1!3m2!1sen!2sus!4v1680879658156!5m2!1sen!2sus"
                    width="600" height="450" allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div id='contacts' className='contacts-container'>
                <h1>КОНТАКТЫ</h1>
                <div className='contacts'>
                    <div className='contact'>
                        <h2>Урал</h2>
                        <span>Телефон:<span style={{color: 'aqua'}}> +7 (34792) 4-81-79</span></span>
                        <span>Многоканальный:<span style={{color: 'aqua'}}> +7 (963) 655-24-31</span></span>
                        <span>Email:<span style={{color: 'aqua'}}> ural@arsenal-metiz.ru</span></span>
                        <span>Адрес: 453500, Респ. Башкортостан, г. Белорецк, ул. Чкалова, 1</span>
                    </div>
                    <div className='contact'>
                        <h2>Долгопрудный</h2>
                        <span>Телефон:<span style={{color: 'aqua'}}> +7 (499) 503-73-62</span></span>
                        <span>Многоканальный:<span style={{color: 'aqua'}}> +7 (963) 655-24-31</span></span>
                        <span>Email:<span style={{color: 'aqua'}}> info@arsenal-metiz.ru</span></span>
                        <span>Адрес: 141700, Московская область, г. Долгопрудный, Лихачёвский проспект, д. 18 стр. 1</span>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <span>Copyright © Ферротрейд 2020</span>
            </div>
        </div>
    )
}