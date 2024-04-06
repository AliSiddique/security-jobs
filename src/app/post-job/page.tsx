"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
const formSchema = z.object({
    companyName: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    companyEmail: z.string().email(),
    companyWebsite: z.string().url(),
    companySize: z.string().optional(),
    companyType: z.string().optional(),
    companyIndustry: z.string().optional(),
    companyLocation: z.string().optional(),
    companyDescription: z.string().optional(),
    companyLogo: z.string().optional(),
    jobTitle: z.string().optional(),
    jobType: z.string().optional(),
    jobLocation: z.string().optional(),
    jobDescription: z.string().optional(),
    jobResponsibilities: z.string().optional(),
    jobRequirements: z.string().optional(),
    jobSalary: z.string().optional(),
    applyLink: z.string().optional(),
   

  })
export default function HeroFormImageAndForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: "",
            companyEmail: "",
            companyWebsite: "",
            companySize: "",
            companyType: "",
            companyIndustry: "",
            companyLocation: "",
            companyDescription: "",
            companyLogo: "",
            jobTitle: "",
            jobType: "",
            jobLocation: "",
            jobDescription: "",
            jobResponsibilities: "",
            jobRequirements: "",
            jobSalary: "",
            applyLink: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="container py-24 lg:py-32">
          <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
            {/* Title */}
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Solving problems for every team
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Teams use Shadcn UI to build beautiful cross-platform hybrid apps
              in a fraction of the time.
            </p>
            {/* End Title */}
           
       
            {/* Form */}
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="companyEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
            {/* End Form */}
          </div>
        </div>
        <img
          className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full"
          src="https://placehold.co/700x800"
          alt="image description"
        />
        {/* End Col */}
      </div>
      {/* End Hero */}
    </>
  );
}
