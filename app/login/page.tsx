"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { account } from "@/lib/appwriteConf";
import { CreateAccount } from "../components/create-account";

type Props = {};

function LoginPage({}: Props) {
  return (
    <main className="w-full h-screen bg-cover  dark:bg-[url('https://images.unsplash.com/photo-1523510468197-455cc987be86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] flex justify-center items-center">
      <CreateAccount />
    </main>
  );
}

export default LoginPage;
