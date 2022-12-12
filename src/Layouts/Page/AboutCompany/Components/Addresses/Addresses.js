import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column justify-content-between mt-4 panel1'>
            <div className='d-inline-flex flex-column'>
                <div class="d-flex flex-column gap-4">
                    <div className='title'>Адреса заведений</div>
                    <div class="d-flex flex-column gap-2">               
                        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
                </div>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;