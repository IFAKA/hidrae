import { DELAY, END, NEWSTEP, STARTED, STATE } from "./constants.js";

export const start = () => {
  chrome.storage.sync.clear();
  chrome.notifications.create(STARTED);

  const notify = () =>
    chrome.storage.sync.get(["progress"], ({ progress = NEWSTEP }) => {
      chrome.notifications.create({ ...STATE, progress });
      update(progress);
    });

  const update = (oldProgress) => {
    const progress = oldProgress + NEWSTEP;
    progress >= END
      ? (chrome.notifications.create({ ...STATE, progress: END }), stop())
      : chrome.storage.sync.set({ progress });
  };

  const stop = () => clearTimeout(timerId);

  const timerId = setInterval(notify, DELAY);
};