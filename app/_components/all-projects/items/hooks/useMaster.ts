"use client";
import { useState } from "react";

import { masters } from "../data";
import { Master } from "../model";

export const useMaster = () => {
  const [result, setResult] = useState<Array<Master> | undefined>();
  const [loading, setLoading] = useState(true);
  // BE logic

  setTimeout(() => {
    setLoading(false);
    setResult(masters);
  }, 1500);

  return { result, loading };
};
