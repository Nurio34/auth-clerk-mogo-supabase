import React from "react";

function FilterBtn({ category }: { category: [string, string[]] }) {
    const filterBtnTitle = category[0];
    const categoryTitles = category[1];
    console.log(categoryTitles);

    return (
        <div>
            <button type="button" className="btn capitalize">
                {filterBtnTitle}
            </button>
            <ul className="absolute bg-primary text-primary-content">
                {categoryTitles.map((title: string) => {
                    return (
                        <li key={title}>
                            <label htmlFor={title}>
                                <input
                                    type="checkbox"
                                    name={title}
                                    id={title}
                                />
                                <span>{title}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FilterBtn;
