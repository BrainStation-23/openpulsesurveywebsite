
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Briefcase } from "lucide-react";

interface RoleSelectorProps {
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

const RoleSelector = ({ selectedRole, onRoleChange }: RoleSelectorProps) => {
  return (
    <div className="mx-auto max-w-3xl mb-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Who are you?</h2>
      <RadioGroup 
        value={selectedRole} 
        onValueChange={onRoleChange}
        className="inline-flex gap-8 justify-center"
      >
        <div className={`flex flex-col items-center p-6 rounded-xl transition-all ${selectedRole === 'hr' ? 'bg-blue-50 shadow-md' : 'bg-white hover:bg-gray-50'}`}>
          <div className={`rounded-full p-3 mb-3 ${selectedRole === 'hr' ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <Users className={`h-8 w-8 ${selectedRole === 'hr' ? 'text-blue-600' : 'text-gray-500'}`} />
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="hr" id="hr" className="mt-0" />
            <label htmlFor="hr" className={`font-medium text-lg ${selectedRole === 'hr' ? 'text-blue-700' : 'text-gray-700'}`}>HR Professional</label>
          </div>
        </div>
        
        <div className={`flex flex-col items-center p-6 rounded-xl transition-all ${selectedRole === 'management' ? 'bg-blue-50 shadow-md' : 'bg-white hover:bg-gray-50'}`}>
          <div className={`rounded-full p-3 mb-3 ${selectedRole === 'management' ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <Briefcase className={`h-8 w-8 ${selectedRole === 'management' ? 'text-blue-600' : 'text-gray-500'}`} />
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="management" id="management" className="mt-0" />
            <label htmlFor="management" className={`font-medium text-lg ${selectedRole === 'management' ? 'text-blue-700' : 'text-gray-700'}`}>Management Team</label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RoleSelector;
