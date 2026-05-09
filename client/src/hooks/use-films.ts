import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useFilms() {
  return useQuery({
    queryKey: [api.films.list.path],
    queryFn: async () => {
      const res = await fetch(api.films.list.path);
      if (!res.ok) throw new Error("Failed to fetch films");
      return api.films.list.responses[200].parse(await res.json());
    },
  });
}
