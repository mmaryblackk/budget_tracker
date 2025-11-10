import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { formatCamelCase } from "@/utils/formatters";
import { iconsMap, TIcon } from "@/utils/icons";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

interface IIconPickerProps {
  value?: TIcon;
  onChange?: (value: TIcon) => void;
  hasError?: boolean;
}

export const IconPicker = ({ value, onChange, hasError }: IIconPickerProps) => {
  const [open, setOpen] = useState(false);
  const Icon = iconsMap[value as TIcon];
  return (
    <Popover modal={false} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[300px] flex items-center justify-between text-muted-foreground",
            hasError && "border-destructive!",
            value && "text-foreground"
          )}
        >
          {value ? (
            <div className="flex items-center gap-2">
              <span>{formatCamelCase(value as string)}</span>
              <Icon className="w-6 h-6 text-white" />
            </div>
          ) : (
            "Select icon"
          )}
          <ChevronRightIcon className="opacity-80" size="16" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[300px] overflow-visible p-0 pointer-events-auto! border-0"
        side="right"
      >
        <Card className="p-0">
          <div
            className="max-h-[250px] overflow-y-auto scrollbar-card"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <CardContent className="p-4">
              <RadioGroup
                className="grid grid-cols-4 gap-4"
                value={value}
                onValueChange={(val) => {
                  onChange?.(val as TIcon);
                }}
              >
                {Object.entries(iconsMap).map(([name, Icon]) => (
                  <div
                    key={name}
                    className="flex items-center justify-center w-14 h-14 p-2 hover:bg-accent rounded-md transition cursor-pointer"
                    onClick={() => {
                      onChange?.(name as TIcon);
                      setOpen(false);
                    }}
                  >
                    <Icon size={36} />
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
