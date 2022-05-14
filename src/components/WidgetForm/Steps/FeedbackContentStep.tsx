import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackTypeStepProps) {
  const feedbackTypeData = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeData.image.source}
            alt={feedbackTypeData.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeData.title}
        </span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
