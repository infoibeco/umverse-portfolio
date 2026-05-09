import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useFiction() {
  return useQuery({
    queryKey: [api.fiction.list.path],
    queryFn: async () => {
      const res = await fetch(api.fiction.list.path);
      if (!res.ok) throw new Error("Failed to fetch fiction");
      return api.fiction.list.responses[200].parse(await res.json());
    },
  });
}
