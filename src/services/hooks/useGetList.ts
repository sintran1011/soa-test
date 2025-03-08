import { apiClient } from "@/agent";
import { useQuery } from "@tanstack/react-query";

const useGetListGroups = () => {
  const query = useQuery({
    queryKey: ["groups"],
    queryFn: async () => {
      try {
        const res: { data: any } = await apiClient.get(`groups/safe/nonce`);
        if (res) return res.data;
      } catch (error: any) {
        console.log(error, "error");
      }
    },
    refetchOnWindowFocus: false,
  });
  return query;
};

export default useGetListGroups;
