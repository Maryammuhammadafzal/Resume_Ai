"use client"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { industries } from "@/data/industries";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
const OnboardingForm = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updatedResult,
  } = useFetch(updateUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

  const watchIndustry = watch("industry");

  const onSubmit = async (values) => {
    console.log(values);
    
    try {
      const formatedIndustry = `${values.industry}-${values.subIndustry
        .toLowerCase()
        .replace(/ /g, "-")}`;

      await updateUserFn({
        ...values,
        industry: formatedIndustry,
      });
    } catch (error) {
      console.log("Onboarding Form Submit Error", error.message);
    }
  };

  useEffect(() => { 
    if (updatedResult?.success && !updateLoading) {
      toast.success("Profile Updated Successfully");
      router.push("/dashboard");
      // router.refresh();
    }
  }, [updatedResult, updateLoading]);
  return (
    <div className="flex justify-center items-center bg-background">
      <Card className="w-full max-w-lg mt-10 mx-2">
        <CardHeader>
          <CardTitle className="gradient-title text-4xl">
            Complete Your Profile
          </CardTitle>
          <CardDescription>
            Select your industry to get personalized career insights and
            recommendation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action=""
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-3 ">
              <Label htmlFor="industry">Industry</Label>
              <Select
                onValueChange={(value) => {
                  setValue("industry", value);
                  setSelectedIndustry(
                    industries.find((ind) => ind.id === value)
                  );
                  setValue("subIndustry", "");
                }}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select an Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((ind) => {
                    return (
                      <SelectItem key={ind.id} value={ind.id}>
                        {ind.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-sm text-red-500">
                  {errors.industry.message}
                </p>
              )}
            </div>
            {watchIndustry && (
              <div className="space-y-3">
                <Label htmlFor="subIndustry">Specialization</Label>
                <Select
                  onValueChange={(value) => setValue("subIndustry", value)}
                >
                  <SelectTrigger id="subIndustry">
                    <SelectValue placeholder="Select a Sub Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedIndustry?.subIndustries.map((ind) => {
                      return (
                        <SelectItem key={ind} value={ind}>
                          {ind}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                {errors.industry && (
                  <p className="text-sm text-red-500">
                    {errors.industry.message}
                  </p>
                )}
              </div>
            )}
            <div className="space-y-3">
              <Label htmlFor="experience">Year of Experience</Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of experience"
                {...register("experience")}
              />

              {errors.experience && (
                <p className="text-sm text-red-500">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                placeholder="e.g Pythone , java , project Management"
                {...register("skills")}
              />
              <p className="text-sm text-muted-foreground">
                Seperate Multiple skills with commas
              </p>

              {errors.skills && (
                <p className="text-sm text-red-500">{errors.skills.message}</p>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your background"
                className="h-32"
                {...register("bio")}
              />

              {errors.bio && (
                <p className="text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={updateLoading}>
              <>
                {updateLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin">
                    Saving...
                  </Loader2>
                ) : (
                  "Complete Profile"
                )}
                
              </>
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OnboardingForm;
