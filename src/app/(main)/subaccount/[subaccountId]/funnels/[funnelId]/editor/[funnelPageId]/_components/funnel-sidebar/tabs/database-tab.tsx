"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CodeGeneratorButton from "@/lib/codeGenerator";
import getUserId from "@/lib/getUserId";
import { useEditor } from "@/providers/editor/editor-provider";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {};

//////////////////////////////////////         FINDIND AND CREATING IS TAKING HIGHER RESPONSE TIME       ////////////////////////////////////////////////

const DatabaseTab = (props: Props) => {
  const { state } = useEditor();
  const [dbName, setDbName] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const id = await getUserId();
        setUserId(id);
      } catch (error) {
        console.error("Failed to get user ID:", error);
      }
    };

    fetchUserId();
  }, []);

  const handleOnChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDbName(event.target.value);
  };

  const onConnect = async () => {
    console.log("Connecting with database name:", dbName);

    // Sanitize the database name by removing spaces and invalid characters
    const sanitizedDbName = `${dbName}_${userId}`
      .trim()
      .replace(/[^a-zA-Z0-9_-]/g, ""); // allows letters, numbers, hyphens, and underscores
    const sanitizedCollectionName = `newCollection_${userId}`
      .trim()
      .replace(/[^a-zA-Z0-9_-]/g, ""); // or use any other unique naming convention

    // Check if the sanitized name is still valid
    if (!sanitizedDbName) {
      toast.error("Database name is invalid after sanitization.");
      return;
    }

    // Check if the database exists
    try {
      const checkResponse = await fetch("/api/checkDatabaseExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          database: sanitizedDbName,
          collection: sanitizedCollectionName,
        }),
      });

      const checkData = await checkResponse.json();

      if (checkData.exists) {
        toast.error("Database already exists!");
        return;
      }
    } catch (error) {
      console.error("An error occurred while checking:", error);
      toast.error("Failed to check database existence.");
      return;
    }

    // Define the body of the request for creating the database
    const requestBody = {
      dataSource: "Cluster0",
      database: sanitizedDbName, // Use the sanitized input value
      collection: sanitizedCollectionName,
      document: {
        greeting: "Hello, EJSON!",
        date: {
          $date: {
            $numberLong: `${Date.now()}`,
          },
        },
      },
    };

    try {
      // Make the POST request to your API route to create the database
      const response = await fetch("/api/createDB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        toast.success("Database created successfully!");
        console.log("Database connected successfully:", data);
      } else {
        const errorData = await response.json();
        console.error("Failed to connect to database:", errorData);
        toast.error("Failed to create the database.");
      }
    } catch (error) {
      console.error("An error occurred while connecting:", error);
      toast.error("An error occurred during database creation.");
    }
  };

  return (
    <div className="px-6 py-1 flex flex-col gap-4">
      {!state.user.hasDatabase && (
        <div className="flex flex-col gap-4">
          <Label className="text-muted-foreground">DataBase Name</Label>
          <Input
            id="database_name"
            value={dbName}
            onChange={handleOnChanges}
            placeholder="Enter database name"
          />
          <Button onClick={onConnect}>Create</Button>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <Label className="text-muted-foreground">Next.js Code Generator</Label>
        <CodeGeneratorButton elements={state.editor.elements} />
      </div>
    </div>
  );
};

export default DatabaseTab;
