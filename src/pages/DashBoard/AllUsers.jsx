import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { AiOutlineDelete } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success("Added Admin!", {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      });
  };

  const handleDelete = (user) => {
    console.log(`Deleted successfully ${user._id}`);
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(user._id);
          refetch();
          toast.success("Deleted successfully", {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Tasty Tryst | All User</title>
      </Helmet>
      <div className="h-screen flex flex-col justify-center items-center">
        <h3 className="text-3xl">Total Users: {users.length}</h3>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Serial</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleMakeAdmin(user)}>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <RiAdminFill size={24} color="blue" />
                    )}
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(user)}
                    className="text-red-500"
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
};

export default AllUsers;
