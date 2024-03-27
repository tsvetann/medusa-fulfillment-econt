import {
    ScheduledJobArgs,
    ScheduledJobConfig,
  } from "@medusajs/medusa";
  import EcontRouter from "../utils/EcontRouter";
  import EcontOfficeService from "../services/econtOffice";
  
  type PluginOptions = {
    service_url: string;
    username: string;
    password: string;
  };
  
  export default async function getCities({ container, pluginOptions }: ScheduledJobArgs & { pluginOptions: PluginOptions }) {
    const router = new EcontRouter(pluginOptions.service_url ?? "https://demo.econt.com/ee/services", pluginOptions.username, pluginOptions.password);
    const officeService: EcontOfficeService = container.resolve("econtOfficeService");
    const { offices = [] } = await router.getOffices();
  
    if (!offices.length) {
      console.log("No offices found");
      return;
    }
  
    try {
      await officeService.updateAllOffices(offices);
      console.log(`Getting offices from Econt via cron job. Found ${offices.length} offices at ${new Date().toISOString()}`);
    } catch (error) {
      console.log("Error updating offices", error);
    }
  
  }
  
  export const config: ScheduledJobConfig = {
    name: "econt-get-offices",
    schedule: "0 10 * * *", // Every day at midnight
  };