import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Image, Plus, SettingsIcon, SquareStackIcon } from "lucide-react";
import React from "react";

type Props = {};

const TabList = (props: Props) => {
  return (
    <TabsList className="flex items-center flex-col justify-evenly w-full bg-transparent h-fit gap-4 my-3">
      {/* Settings Tab */}
      <div className="flex flex-col items-center relative group">
        <TabsTrigger
          value="Settings"
          className="w-10 h-10 p-0 data-[state=active]:bg-muted rounded-full"
        >
          <SettingsIcon />
        </TabsTrigger>
        <span className="text-xs mt-1 bg-white text-gray-600 px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Settings
        </span>
      </div>

      {/* Components Tab */}
      <div className="flex flex-col items-center relative group">
        <TabsTrigger
          value="Components"
          className="w-10 h-10 p-0 data-[state=active]:bg-muted rounded-full"
        >
          <Plus />
        </TabsTrigger>
        <span className="text-xs mt-1 bg-white text-gray-600 px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Components
        </span>
      </div>

      {/* Layers Tab */}
      <div className="flex flex-col items-center relative group">
        <TabsTrigger
          value="Layers"
          className="w-10 h-10 p-0 data-[state=active]:bg-muted rounded-full"
        >
          <SquareStackIcon />
        </TabsTrigger>
        <span className="text-xs mt-1 bg-white text-gray-600 px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Layers
        </span>
      </div>

      {/* Database Tab */}
      <div className="flex flex-col items-center relative group">
        <TabsTrigger
          value="Database"
          className="w-10 h-10 p-0 data-[state=active]:bg-muted rounded-full"
        >
          <Database />
        </TabsTrigger>
        <span className="text-xs mt-1 bg-white text-gray-600 px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Database
        </span>
      </div>

      {/* Media Tab */}
      <div className="flex flex-col items-center relative group">
        <TabsTrigger
          value="Media"
          className="w-10 h-10 p-0 data-[state=active]:bg-muted rounded-full"
        >
          <Image />
        </TabsTrigger>
        <span className="text-xs mt-1 bg-white text-gray-600 px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Media
        </span>
      </div>
    </TabsList>
  );
};

export default TabList;
