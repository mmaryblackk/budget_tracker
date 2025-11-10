"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { colors, TColor } from "@/utils/colors";
import { formatString } from "@/utils/formatters";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

interface IColorPickerProps {
  value?: TColor;
  onChange?: (value: TColor) => void;
  hasError?: boolean;
}

export const ColorPicker = ({
  value,
  onChange,
  hasError,
}: IColorPickerProps) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const colorName = colors.find((color) => color.color === value)?.name;
  return (
    <Popover open={open} onOpenChange={setOpen}>
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
              <span>{formatString(colorName as string)}</span>
              <div
                className="w-5 h-5 rounded-full border border-foreground/20"
                style={{ backgroundColor: value }}
              />
            </div>
          ) : (
            "Select color"
          )}
          <ChevronRightIcon className="opacity-80" size="16" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 border-0" side="right">
        <Card>
          <CardContent>
            <RadioGroup
              className="grid grid-cols-4 gap-4"
              value={value}
              onValueChange={(val) => {
                onChange?.(val as TColor);
              }}
            >
              {colors.map((color) => (
                <div
                  key={color.color}
                  onClick={() => {
                    onChange?.(color.color);
                    setOpen(false);
                  }}
                  onMouseEnter={() => setHovered(color.name)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "w-10 h-10 rounded-full cursor-pointer transition-all duration-200",
                    "hover:-translate-y-1",
                    hovered && hovered !== color.name
                      ? "opacity-60"
                      : "opacity-100"
                  )}
                  style={{ backgroundColor: color.color }}
                >
                  <RadioGroupItem value={color.name} className="hidden" />
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
