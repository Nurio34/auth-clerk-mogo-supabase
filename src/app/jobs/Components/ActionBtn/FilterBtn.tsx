import React, { Dispatch, SetStateAction } from "react";
import { FilterBtnsStateType } from "./FilterBtns";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../../Context";

function FilterBtn({
    category,
    filterBtnsStates,
    setFfilterBtnsStates,
    initialfilterBtnsStates,
}: {
    category: [string, string[]];
    filterBtnsStates: FilterBtnsStateType;
    setFfilterBtnsStates: Dispatch<SetStateAction<FilterBtnsStateType>>;
    initialfilterBtnsStates: FilterBtnsStateType;
}) {
    const { filteredKeyValue, setFilteredKeyValue } = useGlobalContext();

    const filterBtnTitle = category[0];
    const categoryTitles = category[1];

    const handleFilterBtnClick = () => {
        setFfilterBtnsStates((pre: FilterBtnsStateType) => ({
            ...pre,
            ...initialfilterBtnsStates,
            [filterBtnTitle]: pre[filterBtnTitle],
        }));

        setFfilterBtnsStates((pre: FilterBtnsStateType) => {
            return { ...pre, [filterBtnTitle]: !pre[filterBtnTitle] };
        });
    };

    //** --- HANDLE "filteredKeyValue" STATE --- */
    const handleFilterKeyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = filterBtnTitle;
        const value = e.target.value;

        setFilteredKeyValue((pre) => {
            if (!pre[key]) {
                return { ...pre, [key]: [value] };
            } else {
                if (!pre[key].includes(value)) {
                    return { ...pre, [key]: [...pre[key], value] };
                } else {
                    return {
                        ...pre,
                        [key]: pre[key].filter((item) => item !== value),
                    };
                }
            }
        });
    };
    //** ---------------------------------------- */

    return (
        <div className="relative">
            <button
                type="button"
                className={`btn btn-sm capitalize
                        ${
                            filterBtnsStates[filterBtnTitle] &&
                            "btn-secondary text-secondary-content"
                        }
                    `}
                onClick={handleFilterBtnClick}
            >
                {filterBtnTitle}
            </button>
            <AnimatePresence mode="wait">
                {filterBtnsStates[filterBtnTitle] && (
                    <motion.ul
                        className={`absolute border-[1px] border-secondary shadow-md shadow-secondary bg-base-100 text-base-content py-[1vh] px-[2vw] rounded-md
                                ${filterBtnTitle === "type" && "right-0"}
                            `}
                        key={filterBtnTitle}
                        initial={{ y: -16, opacity: 0 }}
                        animate={{ y: 8, opacity: 1 }}
                        exit={{ y: -16, opacity: 0 }}
                    >
                        {categoryTitles.map((title: string) => {
                            return (
                                <li key={title} className=" min-w-max">
                                    <label
                                        htmlFor={title}
                                        className=" select-none flex items-center gap-x-1"
                                    >
                                        <input
                                            type="checkbox"
                                            name={title}
                                            id={title}
                                            onChange={handleFilterKeyValue}
                                            value={title}
                                            checked={Boolean(
                                                filteredKeyValue?.[
                                                    filterBtnTitle
                                                ]?.includes(title),
                                            )}
                                        />
                                        <span>{title}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

export default FilterBtn;
