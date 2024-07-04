import toast from "react-hot-toast";
import { deleteAccountRequest } from "../../../Services/apiAdmin";

export const useDeleteAccount = () => {
  const deleteAccount = async (id) => {
    const response = await deleteAccountRequest(id);
    if (response.error) {
      return toast.error("Error deleting account.");
    }
    return toast.success("Deleted account successfully.");
  };
  return {
    deleteAccount,
  };
};
