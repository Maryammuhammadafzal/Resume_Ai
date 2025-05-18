"use client";
import { Badge } from "@/components/ui/badge";
import { format, formatDistanceToNow } from "date-fns";
import { LineChart, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const DashboardView = ({ insights }) => {
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "positive":
        return { icon: TrendingDown, color: "text-red-500" };
      case "positive":
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const OutlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
            <OutlookIcon className={`h-4 w-4 ${OutlookColor}`} /> 
          </CardHeader>
          <CardContent>
                <div className="text-2xl font-bold">{insights.marketOutlook}</div>
            <p className="text-xs text-muted-foreground">Next Updated {nextUpdateDistance}</p>
          </CardContent>
          
        </Card>
        <Card>
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
            <OutlookIcon className={`h-4 w-4 ${OutlookColor}`} /> 
          </CardHeader>
          <CardContent>
                <div className="text-2xl font-bold">{insights.marketOutlook}</div>
            <p className="text-xs text-muted-foreground">Next Updated {nextUpdateDistance}</p>
          </CardContent>
          
        </Card>
        <Card>
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
            <OutlookIcon className={`h-4 w-4 ${OutlookColor}`} /> 
          </CardHeader>
          <CardContent>
                <div className="text-2xl font-bold">{insights.marketOutlook}</div>
            <p className="text-xs text-muted-foreground">Next Updated {nextUpdateDistance}</p>
          </CardContent>
          
        </Card>
        <Card>
          <CardHeader className=" flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
            <OutlookIcon className={`h-4 w-4 ${OutlookColor}`} /> 
          </CardHeader>
          <CardContent>
                <div className="text-2xl font-bold">{insights.marketOutlook}</div>
            <p className="text-xs text-muted-foreground">Next Updated {nextUpdateDistance}</p>
          </CardContent>
          
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
