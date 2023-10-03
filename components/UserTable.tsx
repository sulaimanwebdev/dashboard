// src/components/UserTable.tsx
const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', code: 'JD01' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', code: 'JD02' },
    { id: 3, firstName: 'John', lastName: 'Doe', code: 'JD01' },
    { id: 4, firstName: 'Jane', lastName: 'Doe', code: 'JD02' },
    { id: 5, firstName: 'John', lastName: 'Doe', code: 'JD01' },

    // ... more users
  ];
  
  function UserTable() {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Code</th>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-center">Edit</th>
              <th className="py-3 px-6 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map(user => (
              <tr className="border-b border-gray-200 hover:bg-gray-100" key={user.id}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{user.firstName}</td>
                <td className="py-3 px-6 text-left">{user.lastName}</td>
                <td className="py-3 px-6 text-left">{user.code}</td>
                <td className="py-3 px-6 text-left">{user.id}</td>
                <td className="py-3 px-6 text-center">
                  <button className="text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.07a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.768 3.768z" />
                    </svg>
                  </button>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="text-red-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6m6 6V6" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default UserTable;
  