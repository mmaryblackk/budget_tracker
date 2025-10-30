import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useStore } from "@/store/useStore";
import { Trash, TriangleAlert } from "lucide-react";
import { useState } from "react";

export const AccountDeleteDialog = ({ accountId }: { accountId: number }) => {
  const [open, setOpen] = useState(false);
  const { isLoading, deleteAccount } = useStore();
  const handleDelete = async () => {
    await deleteAccount(accountId);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="px-8 w-[450px]">
        <DialogHeader className="items-center gap-5 pt-2">
          <TriangleAlert size={48} />
          <DialogTitle>Are you sure you want to delete account?</DialogTitle>
          <DialogDescription className="text-center text-base">
            This action cannot be undone. This will permanently delete your
            account and remove your data.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between gap-4 pt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
