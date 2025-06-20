
import React from "react";
import {
  CustomDropdown,
  CustomDropdownTrigger,
  CustomDropdownContent,
  CustomDropdownItem,
  CustomDropdownLabel,
  CustomDropdownSeparator,
} from "./ui/custom-dropdown";

const ExampleCustomDropdown = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-white">Solutions Dropdown Example</h2>
        
        <CustomDropdown>
          <CustomDropdownTrigger className="text-white border border-primary rounded px-4 py-2">
            Solutions
          </CustomDropdownTrigger>
          
          <CustomDropdownContent 
            image="/assets/ai-brain-banner.png"
            imageAlt="Solutions Background"
          >
            <div className="space-y-3">
              <CustomDropdownItem>
                Location Intelligence Solutions
              </CustomDropdownItem>
              <CustomDropdownItem>
                SDI National Mapping
              </CustomDropdownItem>
              <CustomDropdownItem highlighted={true}>
                Environmental Sustainability
              </CustomDropdownItem>
              <CustomDropdownItem>
                Digital Utility Infrastructure
              </CustomDropdownItem>
              <CustomDropdownItem>
                Digital Energy Solutions
              </CustomDropdownItem>
              <CustomDropdownItem>
                GIS and AI Services
              </CustomDropdownItem>
            </div>
          </CustomDropdownContent>
        </CustomDropdown>
      </div>
    </div>
  );
};

export default ExampleCustomDropdown;
