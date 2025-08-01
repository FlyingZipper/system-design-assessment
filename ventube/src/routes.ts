import { Clock, Compass, Home, MonitorPlay, ThumbsUp } from "lucide-react";

export const ROUTES = {
    HOME: {
        name: "Home",
        url: "/",
        icon: Home
    },
    EXPLORE: {
        name: "Explore",
        url: "/explore",
        icon: Compass
    },
    WATCH_LATER: {
        name: "Watch Later",
        url: "/watch-later",
        icon: Clock
    },
    LIKED_VIDEOS: {
        name: "Liked Videos",
        url: "/liked-videos",
        icon: ThumbsUp
    },
    SUBCRIPTIONS: {
        name: "Subscriptions",
        url: "/subscriptions",
        icon: MonitorPlay

    },
    videoWatch: {
        name: "Video Watch",
        url: (videoId: string) => `/watch/${videoId}`,
        icon: MonitorPlay
    }
}