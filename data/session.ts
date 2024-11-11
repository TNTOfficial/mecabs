import { v4 as uuidv4 } from "uuid";
export const getSessionId = () => {
  const sessionId = sessionStorage.getItem("session-id") || uuidv4();
  sessionStorage.setItem("session-id", sessionId);
  return sessionId;
};
