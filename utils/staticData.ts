import InProgressSvg from "@/public/assets/in-progress.svg";
import backlogSvg from "@/public/assets/backlog.svg";
import todoSvg from "@/public/assets/todo.svg";
import cancelSvg from "@/public/assets/cancelled.svg";
import doneSvg from "@/public/assets/done.svg";

import urgetSvg from "@/public/assets/urgent-priority.svg";
import lowSvg from "@/public/assets/low-priority.svg";
import mediumSvg from "@/public/assets/medium-priority.svg";
import highSvg from "@/public/assets/high-priority.svg";
import noPrioritySvg from "@/public/assets/no-priority.svg";

import featureSvg from "@/public/assets/feature.svg";

export const statusGrouping = [
  { icon: backlogSvg, title: "Backlog" },
  { icon: todoSvg, title: "Todo" },
  { icon: InProgressSvg, title: "In progress" },
  { icon: doneSvg, title: "Done" },
  { icon: cancelSvg, title: "Cancelled" },
];

export const priorityGrouping = [
  { title: "No Priority", icon: noPrioritySvg, priorityLevel: 0 },
  { title: "Low", icon: lowSvg, priorityLevel: 1 },
  { title: "Medium", icon: mediumSvg, priorityLevel: 2 },
  { title: "High", icon: highSvg, priorityLevel: 3 },
  { title: "Urgent", icon: urgetSvg, priorityLevel: 4 },
];

// Constants
export const USER = "USER";
export const STATUS = "STATUS";
export const PRIORITY = "PRIORITY";
export const TITLE = "TITLE";

export const groupingMenuItems = [
  { text: "Status", value: STATUS },
  { text: "User", value: USER },
  { text: "Priority", value: PRIORITY },
];

export const orderingMenuItems = [
  { text: "Title", value: TITLE },
  { text: "Priority", value: PRIORITY },
];

export { featureSvg };
