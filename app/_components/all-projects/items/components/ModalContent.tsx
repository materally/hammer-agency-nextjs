"use client";
import { useState } from "react";

import { Loop, LoopType, Spinner } from "@/app/_ui";
import { useMaster } from "../hooks/useMaster";
import { Master } from "../model";

export const ModalContent = () => {
  const masters = useMaster();
  const [selectedMasters, setSelectedMasters] = useState<
    Record<LoopType, Master | undefined>
  >({
    [LoopType.BRIEFING]: undefined,
    [LoopType.RESEARCH]: undefined,
    [LoopType.STRATEGY]: undefined,
    [LoopType.PRESENTATION]: undefined,
  });

  if (masters.loading) {
    return (
      <div className="py-6">
        <Spinner />
      </div>
    );
  }

  if (!masters.result) {
    return <div className="py-6">Masters not found!</div>;
  }

  return (
    <div>
      <h3 className="text-[15px]/[18px] py-6">Assign the loop masters</h3>

      <Loop
        type={LoopType.BRIEFING}
        masterOptions={masters.result}
        selectedOption={selectedMasters[LoopType.BRIEFING]}
        onChange={(master) =>
          setSelectedMasters((prev) => ({
            ...prev,
            [LoopType.BRIEFING]: master,
          }))
        }
      />
      <Loop
        type={LoopType.RESEARCH}
        masterOptions={masters.result}
        selectedOption={selectedMasters[LoopType.RESEARCH]}
        onChange={(master) =>
          setSelectedMasters((prev) => ({
            ...prev,
            [LoopType.RESEARCH]: master,
          }))
        }
      />
      <Loop
        type={LoopType.STRATEGY}
        masterOptions={masters.result}
        selectedOption={selectedMasters[LoopType.STRATEGY]}
        onChange={(master) =>
          setSelectedMasters((prev) => ({
            ...prev,
            [LoopType.STRATEGY]: master,
          }))
        }
      />
      <Loop
        type={LoopType.PRESENTATION}
        masterOptions={masters.result}
        selectedOption={selectedMasters[LoopType.PRESENTATION]}
        onChange={(master) =>
          setSelectedMasters((prev) => ({
            ...prev,
            [LoopType.PRESENTATION]: master,
          }))
        }
      />
    </div>
  );
};
