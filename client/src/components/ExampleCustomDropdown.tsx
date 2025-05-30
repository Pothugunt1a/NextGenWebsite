
import React from "react";
import {
  CustomDropdown,
  CustomDropdownTrigger,
  CustomDropdownContent,
  CustomDropdownItem,
  CustomDropdownLabel,
  CustomDropdownSeparator,
} from "@/components/ui/custom-dropdown";

const ExampleCustomDropdown = () => {
  return (
    <div className="p-8 max-w-md">
      <h2 className="text-xl font-semibold mb-4">Custom Dropdown Example</h2>
      
      <CustomDropdown>
        <CustomDropdownTrigger>
          Select an AI Service
        </CustomDropdownTrigger>
        
        <CustomDropdownContent 
          image="/assets/ai-brain-banner.png"
          imageAlt="AI Services"
        >
          <CustomDropdownLabel>AI Consulting</CustomDropdownLabel>
          <CustomDropdownItem>AI and Data Strategy</CustomDropdownItem>
          <CustomDropdownItem>Process Optimization with AI</CustomDropdownItem>
          <CustomDropdownItem>AI Use Case Discovery</CustomDropdownItem>
          
          <CustomDropdownSeparator />
          
          <CustomDropdownLabel>AI Development</CustomDropdownLabel>
          <CustomDropdownItem>AI Components Development</CustomDropdownItem>
          <CustomDropdownItem>AI Academy - R&D</CustomDropdownItem>
          <CustomDropdownItem>SOTA Research/Patents</CustomDropdownItem>
          
          <CustomDropdownSeparator />
          
          <CustomDropdownLabel>Generative AI</CustomDropdownLabel>
          <CustomDropdownItem>Generative AI Development</CustomDropdownItem>
          <CustomDropdownItem>AI Chatbot Development</CustomDropdownItem>
          <CustomDropdownItem>LLM Development</CustomDropdownItem>
        </CustomDropdownContent>
      </CustomDropdown>
    </div>
  );
};

export default ExampleCustomDropdown;
