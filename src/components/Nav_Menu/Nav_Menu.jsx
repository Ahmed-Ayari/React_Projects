import MenuList from "./menu_list";
import './style.css'

export default function NavMenu({menus = []}){
    return (
        <div className="nm_container">
            <MenuList list={menus} />
        </div>
    )
}