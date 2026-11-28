import { useMediaQuery } from "react-responsive";
export * from "./hackathonData";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "600% 600%",
      maskPos: "50% 25%",
      maskSize: "50% 50%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "800% 800%",
      maskPos: "50% 22%",
      maskSize: "30% 30%",
    };
  }

  return {
    initialMaskPos: "50% 50%",
    initialMaskSize: "1000% 1000%",
    maskPos: "50% 22%",
    maskSize: "20% 20%",
  };
};
