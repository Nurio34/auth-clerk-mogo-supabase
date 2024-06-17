import { FetchedRecruiterJobsType, fetchCanidateJobs } from "@/actions/job";
import { useEffect, useRef, useState } from "react";
import FilterBtn from "./FilterBtn";

export type CategoriesType = {
    title: string[];
    companyName: string[];
    location: string[];
    type: string[];
};

export type FilterBtnsStateType = {
    [key: string]: boolean;
};

function FilterBtns() {
    const [jobs, setJobs] = useState<FetchedRecruiterJobsType[] | null>(null);

    const filterBtnsRef = useRef<
        ("title" | "companyName" | "location" | "type")[]
    >(["title", "companyName", "location", "type"]);
    const filterBtns = filterBtnsRef.current;

    const initialCategoriesState: CategoriesType = filterBtns.reduce(
        (acc, filterBtn) => {
            acc[filterBtn] = [];
            return acc;
        },
        {} as CategoriesType,
    );

    const [categories, setCategories] = useState<CategoriesType>(
        initialCategoriesState,
    );

    useEffect(() => {
        const fetchCanidateJobsAction = async () => {
            const result = await fetchCanidateJobs();
            setJobs(result);
        };

        fetchCanidateJobsAction();
    }, []);

    useEffect(() => {
        if (jobs) {
            const newCategories = jobs.reduce((acc, job) => {
                if (!acc.title.includes(job.title)) acc.title.push(job.title);
                if (!acc.companyName.includes(job.companyName))
                    acc.companyName.push(job.companyName);
                if (!acc.location.includes(job.location))
                    acc.location.push(job.location);
                if (!acc.type.includes(job.type)) acc.type.push(job.type);

                return acc;
            }, initialCategoriesState);

            setCategories(newCategories);
        }
    }, [jobs]);

    //** --- FILTER BUTTONS STATES --- */

    const initialfilterBtnsStates = filterBtns.reduce((obj, filterBtn) => {
        obj[filterBtn] = false;
        return obj;
    }, {} as FilterBtnsStateType);

    const [filterBtnsStates, setFfilterBtnsStates] =
        useState<FilterBtnsStateType>(initialfilterBtnsStates);

    return (
        <ul className="flex flex-wrap justify-center gap-x-[1vw] md:gap-x-[2vw] gap-y-[1vh] grow md:grow-0 ">
            {Object.entries(categories).map((category) => {
                return (
                    <FilterBtn
                        key={category[0]}
                        category={category}
                        filterBtnsStates={filterBtnsStates}
                        setFfilterBtnsStates={setFfilterBtnsStates}
                        initialfilterBtnsStates={initialfilterBtnsStates}
                    />
                );
            })}
        </ul>
    );
}

export default FilterBtns;
