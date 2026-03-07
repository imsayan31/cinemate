

export default function DropDownFilter({ type, value, onChange, options }) {
    
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