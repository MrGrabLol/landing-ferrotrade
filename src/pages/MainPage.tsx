import '../css/MainPage.css'
import {Navbar} from "../components/Navbar";
import {MainPicture} from "../components/MainPicture";
import {Products} from "../components/Products";
import {Production} from "../components/Production";
import {Certificate} from "../components/Certificate";
import {Video} from "../components/Video";
import {Map} from "../components/Map";
import {Contacts} from "../components/Contacts";
import {Copyright} from "../components/Copyright";

export function MainPage() {
    return (
        <div className='container'>
            <Navbar/>
            <MainPicture/>
            <Products/>
            <Production/>
            {/*<Certificate/>*/}
            <Video/>
            <Map/>
            <Contacts/>
            <Copyright/>
        </div>
    )
}