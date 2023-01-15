import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import AddAsset from "./pages/AddAsset";
import RootLayout from "./pages/RootLayout";
import Articles from "./pages/Articles";
import Topics from "./pages/Topics";
import TopicsSport from "./pages/TopicsSport";

import { Route } from "react-router-dom";
import AudioRecorder from "./components/Hardware/AudioRecorder";
import Image from "./components/Hardware/Image";
import Video from "./components/Hardware/Video";
import Report from "./components/Hardware/Report";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Articles />} />
      <Route path="topics" element={<Topics />} />
      <Route path="topics/sports" element={<TopicsSport />} />
      <Route path="topics/sports/add" element={<AddAsset />} />
      <Route path="topics/sports/add/report" element={<Report/>} />
      <Route path="topics/sports/add/image" element={<Image />} />
      <Route path="topics/sports/add/audio" element={<AudioRecorder />} />
      <Route path="topics/sports/add/video" element={<Video />} />
      <Route path="topics/sports/add/mobile" element={<AddAsset />} />
    </Route> 
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
