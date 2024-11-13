import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Sponsor } from "../../types";

export const useQuerySponsors = () => {
  const navigate = useNavigate();

  return useQuery<Sponsor[]>(
    ["sponsors"],
    async () => {
      const response = await fetch("/assets/contents/sponsors.json");
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};
