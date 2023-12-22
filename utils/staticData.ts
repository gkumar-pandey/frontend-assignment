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
  { title: "No Priority", icon: noPrioritySvg },
  { title: "Low", icon: lowSvg },
  { title: "Medium", icon: mediumSvg },
  { title: "High", icon: highSvg },
  { title: "Urgent", icon: urgetSvg },
];

export { featureSvg };
