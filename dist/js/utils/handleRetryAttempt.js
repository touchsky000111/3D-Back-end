let retryCount = 0;

export default function handleRetryAttempt() {
  6 == (retryCount += 1)
    ? ((retryCount = 0), Mi())
    : setTimeout(function () {
        0 < retryCount && --retryCount;
      }, 2500);
}
