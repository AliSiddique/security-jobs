import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Jobs() {
  return (
    <Card className="w-[350px] mx-auto max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
    <CardContent className="flex">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src="your_image_url"
          alt="Project Image"
          className="w-20 h-20 object-cover"
        />
      </div>
      <div className="flex-grow p-4">
        {/* Title */}
        <h2 className="text-lg font-bold mb-2">Create project</h2>
        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          Deploy your new project in one-click.
        </p>
        {/* Form */}
        <form className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
    </CardContent>
    <CardFooter className="flex justify-end bg-gray-100 px-4 py-2">
      <Button variant="outline" className="mr-2">Cancel</Button>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">Deploy</Button>
    </CardFooter>
  </Card>
  
  )
}
