import groups from "@/data/groups";
import students from "@/data/students";

export default function Component({ groupKey = 1 }) {
  const groupId = parseInt(groupKey, 10);
  const group = groups.find((g) => g.key === groupId);
  const studentList = students.slice(group?.startIndex, group?.endIndex);

  if (!group) {
    return <div className="text-center p-4">Group not found</div>;
  }

  return (
    <div className="w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="overflow-y-auto h-auto max-h-[250px] border border-gray-200 rounded-md">
        <ul className="divide-y divide-gray-200">
          {studentList.map((student, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {student.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
