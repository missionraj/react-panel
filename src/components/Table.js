export default function Table(props) {
  const members = props.list;
  console.log("members ....", members);
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Address
            </th>
            <th scope="col" className="py-3 px-6">
              Start Date
            </th>
            <th scope="col" className="py-3 px-6">
              End Date
            </th>
            <th scope="col" className="py-3 px-6">
              Contact Number
            </th>
            <th scope="col" className="py-3 px-6">
              Enroll id
            </th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr
              key={member._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {member.name}
              </th>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {member.address}
              </th>
              <td className="py-4 px-6"> {member.startDate} </td>
              <td className="py-4 px-6"> {member.endDate} </td>
              <td className="py-4 px-6"> {member.contactNumber}</td>
              <td className="py-4 px-6"> {member.enrollId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
