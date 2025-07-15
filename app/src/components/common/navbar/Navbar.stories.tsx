import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import { Navbar, NavbarProps } from "./Navbar";

export default {
  title: "Components/Common/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = ({
  redirectionTo,
  redirectionText,
  className,
}: NavbarProps) => (
  <Navbar
    redirectionTo={redirectionTo}
    redirectionText={redirectionText}
    className={className}
  />
);

export const CardDefault = Template.bind({});
CardDefault.args = {
  redirectionTo: "/test/1",
  redirectionText: "Retour vers la homepage",
};
