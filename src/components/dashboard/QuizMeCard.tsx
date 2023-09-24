"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

type Props = {};

const QuizMeCard = (props: Props) => {
  const router = useRouter();
  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75 border-2 border-b-4 border-r-4 border-black hover:bg-gradient-to-r hover:from-[#CDDEFF] hover:to-white dark:border-white hover:dark:bg-gradient-to-r hover:dark:from-[#0F2C59] hover:dark:to-black"
      onClick={() => {
        router.push("/quiz");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 font-bold transition-all hover:-translate-y-[2px]">
        <CardTitle className="text-2xl font-bold">Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Quiz here yourself
        </p>
      </CardContent>
    </Card>
  );
};

export default QuizMeCard;
