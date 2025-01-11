"use client";
import { useState } from "react";

import { data } from "../data";
import { ItemProps } from "../model";

export const useData = () => {
  const [result, setResult] = useState<Array<ItemProps> | undefined>();
  const [loading, setLoading] = useState(true);
  // BE logic

  setTimeout(() => {
    setLoading(false);
    setResult(data);
  }, 1500);

  return { result, loading };
};
