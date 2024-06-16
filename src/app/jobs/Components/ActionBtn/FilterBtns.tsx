import { FetchedRecruiterJobsType, fetchCanidateJobs } from "@/actions/job";
import { useEffect, useRef, useState } from "react";

export type CategoriesType = {
    title: string[];
    companyName: string[];
    location: string[];
    type: string[];
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
                acc.title.push(job.title);
                acc.companyName.push(job.companyName);
                acc.location.push(job.location);
                acc.type.push(job.type);
                return acc;
            }, initialCategoriesState);

            setCategories(newCategories);
        }
    }, [jobs]);

    console.log(categories);

    // Render logic here...
    // Add appropriate JSX or return logic

    return <div>{/* Your JSX here */}</div>;
}

export default FilterBtns;
