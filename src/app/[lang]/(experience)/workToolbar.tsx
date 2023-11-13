import DeleteWorkButton from "./delete/deleteWorkButton";
import EditWorkButton from "./edit/editWorkButton";
import { type Works } from "./store/workStore";

interface WorkToolbar {
  work: Works[number];
}

export default function WorkToolbar({ work }: WorkToolbar) {
  return (
    <div className="ml-2 flex gap-2">
      <EditWorkButton work={work} />
      <DeleteWorkButton work={work} />
    </div>
  );
}
