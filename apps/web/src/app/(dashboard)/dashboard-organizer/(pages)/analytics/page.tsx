import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Analytics = () => {
  return (
    <div className='className="flex flex-col gap-4 mx-auto justify-center"'>
      <h1 className="font-bold text-xl">Analysis</h1>
      <Tabs defaultValue="daily" className="w-full">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <div className='h-72 border-mythemes-darkpink/50 border-2 rounded-sm flex bg-white shadow-md'>
            Shows the data in reports visualization with range per day
          </div>
        </TabsContent>
        <TabsContent value="monthly">
          <div className='h-72 border-mythemes-darkpink/50 border-2 rounded-sm flex bg-white shadow-md'>
            Shows the data in reports visualization with range per month
          </div>
        </TabsContent>
        <TabsContent value="yearly">
          <div className='h-72 border-mythemes-darkpink/50 border-2 rounded-sm flex bg-white shadow-md'>
            Shows the data in reports visualization with range per year
          </div>
        </TabsContent>
      </Tabs>
    </div>

  )
}

export default Analytics