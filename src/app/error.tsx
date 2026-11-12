"use client";

import ErrorPage from "@/components/errors/ErrorPage";

/**
 * Route-level error boundary (500). Catches render/data errors thrown below the
 * root layout, keeps the shared navbar, and offers a real retry via reset().
 */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage code={500} emitHead onRetry={reset} />;
}
