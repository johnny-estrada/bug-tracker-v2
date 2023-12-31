import { useState, useEffect } from "react";
import AvatarGroup from "./AvatarGroup";
import { formatDate } from "../../utils/formatting";

const Details = ({ description, client, startDate, targetDate }) => {
  const [formattedDate1, setFormattedDate1] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  useEffect(() => {
    const date1 = startDate;
    const options1 = { year: "numeric", month: "short", day: "numeric" };
    const formatted1 = formatDate(date1, options1);
    setFormattedDate1(formatted1);

    const date2 = targetDate;
    const options2 = { year: "numeric", month: "short", day: "numeric" };
    const formatted2 = formatDate(date2, options2);
    setFormattedDate2(formatted2);
  }, [startDate, targetDate]);

  return (
    <section aria-labelledby="projects">
      <p className="pb-2">{description}</p>
      <ul className="w-2/3">
        <li className="flex flex-wrap justify-between py-2">
          <h4>Client</h4>
          <p>{client}</p>
        </li>
        <li className="flex flex-wrap justify-between py-2">
          <h4>Start date</h4>
          <p>{formattedDate1}</p>
        </li>
        <li className="flex flex-wrap justify-between py-2">
          <h4>Target date</h4>
          <p>{formattedDate2}</p>
        </li>
        <li className="flex flex-wrap justify-between py-2">
          <h4>Members</h4>
          <AvatarGroup />
        </li>
      </ul>
    </section>
  );
};

export default Details;
