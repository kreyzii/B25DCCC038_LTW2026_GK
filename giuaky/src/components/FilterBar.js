import { GROUPS } from "../data";

const FilterBar = ({ query, group, onQueryChange, onGroupChange }) => (
  <div style={{ margin: "12px 0" }}>
    <label htmlFor="search">Tìm kiếm</label>{" "}
    <input id="search" value={query} onChange={onQueryChange} />{" "}
    <label htmlFor="group-filter">Nhóm</label>{" "}
    <select id="group-filter" value={group} onChange={onGroupChange}>
      {["Tất cả", ...GROUPS].map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  </div>
);

export default FilterBar;