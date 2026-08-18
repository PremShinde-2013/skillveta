export type SubmissionStatus =
  | "submitted"
  | "approved"
  | "rejected"
  | "resubmit_required";

export function canCreateSubmission(
  latestStatus?: SubmissionStatus
): boolean {
  if (!latestStatus) {
    return true;
  }

  return (
    latestStatus === "rejected" ||
    latestStatus === "resubmit_required"
  );
}

export function getNextAttemptNumber(
  attempts: { attempt_number: number }[]
): number {
  if (attempts.length === 0) {
    return 1;
  }

  return (
    Math.max(...attempts.map((attempt) => attempt.attempt_number)) + 1
  );
}
