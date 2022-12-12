import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div className="d-flex flex-column px-5">
            <div className="d-flex flex-column px-4">
                <div><Heading/> {/* Заголовок и кнопка справа */}</div>
                <div className='d-flex row mt-5'>
                    <div className='d-flex col'><General/>  {/* Основная информация вроде названия, типа и телефона */}</div>
                    <div className='d-flex col flex-row-reverse'><Addresses/> {/* Список доступных адресов заведений */}</div>
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;