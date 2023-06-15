import wire_first from "../assets/first.jpg";
import wire_second from "../assets/second.jpg";
import wire_third from "../assets/third.jpg";
import '../css/Products.css'

export function Products() {
    return (
        <div id='products' className='products-container'>
            <h1>ПРОДУКЦИЯ</h1>
            <div className='products'>
                <div className='wires'>
                    <img src={wire_first} alt="ПРОВОЛОКА 1"/>
                    <span className='span-header' style={{marginBottom: '0'}}>Проволока сварочная</span>
                    <span className='span-header'>ГОСТ 2246-70 и ТУ</span>
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
    )
}