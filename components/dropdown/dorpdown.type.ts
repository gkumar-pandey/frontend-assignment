import React from "react";

export interface DropDownMenuItemsProps {
  text?: string;
  menuItems?: {
    text: string;
    value: string;
  }[];
  onSelect: (value: string) => void;
  currSelectedValue: string;
}
