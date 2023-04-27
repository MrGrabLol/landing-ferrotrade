import '../css/Contacts.css'

export function Contacts() {
    return (
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
    )
}