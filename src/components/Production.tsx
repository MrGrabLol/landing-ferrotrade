import metalurg from "../assets/металлургическое производство.jpg";
import metiz from "../assets/метизное производство.jpg";
import lab from "../assets/лаборатория.jpg";
import warehouse from "../assets/склад и продукция.jpg";
import '../css/Production.css'

export function Production() {
    return (
        <div id='production' className='production-container'>
            <h1>ПРОИЗВОДСТВО</h1>
            <div className='production'>
                <div className='prodtype'>
                    <img src={metalurg} alt="ПРОИЗВОДСТВО 1"/>
                    <span>МЕТАЛЛУРГИЧЕСКОЕ ПРОИЗВОДСТВО</span>
                </div>
                <div className='prodtype'>
                    <img src={metiz} alt="ПРОИЗВОДСТВО 2"/>
                    <span>МЕТИЗНОЕ ПРОИЗВОДСТВО</span>
                </div>
                <div className='prodtype'>
                    <img src={lab} alt="ПРОИЗВОДСТВО 3"/>
                    <span>ЛАБОРАТОРИЯ</span>
                </div>
                <div className='prodtype'>
                    <img src={warehouse} alt="ПРОИЗВОДСТВО 4"/>
                    <span>СКЛАД И ПРОДУКЦИЯ</span>
                </div>
            </div>
        </div>
    )
}