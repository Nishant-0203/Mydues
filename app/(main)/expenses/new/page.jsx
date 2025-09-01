"use client";

import { useRouter } from "next/navigation";
import { ExpenseForm } from "./components/expense-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function NewExpensePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container max-w-3xl mx-auto py-6">
        <div className="mb-6">
          <h1 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Add a new expense
            </span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Record a new expense to split with others
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl rounded-2xl transition-all duration-300">
          <CardContent>
            <Tabs className="pb-3" defaultValue="individual">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="individual">Individual Expense</TabsTrigger>
                <TabsTrigger value="group">Group Expense</TabsTrigger>
              </TabsList>
              <TabsContent value="individual" className="mt-0">
                <ExpenseForm
                  type="individual"
                  onSuccess={(id) => router.push(`/person/${id}`)}
                />
              </TabsContent>
              <TabsContent value="group" className="mt-0">
                <ExpenseForm
                  type="group"
                  onSuccess={(id) => router.push(`/groups/${id}`)}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}