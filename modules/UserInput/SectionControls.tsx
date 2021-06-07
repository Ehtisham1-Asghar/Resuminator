import { HStack } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import { FiEye, FiEyeOff, FiHelpCircle } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";

export interface SectionProperties {
  isHidden?: boolean;
}

interface Props {
  handler?: {
    isDisabled: boolean;
    toggleDisabled: () => void;
  };
  hasToggleButton?: boolean;
  extraChildren?: ReactElement;
}

const SectionControls: React.FC<Props> = ({
  handler = { isDisabled: false, toggleDisabled: () => ({}) },
  hasToggleButton = true,
  children,
  extraChildren,
}) => {
  const { isDisabled, toggleDisabled } = handler;
  return (
    <HStack mb="4" spacing="4">
      {children}
      {hasToggleButton && (
        <TooltipIconButton
          aria-label="Toggle Visibility"
          label="Toggle Visibility"
          icon={isDisabled ? <FiEyeOff /> : <FiEye />}
          onClick={toggleDisabled}
          colorScheme={isDisabled ? "red" : ""}
        />
      )}
      <TooltipIconButton
        aria-label="Know More"
        label="Know More"
        icon={<FiHelpCircle />}
      />
      {extraChildren}
    </HStack>
  );
};

export default SectionControls;