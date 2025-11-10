import { TriangleAlert } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Spinner } from "./ui/spinner";

export interface IConfirmationDialogProps {
  isShown?: boolean;
  title: string;
  message: string;
  secondaryMessage?: string;
  isLoading?: boolean;
  isDeleting?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: ReactNode;
}

export const ConfirmationDialog = ({
  isShown = false,
  title,
  message,
  secondaryMessage,
  isLoading,
  isDeleting,
  onConfirm,
  onCancel,
  children,
}: IConfirmationDialogProps) => {
  const [showDialog, setShowDialog] = useState<boolean>(isShown);

  useEffect(() => {
    setShowDialog(isShown);
  }, [isShown]);

  const handleCancel = () => {
    setShowDialog(false);
    onCancel?.();
  };

  const handleConfirm = () => {
    onConfirm?.();
    setShowDialog(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setShowDialog(isOpen);
    if (!isOpen) {
      onCancel?.();
    }
  };

  return (
    <Dialog open={showDialog} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="px-8 w-[480px]">
        <DialogHeader className="items-center gap-5 pt-2">
          <TriangleAlert size={48} />
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="flex flex-col items-center gap-2">
            <span className="text-base text-center">{message}</span>
            {secondaryMessage && (
              <span className="text-sm text-center">{secondaryMessage}</span>
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-between gap-4 pt-4">
          <Button variant="outline" onClick={() => handleCancel()}>
            Cancel
          </Button>
          <Button
            variant={isDeleting ? "destructive" : "default"}
            onClick={() => handleConfirm()}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : isDeleting ? "Delete" : "Confirm"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
