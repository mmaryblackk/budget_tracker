import { IChildrenProps } from "@/types/interfaces";

export const Heading = ({ children }: IChildrenProps) => {
  return (
    <div className="py-6 px-16 border-b border-b-muted flex justify-between items-center">
      {children}
    </div>
  );
};
