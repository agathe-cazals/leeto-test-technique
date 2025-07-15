import { Meta, StoryFn } from "@storybook/react";
import { ProgressBar, ProgressBarProps } from "./ProgressBar";

export default {
  title: "Components/Common/ProgressBar",
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = ({
  total,
  progress,
  label,
}: ProgressBarProps) => (
  <ProgressBar total={total} progress={progress} label={label} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Progression des dépenses",
  total: 100,
  progress: 50,
};

export const FullProgress = Template.bind({});
FullProgress.args = {
  label: "Progression complète",
  total: 100,
  progress: 100,
};

export const NoProgress = Template.bind({});
NoProgress.args = {
  label: "Aucune progression",
  total: 100,
  progress: 0,
};

export const OverProgress = Template.bind({});
OverProgress.args = {
  label: "Dépassement",
  total: 100,
  progress: 120,
};
