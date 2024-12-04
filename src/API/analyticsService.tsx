import { AnalyticsService } from "./analyticsService";

// Fetch engagement metrics
const fetchEngagementMetrics = async () => {
  const response = await AnalyticsService.getEngagementMetrics();
  console.log("Engagement Metrics:", response.data);
};

// Fetch sales metrics
const fetchSalesMetrics = async () => {
  const response = await AnalyticsService.getSalesMetrics();
  console.log("Sales Metrics:", response.data);
};

// Fetch event trends
const fetchEventTrends = async (eventType: string) => {
  const response = await AnalyticsService.getEventTrends(eventType);
  console.log(`${eventType} Trends:`, response.data);
};

// Fetch heatmap data
const fetchHeatmapData = async () => {
  const response = await AnalyticsService.getHeatmapData();
  console.log("Heatmap Data:", response.data);
};
