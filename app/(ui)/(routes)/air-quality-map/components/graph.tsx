"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A simple area chart"

const chartData = [
    { month: "January", aqi: 186 },
    { month: "February", aqi: 305 },
    { month: "March", aqi: 237 },
    { month: "April", aqi: 73 },
    { month: "May", aqi: 209 },
    { month: "June", aqi: 214 },
]

const chartConfig = {
    aqi: {
        label: "AQI",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function Graph() {
    return (
        <Card className="w-full h-full bg-primary text-secondary border-gray-800">
            <CardHeader>
                <CardTitle>Area Chart</CardTitle>
                <CardDescription>
                    Showing total visitors for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="aqi"
                            type="natural"
                            fill="var(--color-aqi)"
                            fillOpacity={0.4}
                            stroke="var(--color-aqi)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center justify-center gap-2 leading-none font-medium">
                            Devoloped by AQIIndia
                        </div>
                        
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
