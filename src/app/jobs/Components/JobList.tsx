import { FetchedRecruiterJobsType } from "@/actions/job";
import JobCard from "./JobCards/JobCard";
import { useGlobalContext } from "../Context";

function JobList() {
    const { user, filteredKeyValue, jobList, profile, applications } =
        useGlobalContext();

    if (!user) {
        return;
    } else {
        const isJobListNotFiltered =
            Object.entries(filteredKeyValue).length === 0 ||
            Object.values(filteredKeyValue).every((arr) => arr.length === 0);

        return (
            <section
                className="my-[2vh] py-[2vh] px-[4vw] min-h-[500px] md:min-h-[750px]"
                style={{
                    backgroundImage: `${
                        profile.role === "candidate" && "url('/wallpaper.webp')"
                    }`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    borderImageSource:
                        "linear-gradient(45deg,rgba(255,255,255,0.5),rgba(0,0,0,0.5))",
                    borderStyle: "solid",
                    borderImageSlice: "fill 1",
                }}
            >
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(262px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(355px,1fr))] items-start gap-[2vw] ">
                    {isJobListNotFiltered
                        ? jobList?.map((job) => {
                              return (
                                  <JobCard
                                      key={job._id}
                                      job={job}
                                      profile={profile}
                                      applications={applications!}
                                  />
                              );
                          })
                        : jobList
                              ?.reduce((arr, job) => {
                                  //** return job if has all conditions */
                                  if (
                                      Object.entries(filteredKeyValue)
                                          .filter(
                                              ([_, valueArr]) =>
                                                  valueArr.length > 0,
                                          )
                                          .every(([key, valueArr]) => {
                                              return valueArr.includes(
                                                  job[
                                                      key as keyof Omit<
                                                          FetchedRecruiterJobsType,
                                                          "applicants"
                                                      >
                                                  ] as string,
                                              );
                                          })
                                  ) {
                                      arr.push(job);
                                  }

                                  return arr;
                              }, [] as FetchedRecruiterJobsType[])
                              .map((job) => {
                                  {
                                      return (
                                          <JobCard
                                              key={job._id}
                                              job={job}
                                              profile={profile}
                                              applications={applications!}
                                          />
                                      );
                                  }
                              })}
                </ul>
            </section>
        );
    }
}

export default JobList;
