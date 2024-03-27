import {
  ScheduledJobArgs,
  ScheduledJobConfig,
} from "@medusajs/medusa";
import EcontRouter from "../utils/EcontRouter";
import EcontCityService from "../services/econtCity";

type PluginOptions = {
  service_url: string;
  username: string;
  password: string;
};

export default async function getCities({ container, pluginOptions }: ScheduledJobArgs & { pluginOptions: PluginOptions }) {
  const router = new EcontRouter(pluginOptions.service_url ?? "https://demo.econt.com/ee/services", pluginOptions.username, pluginOptions.password);
  const cityService: EcontCityService = container.resolve("econtCityService");
  const { cities = [] } = await router.getCities();

  if (!cities.length) {
    console.log("No cities found");
    return;
  }

  try {
    await cityService.updateAllCities(cities);
    console.log(`Getting cities from Econt via cron job. Found ${cities.length} cities at ${new Date().toISOString()}`);
  } catch (error) {
    console.log("Error updating cities", error);
  }

}

export const config: ScheduledJobConfig = {
  name: "econt-get-cities",
  schedule: "0 0 * * *", // Every day at midnight
};