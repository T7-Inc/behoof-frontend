import { Axios } from "./axiosConfig/axios";
import { AxiosResponse } from "axios";

interface TrackingEvent {
  eventType: string;
  eventData?: Record<string, any>;
  timestamp?: string;
}

export class TrackingService {
  /**
   * Tracks a page visit.
   */
  static async trackPageVisit(
    pageUrl: string,
    userId?: string
  ): Promise<AxiosResponse> {
    const response = await Axios.post("tracking/page-visit", {
      pageUrl,
      userId,
      timestamp: new Date().toISOString(),
    });

    return response;
  }

  /**
   * Tracks a button click event.
   */
  static async trackButtonClick(
    buttonId: string,
    userId?: string
  ): Promise<AxiosResponse> {
    const response = await Axios.post("tracking/button-click", {
      buttonId,
      userId,
      timestamp: new Date().toISOString(),
    });

    return response;
  }

  /**
   * Tracks a custom event.
   */
  static async trackCustomEvent(event: TrackingEvent): Promise<AxiosResponse> {
    const response = await Axios.post("tracking/custom-event", {
      ...event,
      timestamp: event.timestamp || new Date().toISOString(),
    });

    return response;
  }
}
