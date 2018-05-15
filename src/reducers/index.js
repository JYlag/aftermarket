import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import SignUpReducer from "./SignUpReducer";
import AddEventReducer from "./AddItemReducers/AddEventReducer";
import ItemReducer from "./ItemReducer";
import AddShoesReducer from "./AddItemReducers/AddShoesReducer";
import AddElectronicsReducer from "./AddItemReducers/AddElectronicsReducer";
import AddClothingReducer from "./AddItemReducers/AddClothingReducer";
import SizeDataReducer from "./Data/SizeDataReducer";
import BrandDataReducer from "./Data/BrandDataReducer";
import ConditionDataReducer from "./Data/ConditionDataReducer";
import ElectronicConditionDataReducer from "./Data/ElectronicConditionDataReducer";
import AddTicketReducer from "./AddItemReducers/AddTicketReducer"

export default combineReducers({
    auth: AuthReducer,
    signup: SignUpReducer,
    addEvents: AddEventReducer,
    addTickets: AddTicketReducer,
    addShoes: AddShoesReducer,
    addElectronics: AddElectronicsReducer,
    addClothing: AddClothingReducer,
    items: ItemReducer,
    sizeData: SizeDataReducer,
    brandData: BrandDataReducer,
    conditionData: ConditionDataReducer,
    electronicCondData: ElectronicConditionDataReducer
});