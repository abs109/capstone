"use client";
import { Card,CardContent,CardHeader,CardFooter } from "@/components/ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";
import Backbutton from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {

  return (
    <Card className="shadow-md w-[400px]">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
        <CardFooter>
            <Social/>
        </CardFooter>
        )}
        <CardFooter>
            <Backbutton label={backButtonLabel} href={backButtonHref}/>
        </CardFooter>
    </Card>
  )

}