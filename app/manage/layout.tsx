import { IChildrenProps } from "@/types/interfaces";
import { Heading } from "@/components/Heading";
import { ManageHeading } from "./components/ManageHeading";

export default function ManageLayout({ children }: IChildrenProps) {
  return (
    <div className="flex h-full w-full flex-col pb-6">
      <Heading>
        <ManageHeading />
      </Heading>
      <div className="w-full py-4 px-12 flex flex-col gap-6">{children}</div>
    </div>
  );
}
