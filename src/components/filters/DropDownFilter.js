import { useEffect } from "react";

export default function DropDownFilter({ type, value, onChange, options }) {
    useEffect   (() => {
        console.log(`DropDownFilter - type: ${type}, value: ${value}`);
    }, [type, value]);
    return (
        <div className="dropdown-filter">
            <select value={value} onChange={onChange}>
                <option value="">All {type.charAt(0).toUpperCase() + type.slice(1)}</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}