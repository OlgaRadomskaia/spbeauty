import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='row row-cols-2'>
            <div class="col"><General/>  {/* Основная информация вроде названия, типа и телефона */}</div>
            <div class="col"><Addresses/> {/* Список доступных адресов заведений */}</div>
            </div>
        </div>
    );
}

export default AboutCompany;