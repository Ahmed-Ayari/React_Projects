import MenuItem from "./menu_item";

export default function MenuList({ list = [] }) {
  return (
    <ul>
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
